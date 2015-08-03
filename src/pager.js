
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
  if (typeof page !== 'number') {
    throw new TypeError('Shit! Page Number Not Found!');
  }
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
  if (typeof page !== 'number') {
    throw new TypeError('shit! Page Number Not Found!');
  }
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
