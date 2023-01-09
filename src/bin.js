#!/usr/bin/env node

const {program} = require('commander')
const {createApp} = require('./createApp');
const chalk = require('chalk')
const fs = require('fs-extra')
const json = fs.readJsonSync(`${__dirname}/../package.json`)

const SUBCOMMANDS = ['create', 'init', 'version'];
const version = json.version;
program.version(version, '-v,--version')
program
  .name('options')
  .usage('[commands] [options]')
  .arguments('<cmd>')
  .action((cmd) => {
    if (SUBCOMMANDS.indexOf(cmd) === -1) {
      chalk.red('Invalid command...');
      program.help();
    }
  });
// 获取remote的模板
program
  .command('create <projectName> [description]')
  .description('create a new project')
  .action((name, des) => {
    createApp(name, des);
  });


program.parse(process.argv);
