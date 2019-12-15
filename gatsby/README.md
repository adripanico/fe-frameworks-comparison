# Gatsby

This project was created following the Gatsby [tutorial](https://www.gatsbyjs.org/tutorial/) and [documentation](https://www.gatsbyjs.org/docs/).

## Creating the project

```
$ npm install -g gatsby-cli
$ gatsby new gatsby-site
```

## Running the project with the development server

In order to locally serve our application, we just need to run

```
$ gatsby develop
```

This will create a development server listening on port 8000 and watching for any changes on our code in order to refresh our browser automatically.

## Building the application for production

To build our production-ready application, just run

```
$ gatsby build
```

The result is available into the ```/public``` folder.

You can also run a local server with the production version of the aplication by running

```
$ gatsby serve
```

## Adding TypeScript and type definitions

1. Install the Gatsby plugin gatsby-plugin-typescript and type definitions

```
$ npm install --save gatsby-plugin-typescript
$ npm install --save-dev @types/react @types/react-dom @types/node
```

2. Include the plugin in your ```gatsby-config.js``` file

```
module.exports = {
  plugins: [`gatsby-plugin-typescript`],
}
```

## Adding SCSS support

1. Install the Gatsby plugin ```gatsby-plugin-sass``` and ```node-sass```

```
$ npm install --save node-sass gatsby-plugin-sass
```

2. Include the plugin in your ```gatsby-config.js``` file

```
module.exports = {
  plugins: [
    ...,
    `gatsby-plugin-sass`
  ],
}
```

## Adding GraphQL plugin

1. Install the Gatsby plugin ```gatsby-source-graphql```

```
$ npm install --save gatsby-source-graphql
```

2. Include the GraphQL API you want to access in your ```gatsby-config.js``` file.

module.exports = {
  plugins: [
    ...,
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

3. Example of use available in [index.tsx](./src/pages/index.tsx).


## More info

* [Typescript integration](https://www.gatsbyjs.org/packages/gatsby-plugin-typescript/)
* [SCSS integration](https://www.gatsbyjs.org/docs/sass/)
* [GraphQL integration](https://www.gatsbyjs.org/docs/page-query/)