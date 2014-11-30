"use strict";
var globby = require('globby')
var frontMatter = require('yaml-front-matter')
var Remarkable = require('remarkable')
var remarkable = new Remarkable({
  linkify: true,
  typographer: true
})

module.exports = function markdowntojson(patterns) {
  var paths = globby.sync(patterns)
  var articles = paths.map(function(path) {
    var json = frontMatter.loadFront(path, 'markdown')
    json.markdown = json.markdown.replace(/^\n*/, '')
    return json
  })
  .map(function(json) {
    json.html = remarkable.render(json.markdown)
    return json
  })

  return JSON.stringify(articles, null, 2)
}
