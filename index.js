var object = typeof Object.keys === 'function' ? Object : require('object')
module.exports = objeach
function objeach(obj, fn, thisObj) {
  for (var keys = object.keys(obj), i = 0, len = keys.length; i < len; i++)
    fn.call(thisObj, obj[keys[i]], keys[i], obj)
}
