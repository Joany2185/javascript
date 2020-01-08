function translatePigLatin(str){
    if (str.match(/^[aeiou]/)) return str + "way";

    const consonantCluster = str.match(/^[^aeiou]+/)[0];
 
    return str.substring(consonantCluster.length) + consonantCluster + "ay";
  }

console.log(translatePigLatin("glove")); // oveglay
console.log(translatePigLatin("pig")); // igpay