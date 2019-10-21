// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element=document.body, results=[]) {

  if (element.firstElementChild) {
    getElementsByClassName(className, element.firstElementChild, results);
  }
  if(element.nextElementSibling) {
    getElementsByClassName(className, element.nextElementSibling, results);
  }
  className = new RegExp("(^|\\s)" + className + "(\\s|$)");
  if(className.test(element.getAttribute("class"))) {
    results.unshift(element);
  }
  return results;
};
