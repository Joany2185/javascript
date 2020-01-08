function myMap(arr, fn) {
    let result = [];
    for(var i=0; i<arr.length;i++){
        
        result.push(fn(arr[i], i, arr));
    }
    return result;
}
console.log(myMap([1,2,3], function(currentV, index,array) {
    console.log(currentV, index, array);
    return currentV*2;
}))