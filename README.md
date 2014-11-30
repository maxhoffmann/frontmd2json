frontmd2json
============

convert markdown files with frontmatter to json

Installation
------------

```
npm install frontmd2json -g
```

Usage
-----

```
frontmd2json **/*.markdown
```

JavaScript
----------

```js
var frontmd2json = require('frontmd2json')

var json = frontmd2json(['**/*.markdown', '**/*.md'])
```

Example
-------

__Input__
```markdown
---
date: 2014-11-02
---
# Headline

Paragraph
```

__Output__
```json
[
  {
    "meta": {
      "date": "2014-11-02T00:00:00.000Z",
      "_markdown": "# Headline\nParagraph",
      "_path": "path/to/markdown.md"
    },
    "html": "<h1>Headline</h1><p>Paragraph</p>"
  }
]
```
