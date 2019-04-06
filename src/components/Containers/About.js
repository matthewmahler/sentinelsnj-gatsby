import React from 'react';
import styled from 'styled-components';
import Gallery from '../Gallery';

const Container = styled.div`
  min-height: 100vh;
  background: #343537;
  color: #d0c5c7;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 50px 0;
  h1 {
    box-sizing: border-box;
    font-size: 2em;
    span {
      border-bottom: 5px solid #a06367;
    }
  }
  .about {
    padding-left: 5vw;

    div {
      width: 80%;
      font-family: 'goboldUplow';
      p {
        font-size: 1.3em;
        text-indent: 2em;
      }
    }
  }
  .gallery {
    padding-right: 5vw;
  }
`;

const About = props => {
  return (
    <Container>
      <div className="about">
        <h1>
          <span>About Us</span>
        </h1>
        <div
          dangerouslySetInnerHTML={{
            __html: props.aboutUs.childMarkdownRemark.html,
          }}
        />
      </div>
      <div className="gallery">
        <h1>
          <span>Gallery</span>
        </h1>
        <Gallery />
      </div>
    </Container>
  );
};

export default About;
