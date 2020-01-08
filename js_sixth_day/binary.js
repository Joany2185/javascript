    function binarySearch(sortedArray,query) {
        var left = 0;
        var right = sortedArray.length -1;
        if (sortedArray.length == 0){
            return -1;
        }
        return binSearchInside(sortedArray, query, left, right);
    }
    

    function binSearchInside(sortedArray, query, left, right){
        var mid = Math.floor((right+left)/2);

        if(sortedArray[mid] == query) {
            return mid;
        }else{
            if (left == right){
                return -1;
            }
            if (sortedArray[mid] > query){
            
                return binSearchInside(sortedArray, query, left, mid -1);

            } else {
                 return binSearchInside(sortedArray, query, mid + 1, right);
            }
        }
    }
    
    
    
    //problem to solve: find the index of a query (or value) in a sorted array
    var sortedArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; //input 1
    var query = 5; //input 2

    //output 4 - I find the index
        //25 /output -1 

    console.log(binarySearch(sortedArray, 5));
    console.log(binarySearch(sortedArray, 25));    