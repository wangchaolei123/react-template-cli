module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    "block-opening-brace-space-before": "always",
    'max-nesting-depth': 4,
    'max-empty-lines': 2,
    'string-quotes': 'single',
    'value-list-comma-newline-after': null,
    'selector-class-pattern': /^[a-z\-_]+$/,
  },
};
