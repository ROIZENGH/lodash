const _ = {
    clamp(number, lower, upper) {
      number = Math.max(number,lower);
      number = Math.min(number,upper);
      return number;
    },
    inRange(number, start, end){
      let newStart = 0;
      if(end===undefined){
        end = start;
        start = 0;
      }
      else if (start>end){
        newStart = end;
        end=start;
        start=newStart;
      }
      if ( number < start || number >= end){
        return false;
      }
      else {
        return true;
      }
    },
    words(array) {
      const wordsArray = array.split(" ");
      return wordsArray;
    }, 
    pad(string,number){
      const padding = number - string.length;
      let leftPadding = "";
      let rightPadding = "";
      if(padding <= 0){
        return string;
      }
      else if (padding%2 === 0){
        for(let i = 0; i<(padding/2); i++){
          leftPadding = leftPadding + " ";
        }
        rightPadding = leftPadding;
        return leftPadding+string+rightPadding;
      }
      else {
        for(let i = 0; i<((padding-1)/2); i++){
          leftPadding = leftPadding + " ";
        }
        rightPadding = leftPadding + " ";
        return leftPadding+string+rightPadding;
      }
    },
    has(object, key){
      let hasValue =  object[key];
      if(hasValue === undefined){
        hasValue = false;
      }
      else{
        hasValue = true;
      }
      return hasValue;
    }, 
    invert(object){
      let objectKeys = Object.keys(object);
      const numKeys = objectKeys.length;
      let objectValues = Object.values(object);
      let newObject = {};
      for (let i = 0; i<numKeys; i++){
        newObject[objectValues[i]] = objectKeys[i];
      }
      return newObject;
    },
  };
  
  
  // Do not write or modify code below this line.
  module.exports = _;