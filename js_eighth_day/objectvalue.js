function objectValues(obj){

    let keys = [];

for (let key in obj){
    
      keys.push(obj[key]);

}
return keys;

}
console.log(objectValues({'keycode': 'JS', 2:'Program Paradigm', Target:'Browser'}));