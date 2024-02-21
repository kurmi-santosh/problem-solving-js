/* 
    l
                            r
    T   A   C   O   C   A   T
        s               e
*/
export const isPalindrome = (input: string) => {
    let start = 0;
    let end = input.length - 1;
    let result:boolean = true;
    while(start < end){
        if(input.charAt(start) !== input.charAt(end)){
            result = false;
            break;
        }
        else {
            start++;
            end--;
        } 
    } 
    return result;
}  

/*
    for(let i=0; i < input.length/2; i++){
        if(input.charAt(i) !== input.charAt(input.length-1+i)){
            result = false;
        }
    }
*/