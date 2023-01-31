const repeatString = function(message, num) {
    let containMessage = "";
    for (let i = 0; i < num; i++) {
        containMessage += message
    }
    if (num < 0) {
        containMessage = "ERROR";
    }
    return containMessage;
};

repeatString("hey", 3)
// Do not edit below this line
module.exports = repeatString;
