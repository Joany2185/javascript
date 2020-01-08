function areSameTypeImp(arr) {
    return arr.every((current) => typeof current == typeof arr[0]);

}
function areSameType(arr){
    console.log(areSameTypeImp(arr));
}





areSameType(['hello', 'world', 'long sentence']) // => true
areSameType([1, 2, 9, 10]) // => true
areSameType([['hello'], 'hello', ['bye']]) // => false
areSameType([['hello'], [1, 2, 3], [{ a: 2 }]]) // => true
//Create a function that checks whether all the element of an array are the same datatype

