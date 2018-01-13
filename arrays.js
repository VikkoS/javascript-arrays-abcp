var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(oldArray, newItem) {
  var newArray = [newItem,... oldArray];
  return newArray;
}

function destrudestructivelyAddElementToBeginningOfArrayctivelyAddElementToBeginningOfArray(oldArray, newItem) {
 oldArray = oldArray.unshift(newItem);
 
  return oldArray;
} 

function addElementToEndOfArray() {
  
}