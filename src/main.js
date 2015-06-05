/*
    To run the server, use a static file server. For example:

    In project root --> python -m SimpleHTTPServer

    OR

    npm install -g http-server
    In project root --> http-server
 */

/*
    To compile this code (don't forget to npm install first!):

    npm install -g browserify
    In project root --> browserify -t babelify -t browserify-ngannotate src/main.js > app.js
 */

require('angular');
require('angular-ui-router');

var app = angular.module('JoesApp', ['ui.router']);

app.config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', {
        url: '/',
        template: '<h1>Hello, {{ event }}!</h1>',
        controller: 'MyCtrl'
    });
});

require('./controller');
require('./factory');

angular.bootstrap(document.body, ['JoesApp']);