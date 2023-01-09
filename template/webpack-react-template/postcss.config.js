const postcssPresetEnv = require('postcss-preset-env');
const atImport = require('postcss-import');
const cssnano = require('cssnano');
const autoPrefixer = require('autoprefixer');

module.exports = {
  plugins: [
    atImport(),
    postcssPresetEnv({
      features: {
        'nesting-rules': true,
      },
    }),
    cssnano(),
    autoPrefixer()
  ],
};
