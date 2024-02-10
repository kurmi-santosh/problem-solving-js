/*
    Implement a function called, areThereDuplicates which accepts a variable number of arguments,
    and checks whether there are any duplicates among the arguments passed in
    
    areThereDuplicates(1, 2, 3) // false
    areThereDuplicates(1, 2, 2) // true 
    areThereDuplicates('a', 'b', 'c', 'a') // true 
*/

export const areThereDuplicates = (...args: any[]) => {
    args.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    }); 
    
    // Now we can compare adjecent elements
    for(let i = 0; i < args.length-1; i++){
        if(args[i] == args[i+1]) return true;
    }
    return false;

}