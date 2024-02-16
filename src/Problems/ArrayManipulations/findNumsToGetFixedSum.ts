/*
    i     lef          rig
    [1, 2, 4, 5, 7, 8, 9, 13] => 14
*/
export const findNumsToGetFixedSum = (input: number[], target:number) => {
    let triplet: Array<Array<number>> = [];
    let sortedArr = input.sort((a,b) => a-b);

    for(let i = 0; i < input.length; i++) {
        let left = i+1;
        let right = input.length -1;

        while(left < right){
            let currentSum = sortedArr[i] + sortedArr[left] + sortedArr[right];
            if(currentSum == target){
                triplet.push([sortedArr[i], sortedArr[left], sortedArr[right]])
                left++;
                right--;
            }
            else if(currentSum < target){
                left++
            }
            else{
                right--
            }
        }        
    }
    return triplet;
}