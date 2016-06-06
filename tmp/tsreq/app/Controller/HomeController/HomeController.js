"use strict";
var style = require('./HomeController.scss');
exports.state = 'Home';
exports.url = '/';
exports.template = require('./HomeController.html');
exports.name = 'HomeController';
exports.nickName = 'home';
exports.depends = [
    new Promise(function (r) { require(['./../../Directive/red/red'], function (e) { return r(e); }); }),
    new Promise(function (r) { require(['./../../Directive/Nav/Nav'], function (e) { return r(e); }); })
];
var HomeController = (function () {
    /** @ngInject */
    function HomeController() {
        this.name = exports.name;
        this.style = style;
    }
    return HomeController;
}());
exports.HomeController = HomeController;
function registeMe(ngModel) {
    ngModel.controller(exports.name, HomeController);
}
exports.registeMe = registeMe;
