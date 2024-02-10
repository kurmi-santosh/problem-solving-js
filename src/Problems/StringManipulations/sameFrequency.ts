/*
    Write a function called sameFrequency. 
    Given two positive integers, find out if the two numbers have the same frequency of digits.
    
    sameFrequency(182,281) // true
    sameFrequency(34,14) // false
    sameFrequency(3589578, 5879385) // true
    sameFrequency(22,222) // false
*/

export const sameFrequency = (input1: number, input2: number)=>{
    let str1 : string = input1.toString();
    let str2 : string = input2.toString();

    if(str1.length!== str2.length) return false;

    let obj1 = {};
    for(let i=0; i< str1.length; i++){
        obj1[str1[i]] = (obj1[str1[i]] || 0) + 1;
    }
    
    let obj2 = {}
    for(let i=0; i< str2.length; i++){
        obj2[str2[i]] = (obj2[str2[i]] || 0) + 1;
    }

    // Now we need to check each digit and it's freq

    for(let item of str1){
        if(!(item in obj2)) return false;
        if(obj1[item] !== obj2[item]) return false;
    }
    return true;
}

