import React from 'react';
import styled from 'styled-components';
import FakeData from './FakeData';
import moment from 'moment';

const Container = styled.div`
  width: 100%;
  .parent {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    a{
      text-decoration: none;
      color: #fff;
      .grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      border-bottom: 2px solid #a06367;
      box-sizing: border-box;
      min-height: 6vh;
      span{
          padding: 1em 0;
          display: flex;
          align-items: center;
          width: 100%;
        }
        .date{
          color: #fff;
        }
        
        .city{
          justify-self: end;
          text-align: right;
        }
        .link {
          width: 100%;
          background-color: transparent;
          display: inline-block;
          border-radius: 2px;
          border: 1px solid #a06367;
          color: #259998;
          padding: 11px 20px;
          margin: 0.5em 0;
          
        }
      }
    }
    
      .row:hover{
        box-shadow: 15px 15px 10px 0px rgba(0, 0, 0, 0.75);
        transition: 0.2s ease-in;
      }
    }
  }
  @media all and (max-width: 1200px) {
    font-size: 0.7em;
  }
    
`;

const ShowList = () => {
  return (
    <Container>
      <div className="parent">
        {FakeData.map((show, i) => {
          return (
            <a href={show.offers[0].url}>
              <div className="grid" key={i}>
                <span className="date">
                  {moment(show.datetime).format('LL')}
                </span>
                <span className="venue">{show.venue.name}</span>
                <span className="city">
                  {show.venue.city}, {show.venue.region}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </Container>
  );
};

export default ShowList;
