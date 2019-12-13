# Angular

This project was created following the Angular [getting started](https://angular.io/start) and [documentation](https://angular.io/docs).

## Creating the project

To create our Angular project we will use the Angular CLI:

```
$ npm install -g @angular/cli
$ ng new angular
```

The CLI will ask us if we want to add Angular routing (yes) and the stylesheet format we want to use (SCSS) and then it will create all the necessary files for our project.

## Running the project with the development server

In order to locally serve our application, we just need to run

```
$ npm run start
```

This will create a development server listening on port 4200 and watching for any changes on our code in order to refresh our browser automatically.

## Building the application for production

To build our production-ready application, just run

```
$ npm run build
```

The result is available into the ```/dist``` folder.
