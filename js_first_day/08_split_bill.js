function splitTheBill(group) {
    var result = {};
    var sum = 0;

    for (var person in group) {
        sum += group[person];
    }

    var avg = sum / (Object.keys(group).length);

    for (var person in group) {
        result[person] = Math.floor(-100 * (group[person] - avg))/100;
    }
    return result;
}

const group = {
    Amy: 20,
    Bill: 15,
    Chris: 10
}

console.log(splitTheBill(group)); // => { Amy: -5, Bill: 0, Chris: 5 }