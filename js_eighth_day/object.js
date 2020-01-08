function objectKeys(obj) {

    let keys = [];

for (let key in obj){
    
      keys.push(key);

}
return keys;
}

console.log(objectKeys({'keycode': 'JS', 2:'Program Paradigm', Target:'Browser'}));
