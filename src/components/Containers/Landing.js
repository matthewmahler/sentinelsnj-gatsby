import React from 'react';
import styled from 'styled-components';

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 90vh;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9)),
    url(${props => props.bg.file.url}) no-repeat top center;
  background-size: cover;

  img {
    text-align: center;
    width: 70%;
  }
  h1 {
    color: #a06367;
    font-size: 3em;
    margin: 0.3em;
  }
  span {
    display: block;
    text-align: center;
    font-weight: bold;
    color: #929da6;
    font-size: 1.5em;
    a {
      text-decoration: none;
      color: #929da6;
    }
    a:hover {
      color: #a06367;
    }
  }
  @media all and (max-width: 1200px) {
    text-align: center;
  }

  @media all and (max-width: 575px) {
    h1 {
      font-size: 2em;
    }
  }
`;

const Landing = ({ logoInvert, cta1Text, heroBackground }) => {
  return (
    <Hero bg={heroBackground}>
      <img src={logoInvert.file.url} alt={logoInvert.file.fileName} />

      <h1> {cta1Text}</h1>
      <span>
        Get It <a href="www.google.com">Now</a>
      </span>
    </Hero>
  );
};
export default Landing;
