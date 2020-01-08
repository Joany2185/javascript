function mergeSort(arr) {

    if(arr.length == 1) { //array one element /return array
       return arr;
    }
    const mid = Math.floor(arr.length /2);
    const sortedArrL = mergeSort(arr.slice(0, mid));
    const sortedArrR = mergeSort(arr.slice(mid));

    let l = 0;
    let r = 0;

    const result = [];
    while(true){
        const currentL = sortedArrL[l] || Number.POSITIVE_INFINITY;
        const currentR = sortedArrR[r] || Number.POSITIVE_INFINITY;
        if (l == sortedArrL.length && r == sortedArrR.length){
            break;
        }
        if (currentL < currentR){
            result.push(currentL);
            l++;
        } else {
            result.push(currentR);
            r++;
        }
    }
    return result;
    
    //more than two elements, I divided into 2 halves /on each half I call merge sort again and then I merge together the sorted elements
}


console.log(mergeSort([15,12,10,8,6]));
console.log(mergeSort([6,8,13,12,15]));