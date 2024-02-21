export const maxItemFromArray = (input: number[]) => {
    let max = Number.MIN_VALUE;

    for(let i=0; i< input.length; i++){
        if(max < input[i]){
            max = input[i];
        }
    }
    return max;
}

/*
    f = 10
    s = 9
                      i
    [2,  6,  8,  10,  9,  3]

*/
export const getSecondMaxFromArray = (input: number[]) => {
    let firstMax = Number.MIN_VALUE;
    let secondMax = Number.MIN_VALUE;

    for(let i=0; i < input.length; i++) {
        if(firstMax < input[i]){
            secondMax = firstMax;
            firstMax = input[i];
        }
        else if(secondMax < input[i]){
            secondMax = input[i];
        }
    }
    return secondMax;
}

export const getThirdMaxFromArray = (input: number[]) => {
    let firstMax = Number.MIN_VALUE;
    let secondMax = Number.MIN_VALUE;
    let thirdMax = Number.MIN_VALUE;
    
    for(let i=0; i < input.length; i++) {
        if(firstMax < input[i]){
            secondMax = firstMax;
            thirdMax =secondMax;
            firstMax = input[i];
        }
        else if(secondMax < input[i]) {
            thirdMax = secondMax;
            secondMax = input[i];
        }
        else if(thirdMax < input[i]){
            thirdMax = input[i];
        }
    }
    return thirdMax;
}