const reverseString = function(message) {
    splitString = message.split("");
    reverseArray = splitString.reverse();
    joinArray = reverseArray.join("");
    return joinArray;
};

reverseString("hello")
// Do not edit below this line
module.exports = reverseString;
