/*
Write a function factorial which accepts a number and returns the factorial of that number.
*/

export const factorial = (num: number) => {
    var result:number = 1;
    if(num == 0) return result;
    while(num > 1){
        result = result*num;
        num--;
    }
    return result;
}