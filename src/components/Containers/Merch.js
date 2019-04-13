import React from 'react';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import { useFetch } from '../../hooks/useFetch';
import Products from '../Products';

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
  const [data, loading] = useFetch(
    `https://api.bigcartel.com/sentinels/products.json`
  );

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

      {loading ? (
        'Loading...'
      ) : (
        <div className="masonryContainer">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {data.map(({ id, name, images, price, url }) => (
              <Products
                key={id}
                name={name}
                images={images}
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
