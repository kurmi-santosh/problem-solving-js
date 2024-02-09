/*
    O(n)
    Naive solution
*/
export const linearSearch = (input: number[], item: number) => {
    for(let i=0; i < input.length; i++){
        if(input[i] == item) return i;
    }
}