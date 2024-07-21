let sum = 0;
function specialAdd(num) {
    if(num === undefined) {
        let temp = sum;
        sum = 0;
        return temp;
    }
    sum += num;
    return specialAdd;
}

console.log(specialAdd(1)(2)());
console.log(specialAdd(3)(4)());