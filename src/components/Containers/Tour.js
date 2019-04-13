import React from 'react';
import styled from 'styled-components';
import ShowList from '../ShowList';
import Map from '../Map';
import { useFetch } from '../../hooks/useFetch';

const Container = styled.div`
  border-top: 5px solid #a06367;
  min-height: 100vh;
  background: #343537;
  color: #d0c5c7;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 50px 0;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${props => props.bg.url}) no-repeat top center;
  background-size: cover;

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
    padding: 20px 5vw;
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

const Tour = props => {
  const url = `https://rest.bandsintown.com/artists/Sentinels/events?app_id=${
    process.env.GATSBY_BANDSINTOWN_API_KEY
  }&date=upcoming`;
  const [data, loading] = useFetch(url);
  return (
    <Container id="tour" bg={props.bg}>
      <div className="tour">
        <h1>
          <span>Dates</span>
        </h1>
        {loading ? 'Loading...' : <ShowList data={data} />}
      </div>
      <div className="map">
        <h1>
          <span>Tour Map</span>
        </h1>
        {loading ? 'Loading...' : <Map data={data} />}
      </div>
    </Container>
  );
};

export default Tour;
