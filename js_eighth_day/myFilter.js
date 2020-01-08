function myFilter(arr, fn) {
    let result = [];
    for(var i=0; i < arr.length; i++) {
       
        result.push(fn(arr[i], i, arr));
      
    }
    return result;
}
myFilter(['apple','carrots','beans'], function(element, index, array){
    console.log(element, index, array);
    console.log(element.length < 10);
}) 