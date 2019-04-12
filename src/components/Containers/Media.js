import React from 'react';
import styled from 'styled-components';
import Music from '../Music';
import Video from '../Video';

const Container = styled.div`
  border-top: 5px solid #a06367;
  min-height: 60vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${props => props.bg.url}) no-repeat top center;
  background-size: cover;
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

const Media = props => {
  return (
    <Container id="media" bg={props.bg}>
      <Music />
      <Video />
    </Container>
  );
};

export default Media;
