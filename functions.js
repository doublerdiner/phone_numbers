// This function uses .splice() to add the punctuation and then .join() to convert the array into a string. 

function createPhoneNumber(numbers) {
    numbers.splice(-4, 0, "-");
    numbers.splice(3, 0, ") ");
    numbers.splice(0, 0, "(");
    return numbers.join("")
}

module.exports = createPhoneNumber;