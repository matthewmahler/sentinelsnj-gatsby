import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-right: 5vw;
  h1 {
    box-sizing: border-box;
    font-size: 2em;
    span {
      border-bottom: 5px solid #a06367;
    }
  }
  @media all and (max-width: 1200px) {
    padding-right: 0;
  }
`;

const Video = () => {
  return (
    <Container>
      <h1>
        <span>Videos</span>
      </h1>
      <iframe
        width="100%"
        height="50%"
        src="https://www.youtube.com/embed/np140TWH1WE"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </Container>
  );
};

export default Video;
