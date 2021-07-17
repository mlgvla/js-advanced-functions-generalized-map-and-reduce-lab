function map(array, callback){
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]))   
    }
    return newArray
}

function reduce(array, callback, startingPoint) {
    let memo;

    if (startingPoint) {
        memo = startingPoint
        for (let i = 0; i < array.length; i++) {
            memo = callback(array[i], memo)  
         }
    } else {
        memo = array[0]
        for (let i = 1; i < array.length; i++) {
            memo = callback(array[i], memo)  
         }
    }
    return memo
}
