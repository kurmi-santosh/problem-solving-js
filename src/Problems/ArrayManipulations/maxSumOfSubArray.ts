/*
[1,2,5,2,8,1,5]
2 elements => 10 
4 elements => 17
*/

/* NAIVE APPROACH */
export const getMaxSumOfSubArray = (input: number[], noOfConsequtuiveElements: number) =>{
    if(noOfConsequtuiveElements > input.length) return null;
    let maxValue = -Infinity;
    for(let i=0; i < input.length - noOfConsequtuiveElements; i++){
        let temp = 0;
        for(let j=0; j<noOfConsequtuiveElements; j++){
            temp+=input[i+j];
        }
        if(temp > maxValue){
            maxValue = temp;
        }
    }
    return maxValue;
}

/* 
SLIDING WINDOW 
Instead of adding again all 3 in second iteration
subtract the first and add the next from the prev sum
*/
export const getMaxSumOfSubArrayBest = (input: number[], noOfConsequtuiveElements: number) =>{
    if(noOfConsequtuiveElements > input.length) return null;
    let maxValue = 0;
    // Get the sum of initial n digits
    let tempSum = 0;
    for(let i=0; i<noOfConsequtuiveElements; i++){
        tempSum+=input[i];
    }

    for(let i=noOfConsequtuiveElements; i < input.length; i++){
        tempSum = tempSum - input[i - noOfConsequtuiveElements] + input[i];
        maxValue = Math.max(tempSum, maxValue);
    }
    return maxValue;

}
