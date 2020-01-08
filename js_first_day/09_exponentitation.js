// function exp(b,n){
//     var result = 1;
//     var count = 1;
//     while (count <= n) {
//         result = result * b;
//         count +=1;
//     }
//     result;
// }

function exp(b, n){
    if (n == 0) {
        return 1;
    }
    return b * exp(b, n - 1);
}

console.log(exp(5, 3)); // => 125
console.log(exp(2, 4)); // => 16
console.log(exp(5, 1)); // => 5
console.log(exp(6, 0)); // => 1