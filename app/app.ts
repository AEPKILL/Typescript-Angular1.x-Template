/// <reference path="./common.ts"/>
require('./main.scss');

var canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;
var ctx = canvas.getContext('2d');
var body = document.body;
canvas.width = body.clientWidth;
canvas.height = body.clientHeight;
