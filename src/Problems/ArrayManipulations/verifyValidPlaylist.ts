/*
    i
    [2,  4,  6,  7,  8,  2,  1] => minDist = 5
*/
export const verifyValidPlaylist = (input: number[], minDistance:number) => {
    for(let i=0; i<input.length-1; i++){
        let j = i+1;
        while(j < minDistance && j < input.length){
            if(input[i] == input[j]){
                return false;
            }
            j++;
        }
    }
    return true;
}