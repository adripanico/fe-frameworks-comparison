/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `RAMAPI`,
        fieldName: `rickAndMorty`,
        url: `https://rickandmortyapi.com/graphql/`,
      },
    },
  ],
}
