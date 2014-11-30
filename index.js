"use strict";
var path = require('path')
var globby = require('globby')
var frontMatter = require('yaml-front-matter')
var Remarkable = require('remarkable')
var remarkable = new Remarkable({
  linkify: true,
  typographer: true
})

module.exports = function markdowntojson(patterns) {
  var paths = globby.sync(patterns)
  var articles = paths.map(function(filePath) {
    var json = frontMatter.loadFront(filePath, 'markdown')
    json.path = path.dirname(filePath)
    json.markdown = json.markdown.replace(/^\n*/, '')
    return json
  })
  .map(function(json) {
    json.html = remarkable.render(json.markdown)
    return json
  })

  return JSON.stringify(articles, null, 2)
}
