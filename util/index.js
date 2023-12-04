function help() {
  let pkg = require('../package.json');
  console.log([`Usage`, `  ${pkg} --version, -V`].join('\n'));
}

module.exports = {
  help,
};
