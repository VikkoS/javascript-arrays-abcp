var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(oldArray, newItem) {
  var newArray = [newItem,... oldArray];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(oldArray, newItem) {
 oldArray = oldArray.unshift(newItem);
 
  return oldArray;
} 

function addElementToEndOfArray(oldArray, newItem) {
  var newArray = [...oldArray,newItem];
  return newArray;
}

function destructivelyAddElementToEndOfArray(oldArray, newItem) {
  return oldArray.push(newItem);
}