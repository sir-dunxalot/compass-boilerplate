var lint = require('sass-lint')
var path = require('path');
var sassTrue = require('sass-true');

var sassFile = path.join(__dirname, 'dummy.scss');

sassTrue.runSass({ file: sassFile }, describe, it);

// TODO - sass linting
