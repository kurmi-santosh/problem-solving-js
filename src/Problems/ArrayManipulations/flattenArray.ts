/*
Write a recursive function called flatten which accepts an array of arrays 
and returns a new array with all values flattened.
*/

export const flatternArray = (input: Array<any>) => {
  let result = [];
  let myArray = input.slice();

  while (myArray.length) {
    let item: any = myArray.shift();
    if (item instanceof Array) {
      myArray.unshift(...item);
    } else result.push(item);
  }
  return result;
};
