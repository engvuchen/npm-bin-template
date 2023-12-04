#!/usr/bin/env node

const { help } = require('../util');

const cmds = {
  '--version': version,
  '-V': version,
};
const [, , cmd] = process.argv;
cmds[cmd] ? cmds[cmd]() : help();

function version() {
  return require('../package.json').version;
}
