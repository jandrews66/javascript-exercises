const removeFromArray = function(numsArray, ...theArgs) {
  for (const arg of theArgs){
  numsArray.splice((arg -1),1);
  }
  return numsArray;
}

//Do not edit below this line
 module.exports = removeFromArray;




