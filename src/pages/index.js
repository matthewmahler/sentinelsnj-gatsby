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
  src: url('../fonts/gobold_regular-webfont.eot'); /* IE9 Compat Modes */
  src: url('../fonts/gobold_regular-webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/gobold_regular-webfont.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/gobold_regular-webfont.woff') format('woff'), /* Pretty Modern Browsers */
       url('../fonts/gobold_regular-webfont.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('../fonts/gobold_regular-webfont.svg#svgFontName') format('svg'); /* Legacy iOS */
}
  @font-face {
  font-family: "goboldUplow";
  src: url('../fonts/GoboldUplow.eot'); /* IE9 Compat Modes */
  src: url('../fonts/GoboldUplow.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/GoboldUplow.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/GoboldUplow.woff') format('woff'), /* Pretty Modern Browsers */
       url('../fonts/GoboldUplow.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('../fonts/GoboldUplow.svg#svgFontName') format('svg'); /* Legacy iOS */
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
