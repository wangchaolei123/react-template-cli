// import inquirer from 'inquirer';
// import ora from "ora";
// import download from "download-git-repo";
// import fs from 'fs-extra'
// import path from "path";

const fs = require('fs-extra');
const ora = require('ora');
const inquirer = require('inquirer');
const download = require('download-git-repo');
const path = require('path');


const getFileName = (answer) => {
  if (answer.i18nType === '1') {
    return `${answer.buildType}-i18n-react-template`
  }
  return `${answer.buildType}-react-template`
}

const createApp = async (projectName, description) => {
  const question = [
    {
      type: "list",
      name: 'buildType',
      message: "构建工具",
      choices: [
        {name: "webpack", value: 'webpack'},
        {name: "vite", value: 'vite'}
      ]
    },
    {
      type: "list",
      name: 'i18nType',
      message: "是否支持国际化",
      choices: [
        {name: "支持", value: '1'},
        {name: "不支持", value: '0'}
      ]
    },
    {
      type: "list",
      name: 'template',
      message: "本地模板还是拉取远端模板",
      choices: [
        {name: "本地", value: 'local'},
        {name: "远端", value: 'remote'}
      ]
    }
  ];

  const answer = await inquirer.prompt(question);
  const fileName = getFileName(answer)

  const root = path.resolve(projectName)
  fs.ensureDirSync(projectName)

  const packJson = {
    name: projectName,
    version: '1.0.0',
    description
  }

  const spinner = ora({
    spinner: 'soccerHeader',
    prefixText: `loading  template`,
  });
  spinner.start('正在下载模板...');
  if (answer?.template === 'remote') {
    download(
      '',
      `${process.cwd()}/${projectName}`,
      function (err) {
        if (!err) {
          let json = fs.readJsonSync(`${root}/package.json`)
          json = {...json, ...packJson}
          fs.writeJsonSync(
            path.join(root, 'package.json'),
            json,
            {spaces: 2}
          )
          spinner.succeed('下载成功,😁');

        } else {
          return spinner.fail(
            '下载失败😭,确保你的网络连接正常,能访问github.com'
          );
        }
      }
    )
  }

  if (answer?.template === 'local') {
    const templatePath = path.resolve(__dirname, `../template/${fileName}`)

    try {
      await fs.copy(templatePath, root)
      let json = fs.readJsonSync(`${root}/package.json`)
      json = {...json, ...packJson}
      fs.writeJsonSync(
        path.join(root, '/package.json'),
        json,
        {spaces: 2}
      )
      spinner.succeed('模板生成成功,😁');
    } catch (err) {
      spinner.fail('生成失败😭' + err)
    }
  }
};

module.exports = {createApp}
