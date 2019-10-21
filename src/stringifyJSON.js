// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
if (obj === undefined || typeof obj === 'function') {
  return undefined;
}
if (typeof obj === 'object') {
  // deal with arrays and objects
}
return typeof obj === 'string' ? `'${obj}'` : `${obj}`;


};
