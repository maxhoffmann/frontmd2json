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
