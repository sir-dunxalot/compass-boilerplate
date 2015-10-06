var chalk = require('chalk');
var lint = require('sass-lint');
var path = require('path');
var sassTrue = require('sass-true');

var dummyFilePath = path.join(__dirname, 'dummy.scss');
var sassLintOptions = {
  configFile: 'sass-lint.yml',
}

/* Lint the lib and test files */

var results = lint.lintFiles('{lib,tests}/**/*.scss', sassLintOptions, sassLintOptions.configFile);
var formattedResults = lint.format(results);

/* Log the linting results */

if (!formattedResults) {
  console.log(chalk.white('  Linting'));
  console.log(chalk.green('    ✓  No SASS linting errors - you rock!'));
} else {
  console.log(lint.format(results));
}

/* Then run the test suite */

sassTrue.runSass({ file: dummyFilePath }, describe, it);
