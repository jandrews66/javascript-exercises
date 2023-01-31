const removeFromArray = function(numsArray, ...theArgs) {
  
  for (const arg of theArgs){ 
  const index = numsArray.indexOf(arg)
    if (index > -1){
      numsArray.splice(index,1);
    }
  }
  return numsArray;
}

//Do not edit below this line
 module.exports = removeFromArray;


//for (const arg of theArgs){
//numsArray.splice((arg -1),1);
  //}

