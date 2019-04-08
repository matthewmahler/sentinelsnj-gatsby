import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const Masthead = styled.header`
  font-family: 'gobold';
  color: #fff;
  background: linear-gradient(to right, #6f6f6f 0%, #000 100%);
  font-size: 1.5em;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 10vh;
  @media all and (max-width: 1200px) {
    ul {
      padding: 0;
    }
    ul li {
      font-size: 0.5em;
    }
  }
  img {
    padding-left: 0.5em;
    max-height: 50px;
    background: transparent;
  }
  ul {
    text-align: right;
    list-style-type: none;
    margin: 0;
    padding-right: 0.5em;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    li {
      display: inline;
      padding: 0.5em;
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
`;

const Section = styled.section`
  font-family: 'gobold';
  color: #333;
  padding: 0;
  margin: 0;
  width: 100%;
`;

const Footer = styled.footer`
  background: linear-gradient(to right, #000 0%, #4f4f4f 100%);
  color: #fff;
  padding: 20px 20px 10px;
  font-size: 14px;
  text-align: center;

  & > p {
    margin-bottom: 10px;
  }

  & > p > a {
    color: #fff;

    &:hover {
      color: #aaa;
    }
  }
`;
const Divider = styled.hr`
  margin: 0;
  padding: 0;
  border: 5px solid #a06367;
`;

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
          contentfulHomePage {
            logo {
              file {
                url
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet title={data.site.siteMetadata.title}>
            <html lang="en" />
          </Helmet>
          <Masthead>
            <img
              src={data.contentfulHomePage.logo.file.url}
              alt={data.contentfulHomePage.logo.file.fileName}
            />
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#media">Media</a>
              </li>
              <li>
                <a href="#merch">Merch</a>
              </li>
              <li>
                <a href="#tour">Tour</a>
              </li>
            </ul>
          </Masthead>
          <Divider />
          <Section>{children}</Section>
          <Footer>
            <p>
              Site Built By:{' '}
              <a
                href="https://mattmahler.tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                Matt Mahler
              </a>
            </p>
          </Footer>
        </>
      )}
    />
  );
}

export default Layout;
