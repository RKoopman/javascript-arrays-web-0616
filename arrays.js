var chocolateBars = []


function addElementToBeginningOfArray(chocolateBars, item){
  return [item, ...chocolateBars];
};

function descructivelyAddElementToBeginningOfArray(chocolateBars, item){
  chocolateBars.unshift(item);

  return chocolateBars
};

function addElementToEndOfArray(chocolateBars, item){
  chocolateBars.push(item);

  return chocolateBars
};

function destructivelyAddElementToEndOfArray(chocolateBars, item){
  chocolateBars.push(item);

  return chocolateBars;
};

function accessElementInArray(chocolateBars, item){
  return chocolateBars[2];
};

function removeElementFromBeginningOfArray(chocolateBars){
  chocolateBars.shift(0);

  return chocolateBars;
};

function removeElementFromEndOfArray(chocolateBars){
  chocolateBars.pop()

  return chocolateBars
};
