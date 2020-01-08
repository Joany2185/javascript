function confirmEnd(second_argument, target) {

    var second = second_argument.slice(-target.length);
    return second === target
}
 
console.log(confirmEnd("Open sesame", "same")); // true