'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeTheme = undefined;

var _variables = require('bootstrap-styled-mixins/lib/variables');

var _utils = require('../theme/utils');

/**
 * BOOTSTRAP THEME CONTAINER
 *
 * this file is not meant to be used and must be kept as original
 * @param userTheme
 */
var makeTheme = exports.makeTheme = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  /* eslint dot-notation: 'off', new-cap: 'off' */
  // Variables
  //
  // Copy settings from this file into the provided `_custom.scss` to override
  // the Bootstrap defaults without modifying key, versioned files.
  var v = {};
  var u = userTheme;

  // Options
  //
  // Quickly modify global styling by enabling or disabling optional features.

  v['$enable-grid-classes'] = (0, _utils.allowFalseValue)(u['$enable-grid-classes'], true);

  // Grid columns
  //
  // Set the number of columns and specify the width of the gutters.

  v['$grid-gutter-width-base'] = u['$grid-gutter-width-base'] || '30px';
  v['$grid-gutter-widths'] = u['$grid-gutter-widths'] || {
    xs: v['$grid-gutter-width-base'],
    sm: v['$grid-gutter-width-base'],
    md: v['$grid-gutter-width-base'],
    lg: v['$grid-gutter-width-base'],
    xl: v['$grid-gutter-width-base']
  };

  // Grid containers
  //
  // Define the maximum width of `.container` for different screen sizes.

  v['$container-max-widths'] = u['$container-max-widths'] || {
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px'
  };
  (0, _variables.assertAscending)(v['$container-max-widths'], '$container-max-widths');

  return Object.assign({}, u, v);
};

exports.default = makeTheme();