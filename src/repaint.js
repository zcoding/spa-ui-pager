
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
