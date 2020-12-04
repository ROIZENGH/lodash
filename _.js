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
    findKey(object,predicate){
      const numKeys = Object.keys(object).length;
      let isPredicateTrue = false;
      let returnValue = undefined;
      for(const key in object){
        isPredicateTrue = predicate(object[key]);
        if(isPredicateTrue === true){
          returnValue = key;
          break;
        }
        else{
          returnValue = undefined;
        }
      }
      return returnValue;
    },
    drop(array, number){
      let newArray = [];
      if(number === undefined){number=1}
      let i = number;
      while(i<array.length){
        newArray.push(array[i]);
        i++;
      }
      return newArray;
    },
    dropWhile(array, predicate){
      let newArray = [];
      let startArray = 0;
      for (let i = 0; i<array.length; i++){
        if(predicate(array[i],i,array)===false){
          startArray = i;
          break;
        }
      }
      newArray = this.drop(array,startArray);
      return newArray;
    },
    chunk(array,number){
      let newArray = [];
      let lastElement = array.length-1;
      if(number===undefined){
        number=1;
      }
      let numberOfArrays = Math.ceil(array.length/number);
      for(let i = 1; i<=numberOfArrays; i++ ){
        newArray[(i-1)]=array.slice((i-1)*number,i*number);
      }
      return newArray;
    },
  };
  
  
  // Do not write or modify code below this line.
  module.exports = _;