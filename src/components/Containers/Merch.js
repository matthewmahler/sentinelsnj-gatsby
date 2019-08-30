import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';
// import { useCheerio } from '../../hooks/useCheerio';
import Products from '../Products';
import cheerio from 'cheerio';
import axios from 'axios';

const Container = styled.div`
  border-top: 5px solid #a06367;
  min-height: 60vh;
  background: #343537;
  color: #d0c5c7;
  display: flex;
  flex-direction: column;
  padding: 50px 5vw;
  text-align: center;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${props => props.bg.url}) no-repeat top center;
  background-size: cover;

  .masonryContainer {
    width: 100%;
  }
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
  }

  // Style your items
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    margin-bottom: 30px;
  }

  h1 {
    box-sizing: border-box;
    font-size: 2em;
    span {
      border-bottom: 5px solid #a06367;
    }
  }
  @media all and (max-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0px;
    padding: 20px;
    .my-masonry-grid {
      margin-left: -15px; /* gutter size offset */
    }
    .my-masonry-grid_column {
      padding-left: 15px; /* gutter size offset */
    }
    .my-masonry-grid_column > div {
      margin-bottom: 15px; /* space between items */
    }
    .masonryContainer {
      width: 100%;
    }
    .name {
      font-family: 'Quicksand';
    }
  }
`;

const Merch = props => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const baseURL = 'https://downrightmerchinc.com';

  useEffect(() => {
    axios
      .get('https://downrightmerchinc.com/collections/sentinels?page=1')
      .then(response => {
        const $ = cheerio.load(response.data);

        // The pre.highlight.shell CSS selector matches all `pre` elements
        // that have both the `highlight` and `shell` class
        const urlElems = $('li.grid__item');

        // We now loop through all the elements found
        for (let i = 0; i < urlElems.length; i++) {
          let product = {
            id: i,
            name: null,
            image: null,
            price: null,
            url: null,
          };
          const name = $(urlElems[i]).find('div.product-card__title')[0];
          const image = $(urlElems[i]).find('img.grid-view-item__image')[0];
          const price = $(urlElems[i]).find('.price-item--regular')[0];
          const url = $(urlElems[i]).find('a.full-width-link')[0];

          if (name && image && price && url) {
            product.name = $(name)
              .text()
              .replace('Sentinels - ', '');
            product.image = $(image)
              .attr('data-src')
              .replace('{width}', '500');

            product.price = $(price)
              .text()
              .trim();
            product.url = baseURL + $(url).attr('href');
          }

          setProducts(oldArray => [...oldArray, product]);

          if (i === urlElems.length - 1) {
            setLoading(false);
            console.log(products);
          }
        }
      });
  }, []);

  const breakpointColumnsObj = {
    default: 4,
    1100: 4,
    700: 3,
    500: 2,
  };
  return (
    <Container id="merch" bg={props.bg}>
      <h1>
        <span>Merch</span>
      </h1>

      {loading || products.length !== 8 ? (
        'Loading...'
      ) : (
        <div className="masonryContainer">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {products.map(({ id, name, image, price, url }) => (
              <Products
                key={id}
                name={name}
                image={image}
                price={price}
                url={url}
              />
            ))}
          </Masonry>
        </div>
      )}
    </Container>
  );
};

export default Merch;
