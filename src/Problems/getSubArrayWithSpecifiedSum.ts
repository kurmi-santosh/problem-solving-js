/*
    Given an array of integers and a value, determine if there are any 3 integers in the array whose sum equals the given value
    [3,7,1,2,8,4,5]
    [1,2,3,4,5,7,8]
*/
export const getSubArrayWithSpecifiedSum = (input: number[], sum: number) => {
    let tempSum = 0;
    for(let i=0; i <3; i++){
        tempSum+=input[i];
    }

    for(let i=3; i <= input.length; i++){
        if(tempSum == sum) {
            return [input[i-3], input[i-2], input[i-1]];
        }
        tempSum = tempSum - input[i-3] + input[i]
    }
}