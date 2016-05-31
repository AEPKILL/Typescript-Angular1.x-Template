import * as angular from 'angular';
const css:{} = require('./main.scss');
console.log(css);
let app = angular.module('app', []);
class AppController {
    
}
app.controller('AppController', AppController);
angular.bootstrap(document.documentElement, ['app']);
