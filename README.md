#Yieldify Challenge 

This is the source code for the yieldify challenge - Second Round.



### Install app dependencies

1. Run `npm install` to install app dependencies.



### Running the code

The application uses webpack as the module bundler and webpack-dev-server as the dev server.

1. Run `npm install webpack -g` to install webpack globally.

1. Run `npm install webpack-dev-server -g` to install webpack-dev-server globally.

1. Run `npm run dev`

1. Go to http://localhost:8080 or http://localhost:8080/webpack-dev-server/

1. Click anywhere within the webpage to 'fire' the circles.



### Running the code without server

1. Run `npm run build` to build the application to the 'dist' directory. 

1. Open 'index.html' in the 'dist' directory directly into the browser.

1. Click anywhere within the webpage to 'fire' the circles.



### Running the tests

The application uses karma and phantomjs to run tests.

1. Run `npm install phantomjs -g` to install phantomjs globally.

1. Run `npm install karma-cli -g` to install karma globally.

1. Run `npm run test` to run tests.
