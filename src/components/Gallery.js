import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  .insta-container {
    box-sizing: border-box;
    transition: 0.3s;
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
    .middle {
      transition: 0.5s ease;
      opacity: 0;
      position: absolute;
      top: 0%;
    }
  }
  .insta-container:hover .image {
    opacity: 0.3;
  }

  .insta-container:hover .middle {
    opacity: 1;
  }

  .text {
    font-family: 'GoboldUplow';
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    font-size: 1em;
    padding: 1em 2em;
  }
  .insta-container:hover {
    filter: brightness(120%);
    transition: 0.3s;
    transition-timing-function: ease-in-out;
  }
`;

const Gallery = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        console.log(data);
        return (
          <Container>
            {data.allInstagramContent.edges.map((edge, i) =>
              edge.node.videos == null ? (
                <div key={i} className="insta-container">
                  <a href={edge.node.link}>
                    <img
                      src={edge.node.images.standard_resolution.url}
                      alt=""
                    />
                  </a>
                  <div class="middle">
                    <div class="text">{edge.node.caption.text}</div>
                  </div>
                </div>
              ) : (
                <div key={i} className="insta-container">
                  <a href={edge.node.link} />
                  <video
                    src={edge.node.videos.standard_resolution.url}
                    controls="true"
                  />
                </div>
              )
            )}
          </Container>
        );
      }}
    />
  );
};

export default Gallery;

const query = graphql`
  query {
    allInstagramContent(limit: 9) {
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
