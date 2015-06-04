/* spa-ui-pager by zcoding, MIT license, 2015-06-04 version: 0.2.1 */
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
      if (src.hasOwnProperty(q)) {
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
  ,
  always: true

  // 是否在响应点击事件时重绘。默认将发生重绘。
  ,
  repaint: true

  // 当前页页码
  ,
  current: 1

  // 生成链接的函数。该函数的返回值将作为页码的链接（即href属性的值），提供一个参数c表示当前页码。默认返回'#c'。
  ,
  href: function(c) {
    return '#' + c;
  }

  // 当前页样式的类名
  ,
  activeClass: 'active'

  // 不可用样式的类名
  ,
  disableClass: 'not'

  // 页码点击事件的回调函数
  ,
  click: function() {
    return false;
  }

  // 页码鼠标悬停事件的回调函数
  ,
  hover: function() {
    return false;
  }

  // 页码样式的类名
  ,
  pageClass: 'a-page'

  // 上一页样式的类名
  ,
  prevClass: 'prev'

  // 下一页样式的类名
  ,
  nextClass: 'next'

  // 上一页的显示文本
  ,
  prevText: '上一页'

  // 下一页的显示文本
  ,
  nextText: '下一页'

  // 首页样式类名
  ,
  firstClass: 'first-page'

  // 尾页样式类名
  ,
  lastClass: 'last-page'

  // 首页显示文本
  ,
  firstText: '首页'

  // 尾页显示文本
  ,
  lastText: '尾页'

};
function repaint(options) {

  var c = options.page,
    total = options.total,
    _prevC = options.prevClass,
    _nextC = options.nextClass,
    _firstC = options.firstClass,
    _lastC = options.lastClass,
    _firstT = options.firstText,
    _lastT = options.lastText,
    _prevT = options.prevText,
    _nextT = options.nextText,
    _pageC = options.pageClass,
    _activeC = options.activeClass,
    _disableC = options.disableClass,
    _getHref = options.href,

    a_1 = '<a href="',
    a_2 = '" class="',
    a_3 = '" data-page="',
    a_4 = '">',
    a_5 = '</a>',
    a_23 = a_2 + _pageC + a_3,
    a_2a3 = a_2 + _pageC + ' ' + _activeC + a_3,

    i;

  var pagerHTML = '';
  if (total < 1) {
    return '';
  }
  pagerHTML += a_1 + _getHref(1) + a_2 + _firstC + a_3 + 1 + a_4 + _firstT + a_5;
  if (c === 1) {
    pagerHTML += a_1 + _getHref(1) + a_2 + _prevC + ' ' + _disableC + a_4 + _prevT + a_5;
  } else {
    pagerHTML += a_1 + _getHref(c - 1) + a_2 + _prevC + a_4 + _prevT + a_5;
  }
  var HTML_SPAN = '<a href="javascript:;">...</a>';
  if (total < 9) {
    for (i = 0; i < total; ++i) {
      if (c === i + 1) {
        pagerHTML += a_1 + _getHref(i + 1) + a_2a3 + (i + 1) + a_4 + (i + 1) + a_5;
      } else {
        pagerHTML += a_1 + _getHref(i + 1) + a_23 + (i + 1) + a_4 + (i + 1) + a_5;
      }
    }
  } else {
    if (c < 5) {
      if (c === 4) {
        for (i = 0; i < 3; ++i) {
          pagerHTML += a_1 + _getHref(i + 1) + a_23 + (i + 1) + a_4 + (i + 1) + a_5;
        }
        pagerHTML += a_1 + _getHref(4) + a_2a3 + '4' + a_4 + '4' + a_5 + a_1 + _getHref(5) + a_23 + '5' + a_4 + '5' + a_5;
      } else {
        for (i = 0; i < 4; ++i) {
          if (c === i + 1) {
            pagerHTML += a_1 + _getHref(i + 1) + a_2a3 + (i + 1) + a_4 + (i + 1) + a_5;
          } else {
            pagerHTML += a_1 + _getHref(i + 1) + a_23 + (i + 1) + a_4 + (i + 1) + a_5;
          }
        }
      }
      pagerHTML += HTML_SPAN + a_1 + _getHref(total - 1) + a_23 + (total - 1) + a_4 + (total - 1) + a_5 + a_1 + _getHref(total) + a_23 + total + a_4 + total + a_5;
    } else if (c > total - 4) {
      pagerHTML += a_1 + _getHref(1) + a_23 + '1' + a_4 + '1' + a_5 + a_1 + _getHref(2) + a_23 + '2' + a_4 + '2' + a_5 + HTML_SPAN;
      if (c === total - 3) {
        pagerHTML += a_1 + _getHref(c - 1) + a_23 + (c - 1) + a_4 + (c - 1) + a_5 + a_1 + _getHref(c) + a_2a3 + c + a_4 + c + a_5;
        for (i = 1; i < 4; ++i) {
          if (c === total - 3 + i) {
            pagerHTML += a_1 + _getHref(total - 3 + i) + a_2a3 + (total - 3 + i) + a_4 + (total - 3 + i) + a_5;
          } else {
            pagerHTML += a_1 + _getHref(total - 3 + i) + a_23 + (total - 3 + i) + a_4 + (total - 3 + i) + a_5;
          }
        }
      } else {
        for (i = 0; i < 4; ++i) {
          if (c === total - 3 + i) {
            pagerHTML += a_1 + _getHref(total - 3 + i) + a_2a3 + (total - 3 + i) + a_4 + (total - 3 + i) + a_5;
          } else {
            pagerHTML += a_1 + _getHref(total - 3 + i) + a_23 + (total - 3 + i) + a_4 + (total - 3 + i) + a_5;
          }
        }
      }
    } else {
      pagerHTML += a_1 + _getHref(1) + a_23 + '1' + a_4 + '1' + a_5 + HTML_SPAN;
      for (i = -2; i < 3; ++i) {
        if (i === 0) {
          pagerHTML += a_1 + _getHref(c + i) + a_2a3 + (c + i) + a_4 + (c + i) + a_5;
        } else {
          pagerHTML += a_1 + _getHref(c + i) + a_23 + (c + i) + a_4 + (c + i) + a_5;
        }
      }
      pagerHTML += HTML_SPAN + a_1 + _getHref(total) + a_23 + total + a_4 + total + a_5;
    }
  }
  if (c === total) {
    pagerHTML += a_1 + _getHref(total) + a_2 + _nextC + ' ' + _disableC + a_4 + _nextT + a_5;
  } else {
    pagerHTML += a_1 + _getHref(c + 1) + a_2 + _nextC + a_4 + _nextT + a_5;
  }
  pagerHTML += a_1 + _getHref(total) + a_2 + _lastC + a_3 + total + a_4 + _lastT + a_5;

  return pagerHTML;
}

