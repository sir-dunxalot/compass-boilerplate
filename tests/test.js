var chalk = require('chalk');
var lint = require('sass-lint');
var path = require('path');
var sassTrue = require('sass-true');

var dummyFilePath = path.join(__dirname, 'tests.scss');
var sassLintOptions = {
  configFile: 'sass-lint.yml',
}

/* Lint the lib and test files

Ignore _units.scss because of issues like:
https://github.com/sasstools/sass-lint/issues/210
*/

var results = lint.lintFiles('{lib,tests}/**/!(_units).scss', sassLintOptions, sassLintOptions.configFile);
var formattedResults = lint.format(results);

/* Log the linting results */

console.log(chalk.white('  Linting'));

if (!formattedResults) {
  console.log(chalk.green('    ✓  No SASS linting errors - you rock!'));
  console.log('');
} else {
  console.log(lint.format(results));
}

/* Then run the test suite */

sassTrue.runSass({ file: dummyFilePath }, describe, it);
