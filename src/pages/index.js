import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { createGlobalStyle } from 'styled-components';
import Layout from '../components/Layout';
import Landing from '../components/Containers/Landing';
import About from '../components/Containers/About';
import Media from '../components/Containers/Media';
import Merch from '../components/Containers/Merch';
import Tour from '../components/Containers/Tour';
import font1 from '../fonts/gobold_regular-webfont.woff2';
import font2 from '../fonts/gobold_regular-webfont.woff';
import font3 from '../fonts/gobold_regular-webfont.ttf';
import font4 from '../fonts/GoboldUplow.woff2';
import font5 from '../fonts/GoboldUplow.woff';
import font6 from '../fonts/GoboldUplow.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: "gobold";
  src: url(${font1}) format('woff2'), /* Super Modern Browsers */
       url(${font2}) format('woff'), /* Pretty Modern Browsers */
       url(${font3})  format('truetype'), /* Safari, Android, iOS */
}
  @font-face {
  font-family: "goboldUplow";
  src: url(${font4}) format('woff2'), /* Super Modern Browsers */
       url(${font5}) format('woff'), /* Pretty Modern Browsers */
       url(${font6})  format('truetype'), /* Safari, Android, iOS */
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
