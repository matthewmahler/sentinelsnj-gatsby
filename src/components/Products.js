import React, { useState, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const Container = styled.div`
  background: #34353766;
  box-shadow: 5px 5px 5px 0px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  :hover {
    transition: 0.2s;
    box-shadow: 10px 10px 10px 0px #a06367;
  }
  div {
    position: relative;
    width: 100%;
    img {
      max-width: 90%;
      margin: 10px;
    }
    text-decoration: none;
    color: #929da6;
    .info {
      position: absolute;
      top: ${props => (props.height / 2) * -1 - 30}px;
      .name,
      .price {
        text-decoration: none;
        display: block;
        font-size: 1.1em;
        color: #a06367;
        padding: 0.2em;
        margin: 0;
      }
    }
  }
`;

const Products = ({ name, image, price, url }) => {
  const [flipped, set] = useState(true);
  const { transform, opacity, display } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
    display: flipped ? 'none' : 'block',
  });
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const measuredRef = useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
      setWidth(node.getBoundingClientRect().width);
    }
  }, []);
  return (
    <Container
      onClick={() => set(state => !state)}
      height={height}
      width={width}
    >
      <animated.div
        ref={measuredRef}
        className="front"
        style={{
          opacity,
          transform: transform.interpolate(t => `${t} rotateX(180deg)`),
        }}
      >
        <img alt={name} src={image} />
      </animated.div>
      <animated.div
        className="back"
        style={{ opacity: opacity.interpolate(o => 1 - o), transform, display }}
      >
        <div className="info">
          <a
            className="name"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {name}
          </a>
          <a
            className="price"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {price}
          </a>
        </div>
      </animated.div>
    </Container>
  );
};

export default Products;
