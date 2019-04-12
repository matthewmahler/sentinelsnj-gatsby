import React from 'react';
import styled from 'styled-components';
import SpotifyPlayer from 'react-spotify-player';

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
      height: 300px;
      padding: 0 auto;
    }
  }
`;

const player = {
  uri: 'spotify:album:7xVpp4ebriDZs4p4rUgL4Y',
  size: { width: '100%', height: '300' },
  view: 'coverart',
  theme: 'black',
};

const Music = () => {
  return (
    <Container>
      <h1>
        <span>Music</span>
      </h1>
      <SpotifyPlayer
        uri={player.uri}
        size={player.size}
        view={player.view}
        theme={player.theme}
      />
    </Container>
  );
};

export default Music;
