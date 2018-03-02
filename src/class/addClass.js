import hasClass from './hasClass'
/**
 *
 * @desc   为元素添加class
 * @param  {HTMLElement} ele
 * @param  {String} cls
 */
function addClass(ele, cls) {
  if (!hasClass(ele, cls)) {
      ele.className += ' ' + cls;
  }
}

export default addClass;