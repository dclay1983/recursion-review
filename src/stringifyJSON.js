// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
if (obj === undefined || typeof obj === 'function') {
  return undefined;
}
if (typeof obj === 'object') {
  let results = [];
  if(Array.isArray(obj)) {
    //deal with array
    obj.forEach(function (item){
      let test = stringifyJSON(item);
      test = test === undefined ? 'null' : test;
      results.push(test);
    })
    return `[${results.join(',')}]`
  } else {
    //deal with obj
    for(let key in obj) {
      let test = stringifyJSON(obj[key]);
      if (test !== undefined) {
        results.push(`${key}:${test}`);
      }
      return `{${results.join(',')}}`
    }
  }
}
return typeof obj === 'string' ? `"${obj}"` : `${obj}`;


};

// "null"
// ""
//["9","str","{}"]
// return `[${obj.join(',')}]`