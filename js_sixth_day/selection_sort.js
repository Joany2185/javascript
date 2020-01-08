
let selectionSort= (arr) => {
    
 for(let i = 0; i < arr.length -1; i++){
     for(let j = i+1; j < arr.length; j++) {

        if(arr[j]<arr[i]){
             let temp = arr[i];
             arr[i] = arr[j];
             arr[j] = temp;

         }
     }
 }
 return arr;
}

console.log(selectionSort([1,8,2,4,5]));