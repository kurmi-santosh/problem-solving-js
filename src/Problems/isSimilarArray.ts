/*
   Check whether every number in first array has the corresponding square value in the second array.
   O(n^2) - Worst case
*/
export const isSimilarArray = (arr1:number[], arr2:number[]) => {
    if(arr1.length != arr2.length){
        return false;
    }

    for(let item of arr1){
        let index = arr2.indexOf(item**2);
        if(index == -1) return false;
        else arr2.splice(index,1);
    }
    return true;
}

export default isSimilarArray;