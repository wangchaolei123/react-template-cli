const postcssPresetEnv = require('postcss-preset-env');
const atImport = require('postcss-import');
const cssnano = require('cssnano');
const autoPrefixer = require('autoprefixer');
const postcssPxToRem = require('postcss-pxtorem');

module.exports = {
  plugins: [
    atImport(),
    postcssPresetEnv({
      features: {
        'nesting-rules': true,
      },
    }),
    cssnano(),
    autoPrefixer(),
    postcssPxToRem({
      rootValue: 16,
      unitPrecision: 5,
      propList: ['font', 'font-size', 'line-height', 'letter-spacing', 'height', 'width'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
    }),
  ],
};
