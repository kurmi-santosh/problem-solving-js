/* 
    Instead of finding the lowest and swapping to first.
    We can consider the left portion from the selection as sorted and put the current element, where it belongs
    
    Let's consider the starting element as already sorted portion and 
    take current element from index 1 and compare with the sorted portion
    But this sorted portion is again a sub array...
*/

export const insertionSort = (array: number[]) => {
    for(let i = 1; i < array.length; i++){
        let current = array[i];
        // Check current is less than it's previous one in the sub array.
        // If so, As we have already our value with us as current, 
        // Just move the larger value at j to it's next index
        for(var j =i-1; j >=0 && array[j] > current; j--){
            array[j+1] = array[j];
        }
        array[j+1] = current;
    }
    return array;
}

/*
    Let's say our current is 4 at index 4

    [1, 2, 9, 76, 4] 

    then j starts from 3 and loops as long as prev element is greater then 4
    j is 3 => 76 > 4 => Place 76 at index 4 that is j+1
    j is 2 => 9 > 4 => Place 9 at index 3 that is j+1
    j becomes 1 and loop breaks as as 1 is not greater than 4

    => FOR NOW [1, 2, 9, 9, 76]

    Place the 4 at j+1 index

    => FOR NOW [1, 2, 4, 9, 76]

*/

