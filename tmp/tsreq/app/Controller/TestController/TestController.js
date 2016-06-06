"use strict";
var style = require('./TestController.scss');
exports.state = 'Test';
exports.url = '/Test';
exports.template = require('./TestController.html');
exports.name = 'TestController';
exports.nickName = 'test';
exports.depends = [];
var TestController = (function () {
    /** @ngInject */
    function TestController() {
        this.style = style;
        this.name = exports.name;
    }
    return TestController;
}());
exports.TestController = TestController;
function registeMe(ngModel) {
    ngModel.controller(exports.name, TestController);
}
exports.registeMe = registeMe;