var Pager = exports.Pager = function(element, options) {
  this.element = element;
  options = options || {};
  this.options = extend(defaults, options);
  this.element.innerHTML = repaint(this.options);

  this.handlers = [];

  this.on('page', function(evt) {
    this.repaint({
      page: evt.page
    });
  });

};

var pprtt = Pager.prototype;

/**
 * Repaint pager.
 * @param {PlainObject} options
 * @return this
 */
pprtt.repaint = function(options) {
  options = options || {};
  this.options = extend(this.options, options);
  this.element.innerHTML = repaint(this.options);
  return this;
};

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
  page = page || -1;
  var go2 = this.page + page;
  go2 = parseInt(go2);
  if (go2 !== go2 || go2 < 1) {
    go2 = 1;
  }
  this.repaint({
    page: go2
  });
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
pprtt.next = function(page) {
  page = page || 1;
  var go2 = this.page + page;
  go2 = parseInt(go2);
  if (go2 !== go2 || go2 > this.total) {
    go2 = this.total;
  }
  this.repaint({
    page: go2
  });
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
  if (typeof page !== 'number') {
    throw new TypeError('Shit! Page Number Not Found!');
    return this;
  }
  page = parseInt(page);
  if (page < 1) {
    page = 1;
  }
  if (page > this.total) {
    page = this.total;
  }
  this.repaint({
    page: page
  });
  return this;
};

/**
 * Add event listener.
 * @param {String} eventName
 * @param {Function} handler
 * @return this
 */
pprtt.on = function(eventName, handler) {};

/**
 * Trigger event.
 * @param {String} eventName
 * @return this
 */
pprtt.trigger = function(eventName) {};

}));