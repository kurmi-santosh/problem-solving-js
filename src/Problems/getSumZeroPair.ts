/*
    NAIVE APPROACH FOR AN ALREADY SORTED ARRAY
*/

export const getSumZeroPair = (input: number[]) =>{
    for(let i=0; i < input.length; i++) {
        for(let j=i+1; j < input.length; j++) {
            if(input[i]+input[j] == 0){
                return [input[i], input[j]];
            }
        }
    }
}

export const getSumZeroPairDualPointer = (input: number[]) =>{
    let left = 0;
    let right = input.length-1;
    while(left < right){
        let sum = input[left] + input[right];
        if( sum == 0) {
            return [input[left], input[right]];
        }
        else if(sum > 0) {
            right--;
        }
        else {
            left++;
        }
    }
    
}