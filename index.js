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
    var meta = frontMatter.loadFront(filePath, '_markdown')
    meta._path = path.dirname(filePath)
    meta._markdown = meta._markdown.replace(/^\n*/, '')
    return {
      meta: meta
    }
  })
  .map(function(json) {
    json.html = remarkable.render(json.meta._markdown)
    return json
  })

  return JSON.stringify(articles, null, 2)
}
