function longest(a,b) {
    var total = a+b;
    var splitted = total.split('');
    var different = [...new Set(splitted)];
    var sorted = different.sort();

    return sorted.join('');

}


console.log(longest('abcccaa', 'acddddffzzz'))// => 'abcdfz'

a = 'xyaabbbccccdefww'
b = 'xxxxyyyyabklmopq'
console.log(longest(a, b)) // => 'abcdefklmopqwxy'

a = 'abcdefghijklmnopqrstuvwxyz'
console.log(longest(a, a)) // => 'abcdefghijklmnopqrstuvwxyz'