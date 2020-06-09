// es-lint-disable-line
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const firebase_key = {
  project_id: process.env.GATSBY_FIREBASE_PROJECT_ID,
  private_key: process.env.GATSBY_FIREBASE_PRIVATE_KEY,
  client_email: process.env.GATSBY_FIREBASE_CLIENT_EMAIL,
}
console.log('what is in process.env?', firebase_key)

module.exports = {
  siteMetadata: {
    title: `Project re-do: apply new languages and tech stack to improve our solution to a previous project`,
    description: `Apply Gatsby (React, GraphQL), Typescript, and Firebase`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: 'gatsby-firesource',
      options: {
        credential: require('./.env.firebase.json'),
        types: [
          {
            type: 'Interviewers',
            collection: 'interviewers',
            map: doc => ({
              displayName: doc.displayName,
              id: doc.id,
              student___NODE: doc.testing.id, // links gatsby object
            }),
          },
          {
            type: 'Students',
            collection: 'students',
            map: doc => ({
              displayName: doc.displayName,
              id: doc.id,
            }),
          },
        ],
      },
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-typescript',
    `gatsby-transformer-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
