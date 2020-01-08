function isArray (value) {
    return value && typeof value === 'object' && value.constructor === Array;
    } 

console.log(isArray('hello')); // => false
console.log(isArray(['hello'])); // => true
console.log(isArray([2, {}, 10])); // => true
console.log(isArray({ a: 2 })); // => false