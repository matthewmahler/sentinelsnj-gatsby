import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { createGlobalStyle } from 'styled-components';
import Layout from '../components/Layout';
import Landing from '../components/Containers/Landing';
import About from '../components/Containers/About';
import Media from '../components/Containers/Media';
import Merch from '../components/Containers/Merch';
import Tour from '../components/Containers/Tour';

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: "gobold";
  src: url("../fonts/gobold_regular-webfont.woff");
}
  @font-face {
  font-family: "goboldUplow";
  src: url("../fonts/GoboldUplow.woff");
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
          <About aboutUs={contentfulHomePage.aboutUs} />
          <Media />
          <Merch />
          <Tour />
        </Layout>
      )}
    />
  );
};

export default index;
