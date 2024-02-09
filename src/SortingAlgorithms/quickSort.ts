/*
    Let us take a pivot element and find it's proper place.
    Then do the same for the left array and right array of the pivot recursively
*/

export const quickSort = (input:number[], left: number = 0, right: number = input.length -1) =>{
    if(input.length <= 1){
        return input;
    }
    
    if(left < right){
        let pivotIndex = pivot(input,left, right);
        // Left 
        quickSort(input, left, pivotIndex-1);
        // Right
        quickSort(input, pivotIndex+1, right);
    }
    return input;
}

/* 
    [4, 8, 2, 1, 5, 7, 6, 9]
    When I take the first element 4 as pivot, I should get it's pivot index - 3

    i = 1 => pivot > 8 => false [4, 8, 2, 1, 5, 7, 6, 9]
    i = 2 => pivot > 2 => swapIndex is 1 => 2 & 8 will get swapped [4, 2, 8, 1, 5, 7, 6, 9]
    i = 3 => pivot > 1 => swapIndex is 2 => 8 & 1 will get swapped [4, 2, 1, 8, 5, 7, 6, 9]
    i = 4 => pivot > 5 => false [4, 2, 1, 8, 5, 7, 6, 9]
    i = 5 => pivot > 7 => false [4, 2, 1, 8, 5, 7, 6, 9]
    i = 6 => pivot > 6 => false [4, 2, 1, 8, 5, 7, 6, 9]
    i = 7 => pivot > 9 => false [4, 2, 1, 8, 5, 7, 6, 9]
    AFTER THE LOOP IS OVER
    swap the start index with swapIndex
*/
const pivot = (input:number[], start: number, end: number) => {
    var pivot = input[start];
    var swapIndex = start;
    
    for(var i=start+1; i < input.length; i++){
        if(pivot > input[i]){
            swapIndex++;
            swap(input, swapIndex, i);
        }
    }
    swap(input, start,  swapIndex);
    return swapIndex;
}

const swap = (array: number[], index1: number, index2: number) => {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
}
