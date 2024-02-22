/*
Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
Recall that the Fibonacci sequence is the sequence of whole numbers 

    1,  1,  2,  3,  5,  8, ...
i   0   1   2   3   4   5

*/

export const fibonociNumber = (n: number) => {
    let array = new Array(n+2);
    array[0] = 1;
    array[1] = 1;
    for(let i =2; i <=n; i++){
        array[i] = array[i-1] + array[i-2]
    }
    return array[n]
}