/*

Write a function called isSubsequence that should check whether the characters in the 
first string appear somewhere in the second string, without their order changing.

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'acb'); // false (order matters)

S   I   N   G
            i
S   T   I   N   G
    j

*/

export const isSubSequence = (str1: String, str2: String) =>{
    let i = 0;
    let j = 0;
    while(j < str2.length){
        if(str1.charAt(i) === str2.charAt(j)){
            i++;
        }
        j++;
        
        if(i == str1.length - 1) return true;
    }
    return false;
}

/*
    USING RECURSION
    function isSubsequence(str1, str2) {
        if(str1.length === 0) return true
        if(str2.length === 0) return false
        if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
        return isSubsequence(str1, str2.slice(1))
    }
*/
