var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(oldArray, newItem) {
  var newArray = [newItem,... oldArray];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(oldArray, newItem) {
oldArray.unshift(newItem);
 
  return oldArray;
} 

function addElementToEndOfArray(oldArray, newItem) {
  var newArray = [...oldArray,newItem];
  return newArray;
}

function destructivelyAddElementToEndOfArray(oldArray, newItem) {
  oldArray.push(newItem);
  return oldArray;
}

function accessElementInArray(array, position) {
  return array[position];
}
