import React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import { useFetch } from '../../hooks/useFetch';

const Container = styled.div`
  border-top: 5px solid #a06367;
  min-height: 60vh;
  background: #343537;
  color: #d0c5c7;
  display: flex;
  flex-direction: column;
  padding: 50px 0;
  text-align: center;
  align-items: center;
  justify-content: center;

  .masonryContainer {
    width: 80%;
  }
  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -30px; /* gutter size offset */
    width: auto;
  }
  .my-masonry-grid_column {
    padding-left: 30px; /* gutter size */
    background-clip: padding-box;
    .product {
      background: inherit;
      width: 100%;
      box-shadow: 15px 15px 10px 0px rgba(0, 0, 0, 0.75);
      a {
        text-decoration: none;
        color: #929da6;
        img {
          width: 100%;
          padding-bottom: 0.7em;
        }
        .name,
        .price {
          margin: 0;
          padding: 0 0 0.5em 0;
        }
      }
      a:hover {
        color: #a06367;
        filter: brightness(120%);
        transition: 0.1s;
        transition-timing-function: ease-in-out;
      }
    }
  }

  // Style your items
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    background: grey;
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
  }
`;

const Merch = () => {
  const baseURL = 'https://sentinels.bigcartel.com';
  const [data, loading] = useFetch(
    `https://api.bigcartel.com/sentinels/products.json`
  );

  const products = data.map(({ id, name, images, price, url }) => (
    <div className="product" key={id}>
      <a href={`${baseURL}${url}`}>
        <img alt={name} src={images[0].url} />
        <p className="name">{name}</p>
        <p className="price">${price}</p>
      </a>
    </div>
  ));

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  return (
    <Container id="merch">
      <h1>
        <span>Merch</span>
      </h1>

      {loading ? (
        'Loading...'
      ) : (
        <div className="masonryContainer">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {products}
          </Masonry>
        </div>
      )}
    </Container>
  );
};

export default Merch;
