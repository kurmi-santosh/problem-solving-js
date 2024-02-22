// Minify string AAABB to 3A2B

export const stringMinification = (input:String) => {
    let result = [];
    let array = input.split("");
    array.sort();
    let i = 0;
    while(i < array.length){
        let j = i;
        let count = 0;
        
        while(array[i] === array[j]){
            count++;
            j++;
        }
        result.push(count , array[i]);
        i = j;
    }
    return result.join('').toString();
}