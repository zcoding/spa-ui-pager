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