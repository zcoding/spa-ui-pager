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

  /**
   * Utils: extend
   * @param {Object,...} src list
   * @return {Object} a new object
   */
  var extend = function() {
    var obj = {};
    var srcList = [].slice.call(arguments, 0);
    for (var i = 0, len = srcList.length; i < len; ++i) {
      var src = srcList[i];
      for (var q in src) {
        if (hasOwn.call(src, q)) {
          obj[q] = src[q];
        }
      }
    }
    return obj;
  };

  // default configuration
  var defaults = {

      // 分页总数。可以设置为一个函数，该函数的返回值将作为分页总数。
      total: 1

      // 是否总是生成分页。如果设置为false，则只有1页时不会生成分页；反之总会生成分页。
      ,always: true

      // 是否在响应点击事件时重绘。默认将发生重绘。
      ,repaint: true

      // 当前页页码
      ,current: 1

      // 生成链接的函数。该函数的返回值将作为页码的链接（即href属性的值），提供一个参数c表示当前页码。默认返回'#c'。
      ,href: function(c) {return '#' + c}

      // 当前页样式的类名
      ,activeClass: 'active'

      // 不可用样式的类名
      ,disableClass: 'not'

      // 页码点击事件的回调函数
      ,click: function() {return false;}

      // 页码鼠标悬停事件的回调函数
      ,hover: function() {return false;}

      // 页码样式的类名
      ,pageClass: 'a-page'

      // 上一页样式的类名
      ,prevClass: 'prev'

      // 下一页样式的类名
      ,nextClass: 'next'

      // 上一页的显示文本
      ,prevText: '上一页'

      // 下一页的显示文本
      ,nextText: '下一页'

      // 是否显示全部，若为true则显示首尾页，否则不显示首尾页，默认不显示
      ,showAll: false

  };

  function repaint() {}

  var Pager = exports.Pager = function(element, options) {
    var wrapper = element;
    options = options || {};
    this.options = extend(defaults, options);
    wrapper.innerHTML = repaint();
  };

  var pprtt = Pager.prototype;

  /**
   * Repaint pager.
   * @param {PlainObject} options
   * @return this
   */
  pprtt.repaint = function(options) {};

  /**
   * Go to previous page.
   * @param {Number} page **optional**
   * @return this
   * this.page            =>    5
   * pager.prev();        =>    go to page 4
   * pager.prev(2);       =>    go to page 3
   * pager.prev(6);       =>    go to page 1
   */
  pprtt.prev = function(page) {
    return this;
  };

  /**
   * Go to next page.
   * @param {Number} page **optional**
   * @return this
   * this.page          =>      5
   * this.total         =>      10
   * pager.next();      =>      go to page 6
   * pager.next(3);     =>      go to page 8
   * pager.next(6);     =>      go to page 10
   */
  pprtt.next = function() {
    return this;
  };

  /**
   * Go to page.
   * @param {Number} page
   * @return this
   * this.page          =>      5
   * this.total         =>      10
   * pager.go(3);       =>      go to page 3
   * pager.go(-3);      =>      go to page 1
   * pager.go(13);      =>      go to page 10
   */
  pprtt.go = function(page) {
    return this;
  };

}));