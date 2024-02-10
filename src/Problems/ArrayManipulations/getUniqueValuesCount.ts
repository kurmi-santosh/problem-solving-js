/*
    Get the unique values count from the sorted array
*/

export const getUniqueValuesCount = (input: number[]) =>{
    let count = 0;
    let i = 0;
    for(let j = 1; j < input.length; j++){
        if(input[i] == input[j]) {
           j++;
        }
        else {
            i++;
            count++;
        }
    }
    return count;
}

/*
    Return the array with only unique values
*/
export const getUniqueValuedArray = (input: number[]) => {
    let i=0;
    for(let j=1; j< input.length; j++){
        if(input[i] !== input[j]){
            i++;
            input[i] = input[j];
        }
    }
    return input.slice(0,i+1);
}
