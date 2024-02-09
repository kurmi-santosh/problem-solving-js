/* 
    Larget in each iteration will be bubbled at last index and
    and the next loop can be reduced by 1 iteration from the full length.

    When we don't introduce noSwaps flag to short circuit
    Outer loop runs even though the array is already sorted.
    We need to short circuit ths outer loop when there are no swaps happened in the prev iteration.
*/

/* 
    USING TWO NESTED FOR LOOPS 
*/
export const bubbleSort = (array: number[]) => {
    var noSwaps: boolean;
    for(let i = array.length; i > 0; i--){
        noSwaps = false;
        for(let j = 0; j < i-1; j++){
            if(array[j] > array[j+1]){
                // SWAP
                let temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
                noSwaps = true;
            }
        }
        if(noSwaps) break;
    }
    return array;
}

/*
    USING WHILE LOOP 
*/
export const bubbleSortAtBest = (input: number[]) => {
    let swapped: boolean;
    do {
        swapped = false;
        for (let i = 0; i < input.length - 1; i++) {
            if (input[i] < input[i + 1]) {
                let temp = input[i];
                input[i] = input[i + 1];
                input[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return input;
}

