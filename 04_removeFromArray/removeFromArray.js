const removeFromArray = function(array, ...args) {
    let newArray = [];
    
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        
        if (!args.includes(element)) {
            newArray.push(element);
        }
    }
    
    return newArray;
}

console.log(removeFromArray([1, 2, 3, 4], 3, 4, 9, 2, 1));
// Do not edit below this line
module.exports = removeFromArray;
