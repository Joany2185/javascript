
function myReplace(str, word1,word2) {
    if(isCapital(word1)) {
        word2 = capitalizeFirstLetter(word2);
    } else{
        word2 = decapitalizeFirstLetter(word2)
    }
    var regex = new RegExp( word1 , "gi");
    return str.replace(regex, word2);
    
}

function isCapital(word) {
    return word.charAt(0).toUpperCase() == word.charAt(0)
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function decapitalizeFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}


console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // "He is Sitting on the couch"