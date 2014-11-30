"use strict";
var md2json = require('../')

var json = md2json(process.argv.splice(2))

console.log(json)
