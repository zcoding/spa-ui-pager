
(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define('spa-ui-pager', ['require', 'exports'], function(require, exports) {
      factory(exports);
    });
  } else if (typeof define === 'function' && define.cmd) {
    define(function(require, exports, module) {
      factory(exports);
    });
  } else {
    factory(window)
  }
}
(function(exports) {

  "use strict";
