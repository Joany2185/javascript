function countRepetition(arr) {
    const result = {};
    arr.forEach(current => {
        if(result[current]){
            result[current] ++;
        }else {
            result[current] = 1;
        }
    });
    return result;
}


let authors = ['kerouac', 'fante', 'fante', 'buk', 'hemingway', 'hornby', 'kerouac', 'buk', 'fante']

console.log(countRepetition(authors));





