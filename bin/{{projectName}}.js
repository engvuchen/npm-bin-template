#!/usr/bin/env node

const { help } = require('../util');

const cmds = {
  '--version': version,
  '-V': version,
  // 其他逻辑写在 root/index.js 中
};
const [, , cmd] = process.argv;
cmds[cmd] ? cmds[cmd]() : help();

function version() {
  console.log(require('../package.json').version);
}
