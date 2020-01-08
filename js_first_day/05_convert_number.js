function convert(num) {
    return [...num+''].map(current => Number(current)).sort().reverse();
}

console.log(convert(429563)) // => [9, 6, 5, 4, 3, 2]
console.log(convert(324)) // => [4, 3, 2]