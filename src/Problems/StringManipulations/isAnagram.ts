/*
    An anagram is a word or phrase formed by changing the order of the letters in another word or phrase.
    For example, 'triangle' is an anagram of 'integral'

    SIVAM    VASSIM

    S:1      S:2   
    I:1
    V:1
    A:1
    M:1
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

export default isAnagram;
