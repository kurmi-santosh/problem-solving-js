/*
    consider the last element as pivot
    define leftArray and rightArray
    Push the smaller elements into leftArray and larger into right
    put the pivot element in between the leftArray and rightArray and repeat
*/

export const quickSorting = (input: number[]) => {
    if (input.length < 2) return input;
    let lastIndex = input.length - 1;
    let pivotElement = input[lastIndex];
    let leftArray = [];
    let rightArray = [];
    for (let i = 0; i < input.length - 1; i++) {
        if (input[i] < pivotElement) leftArray.push(input[i]);
        else rightArray.push(input[i]);
    }
    return [...quickSorting(leftArray), pivotElement, ...quickSorting(rightArray)];
}