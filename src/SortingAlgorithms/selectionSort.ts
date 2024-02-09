/*
    Get the min in each iteration and swap to the front
    We take the index of the new min and at the ending of iteration - one single swap. 
    This way, it's efficient compared to Bubble sort.

    Optimise :
    If the lowest is already at it's place... Then we can avoid unnecessary swapping.

    O(n^2)
*/

/* USING NESTED FOR LOOPS */
export const selectionSort = (input: number[]) => {
    for(let i=0; i < input.length; i++){
        let lowest = i;
        for(let j= i+1; j < input.length; j++){
            if(input[j] < input[lowest]){
                lowest = j;
            }
        }
        // SWAP
        if(i !== lowest){
            let temp = input[lowest]
            input[lowest] = input[i];
            input[i] = temp;
        }
    }
    return input;
}