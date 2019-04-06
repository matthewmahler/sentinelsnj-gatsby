import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-left: 5vw;
  h1 {
    box-sizing: border-box;
    font-size: 2em;
    span {
      border-bottom: 5px solid #a06367;
    }
  }
  @media all and (max-width: 1200px) {
    padding-left: 0;
    iframe {
      width: 100%;
      height: 60vh;
      padding: 0 auto;
    }
  }
`;

const Music = () => {
  return (
    <Container>
      <h1>
        <span>Music</span>
      </h1>
      <iframe
        src="https://open.spotify.com/embed/album/7xVpp4ebriDZs4p4rUgL4Y"
        width="90%"
        height="40%"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
    </Container>
  );
};

export default Music;
