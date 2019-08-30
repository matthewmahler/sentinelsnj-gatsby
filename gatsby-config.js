const dotenv = require('dotenv');
const path = require('path');

if (process.env.ENVIRONMENT !== 'production') {
  dotenv.config();
}

const { spaceId, accessToken } = process.env;

module.exports = {
  siteMetadata: {
    title: 'Sentinels | Unsound Recollections',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sentinels | Unsound Recollections`,
        short_name: `Sentinels`,
        start_url: `/`,
        background_color: `#343537`,
        theme_color: `#A06367`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/Sentinels-LogoEmblem.png`, // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'v40zmgm5a9by',
        accessToken:
          'c6d29a382898d50cd5ca5838311a4d8e221caeb8f00a1cc984bb4a9496141915',
      },
    },
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token: '419718601.1677ed0.b6492127cdba41d688ec777dc8ab5557',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['Quicksand:400,700'],
      },
    },
  ],
};
