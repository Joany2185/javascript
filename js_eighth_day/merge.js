let target = {a:3, b:2}
let source1 = {a:2, b:4}
let source2 = {e:8, c:5}




function merge(...arg) {
    if(arg.length >= 2) {
    
        var result = {};
        arg.forEach(function(element){
            Object.assign(result, element);

        })
        return result;
    }else{
        console.log('Please, we need at least two arguments')
    }

}

console.log(merge(target, source1, source2));