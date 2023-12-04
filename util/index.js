function help() {
  let pkg = require('../package.json');
  let command = Object.keys(pkg.bin)[0];
  console.log([`Usage`, `  ${command} --version, -V`].join('\n'));
}

module.exports = {
  help,
};
