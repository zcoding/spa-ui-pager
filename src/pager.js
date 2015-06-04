
var Pager = exports.Pager = function(element, options) {
  this.element = element;
  options = options || {};
  this.options = extend(defaults, options);
  this.element.innerHTML = repaint(this.options);
};

var pprtt = Pager.prototype;

/**
 * Repaint pager.
 * @param {PlainObject} options
 * @return this
 */
pprtt.repaint = function(options) {
  this.options = extend(this.options, options);
  this.element.innerHTML = repaint(this.options);
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
