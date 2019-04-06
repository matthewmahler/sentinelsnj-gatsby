import React from 'react';
import styled from 'styled-components';
import Music from '../Music';
import Video from '../Video';

const Container = styled.div`
  border-top: 5px solid #a06367;
  min-height: 100vh;
  background: #343537;
  color: #d0c5c7;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 50px 0;

  @media all and (max-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0px;
    padding: 20px;
  }
`;

const Media = () => {
  return (
    <Container id="media">
      <Music />
      <Video />
    </Container>
  );
};

export default Media;
