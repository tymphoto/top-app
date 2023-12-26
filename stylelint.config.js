/** @type {import('stylelint').Config} */
module.exports = {
  customSyntax: 'postcss-scss',
  extends: [
    '@ubic/stylelint-config',
    '@ubic/stylelint-config/modules',
    '@ubic/stylelint-config/scss',
    '@ubic/stylelint-config/order',
  ],
  rules: {
    // false positive
    'no-descending-specificity': null,
    'scss/media-feature-value-dollar-variable': null,
  },
};
