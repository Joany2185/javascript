function isString (value) {
   
    return typeof(value)  === 'string' || value instanceof String;
}

console.log(isString('hello')); // => true
console.log(isString(['hello'])); // => false
console.log(isString('this is a long sentence')); // => true
console.log(isString({ a: 2 })); // => false

