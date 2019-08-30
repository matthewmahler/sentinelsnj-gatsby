import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';
import InstagramPhoto from './InstagramPhoto';
import InstagramVideo from './InstagramVideo';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
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
  }
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    background: grey;
    margin-bottom: 30px;
  }
  @media all and (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-gap: 15px;
    .my-masonry-grid {
      margin-left: -15px; /* gutter size offset */
    }
    .my-masonry-grid_column {
      padding-left: 15px; /* gutter size offset */
    }
    .my-masonry-grid_column > div {
      margin-bottom: 15px; /* space between items */
    }
  }
  .insta-container {
    box-sizing: border-box;
    will-change: transform;

    a {
      border-bottom: none;
    }
    img,
    video {
      width: 100%;
      box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    }
    img {
      opacity: 1;
      display: block;
      width: 100%;
      height: auto;
      transition: 0.5s ease;
      backface-visibility: hidden;
    }
  }
`;

const Gallery = () => {
  const breakpointColumnsObj = {
    default: 3,
    1200: 3,
    991: 2,
    768: 2,
  };
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <Container>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {data.allInstagramContent.edges.map((edge, i) =>
                edge.node.videos == null ? (
                  <InstagramPhoto key={i}>
                    <a href={edge.node.link}>
                      <img
                        src={edge.node.images.standard_resolution.url}
                        alt=""
                      />
                    </a>
                  </InstagramPhoto>
                ) : (
                  <InstagramVideo key={i}>
                    <a href={edge.node.link}>
                      <video
                        src={edge.node.videos.standard_resolution.url}
                        controls="true"
                      />
                    </a>
                  </InstagramVideo>
                )
              )}
            </Masonry>
          </Container>
        );
      }}
    />
  );
};

export default Gallery;

const query = graphql`
  query {
    allInstagramContent(limit: 12) {
      edges {
        node {
          link
          type
          caption {
            text
          }
          videos {
            standard_resolution {
              url
            }
          }
          images {
            standard_resolution {
              url
            }
          }
        }
      }
    }
  }
`;
