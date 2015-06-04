
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
