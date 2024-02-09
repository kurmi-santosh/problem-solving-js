
/* 
    SPLIT - MERGE 
    O(nLogn)
*/

export const mergeSort = (array: number[]) => {
    if(array.length <= 1) return array;
    let mid = Math.floor(array.length/2);
    let leftPart = array.slice(0,mid);   
    let rightPart = array.slice(mid);

    // Repeat the process until we get single element in both left and right parts
    // That means, we need to call this mergeSort method on leftPart and rightPart 
    // until leftPart.length <=1 and rightPart.length <=1
    // TOP - DOWN
    leftPart = mergeSort(leftPart);
    rightPart = mergeSort(rightPart);
    
    // Now merge these left and right parts
    return mergeTwoSortedArrays(leftPart, rightPart);
}

/*
        i
    [2, 20, 25]  [8, 14, 21, 30]
                    j
*/

export const mergeTwoSortedArrays = (array1:number[], array2: number[]) => { 
    let combinedArray: number[] = [];
    let i = 0;
    let j = 0;
    while(i < array1.length && j < array2.length) {
        if(array1[i] <= array2[j]){                
            combinedArray.push(array1[i]);
            i++;
        }
        else {
            combinedArray.push(array2[j]);
            j++;
        }   
    }
    // Rest of the elements from array1
    while(i < array1.length){
        combinedArray.push(array1[i]);
        i++;
    }
    // Rest of the elements from array2
     while(j < array2.length){
        combinedArray.push(array2[j]);
        j++;
    }

    return combinedArray;
}

