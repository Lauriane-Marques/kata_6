function twoSum(numbers, target){
    let result = [];
    for(let i =0; i<numbers.length; i++){
        for(let j=i+1; j<numbers.length; j++){
            if(numbers[i] + numbers[j] === target){
                result.push(i,j)
            }
        }
    }
    return result
}

// const numbers = [2, 7, 11, 15];
// const target = 9;

// const numbers = [3, 2, 4]
// const target = 6

const numbers = [3, 3]
const target = 6

console.log(twoSum(numbers, target))