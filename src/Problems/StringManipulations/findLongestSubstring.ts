/*

Write a function called findLongestSubstring, which accepts a string and 
returns the length of the longest substring with all distinct characters.

SLIDING WINDOW O(n**2)

    0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
    
    0   1   2   3   4   5   6   7   8   9   10  11  12
    T   H   I   S   I   S   A   W   E   S   O   M   E
            i
                    j   
*/

export const findLongestSubstring = (input: string) => {
    var visited = new Array(256);
    var result = 0;
    for(let i=0; i < input.length; i++) {
        for(let j=i; j < input.length; j++){
            if(visited[input.charCodeAt(j)] === true){
                break;
            }
            else{
                result = Math.max(result, j-i+1);
                visited[input.charCodeAt(j)] = true;
            }
        }
    }
    return result;
}

/*
SLIDING WINDOW O(n)

    [0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0]
    
    T   H   I   S   I   S   A   W   E   S   O   M   E
                                        l
                                        r            
                    r(vis)  
                    move i to this while making T, H, I, S back to false
*/

export const findLongestUniqueCharsSubstring = (input: string) => {
    var visited = new Array(256).fill(false);
    var result = 0;
    let left = 0;
    let right = 0;

    while(right  < input.length){
        if(visited[input.charCodeAt(right)]){
            while(visited[input.charCodeAt(right)]){
                visited[input.charCodeAt(left)] = false;
                left++
            }
        }
        // The length of the current window (right - left + 1)
        // is calculated and the answer is updated accordingly.
        visited[input.charCodeAt(right)] = true;
        result = Math.max(result, right - left + 1);
        right++;
    }
    return result;
}

