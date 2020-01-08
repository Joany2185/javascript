function invert(obj) {
    let newObject = {}
    let newKeys = Object.keys(obj);

    for(let i=0; i < newKeys.length; i++){

        newObject[obj[newKeys[i]]] = newKeys[i];

    }

    return newObject;
}

console.log(invert({a:3,b:2}));


