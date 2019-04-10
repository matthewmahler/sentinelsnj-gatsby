import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { createGlobalStyle } from 'styled-components';
import Layout from '../components/Layout';
import Landing from '../components/Containers/Landing';
import About from '../components/Containers/About';
import Media from '../components/Containers/Media';
import Merch from '../components/Containers/Merch';
import Tour from '../components/Containers/Tour';
import '../fonts/fonts.css';

const GlobalStyle = createGlobalStyle`
  html{
    font-family: 'gobold', '-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol', sans-serif; 
  }

  body {
    margin: ${props => (props.noMargin ? 0 : 0)};
  }
  @media all and (max-width: 1200px) {
    width: 100%
    html{
      margin: ${props => (props.noMargin ? 0 : 0)};
    
    }
    
  }
`;

const index = () => {
  return (
    <StaticQuery
      query={graphql`
        query HomePage {
          contentfulHomePage {
            title
            date
            cta1Text
            aboutUs {
              childMarkdownRemark {
                html
              }
            }
            heroBackground {
              file {
                url
              }
            }
            backgroundImages {
              file {
                url
              }
            }
            image {
              file {
                url
              }
            }
            logo {
              file {
                url
              }
            }
            logoInvert {
              file {
                url
              }
            }
            content {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      `}
      render={({ contentfulHomePage }) => (
        <Layout>
          <GlobalStyle noMargin />
          <Landing {...contentfulHomePage} />
          <About
            aboutUs={contentfulHomePage.aboutUs}
            bg={contentfulHomePage.backgroundImages[0].file}
          />
          <Media bg={contentfulHomePage.backgroundImages[1].file} />
          <Merch bg={contentfulHomePage.backgroundImages[2].file} />
          <Tour bg={contentfulHomePage.backgroundImages[3].file} />
        </Layout>
      )}
    />
  );
};

export default index;
