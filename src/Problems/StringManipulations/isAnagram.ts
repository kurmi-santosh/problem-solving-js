/*
    An anagram is a word or phrase formed by changing the order of the letters in another word or phrase.
    For example, 'triangle' is an anagram of 'integral'
*/

/*  Frequency counter pattern */
export const isAnagram = (str1 :String, str2: String) => {
    if(str1.length != str2.length){
        return false;
    }
    let freqCounter1 = {};
    for(let item of str1){
        freqCounter1[item] = (freqCounter1[item] || 0) + 1;
    }

    let freqCounter2 = {};
    for(let item of str2){
        freqCounter2[item] = (freqCounter2[item] || 0) + 1;
    }
    // Now we need to check each letter in str1 and it's freq
    for(let item of str1){
        // Check the existance
        if(!(item in freqCounter2)){
            return false
        }
        // Check the freq of the item
        if(freqCounter1[item] != freqCounter2[item]){
            return false;
        }
    }
    return true;
}

export const areAnagram = (str1: String,str2: String) => {
    // Get lengths of both strings
    let n1 = str1.length;
    let n2 = str2.length;

    // If length of both strings is not same,
    // then they cannot be anagram
    if (n1 != n2)
        return false;

    // Sort both strings
    let array1 = str1.split("").sort();
    let array2 = str2.split("").sort();

    // Compare sorted strings
    for (let i = 0; i < array1.length; i++)
        if (array1[i] != array2[i])
            return false;

    return true;
}
