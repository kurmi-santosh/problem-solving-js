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

        for(let j =i-1; j >=0 && array[j] > current; j--){
            
        }
        array[j+1] = current;
        
    }

}