const translate = require('language-translate');
const path = require('path');

type LanguageType =
  | 'zh-CN'
  | 'en'
  | 'zh-TW' //繁体
  | 'vi' //越南语
  | 'ja' //日语
  | 'es' //西班牙语
  | 'fr'; //法语

const base: {
  fromLang: LanguageType; // 待翻译文件所属语言
  fromFileName: string; // 待翻译文件名
  baseFromPath: string; // 待翻译文件所在路径
  baseToPath: string; // 翻译后创建或插入文件的存放路径
  ip: string; // 代理ip（因为使用Google翻译，需要进行代理）
  port: string; // 代理端口
  // 翻译模式
  // create 将翻译结果以创建新文件方式输出到指定路径
  // insert 在指定现有文件尾部插入翻译结果方式进行
  mode: 'create' | 'insert';
} = {
  fromLang: 'zh-CN',
  fromFileName: '../src/i18n/zh-CN.ts',
  baseFromPath: __dirname + '/',
  baseToPath: path.join(__dirname, '../'),
  ip: '127.0.0.1',
  port: '7890',
  mode: 'create',
};

const config: Array<{
  lang: string; // 目标语言
  toFileName: string; // 目标文件名（会和 baseToPath 进行拼接）
}> = [
  {
    lang: 'en',
    toFileName: 'en.ts',
  },
];
translate(base, config);
