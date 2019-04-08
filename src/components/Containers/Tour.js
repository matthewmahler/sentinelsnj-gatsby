import React from 'react';
import styled from 'styled-components';
import ShowList from '../ShowList';
import Map from '../Map';

const Container = styled.div`
  border-top: 5px solid #a06367;
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
  .tour {
    padding-left: 5vw;

    div {
      width: 100%;
      font-family: 'Quicksand';
      font-weight: 400;
      p {
        font-size: 1.3em;
        text-indent: 2em;
      }
    }
  }
  .map {
    padding-right: 5vw;
  }
  @media all and (max-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0px;
    padding: 50px 5vw;
    .tour,
    .map {
      width: 100%;
      padding: 0;
    }
    .tour > div > p {
      font-size: 1em;
    }
  }
`;

const Media = () => {
  return (
    <Container id="tour">
      <div className="tour">
        <h1>
          <span>Dates</span>
        </h1>
        <ShowList />
      </div>
      <div className="map">
        <h1>
          <span>Tour Map</span>
        </h1>
        <Map />
      </div>
    </Container>
  );
};

export default Media;
