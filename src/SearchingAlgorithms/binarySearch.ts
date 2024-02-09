/* 
    Array should be sorted
*/

export const binarySearch = (input:number[], itemToSearch:number) => {
    let start = 0;
    let end = input.length -1;
    while(start <= end){
        let middle = Math.floor((start+end)/2);
        if(input[middle] < itemToSearch){
            start = middle+1;
        }
        else if (input[middle] > itemToSearch){
            end = middle-1;
        }
        else return middle;
    }
    return -1;
}