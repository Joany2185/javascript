function isCaught(str) {
    return (str.indexOf('m') - str.indexOf('C')) <= 3;
}


console.log(isCaught('C.....m')) // => false
console.log(isCaught('C..m'))// => true
console.log(isCaught('..C..m')) // => true