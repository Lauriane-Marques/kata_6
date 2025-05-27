//This function has a O(2n) complexity, which is not the best

// function twoSum(numbers, target){
//     let result = [];
//     for(let i =0; i<numbers.length; i++){
//         for(let j=i+1; j<numbers.length; j++){
//             if(numbers[i] + numbers[j] === target){
//                 result.push(i,j)
//             }
//         }
//     }
//     return result
// }

//We're now trying to make a new function with an O(n) complexity

function twoSum(numbers, target){
    let seen = {}
    for(let i =0; i< numbers.length; i++){
        let current = numbers[i]
        // console.log("Current number", current)
        let complement = target-current
        // console.log("Complementary number", complement)
        if(seen[complement] !== undefined){
            return [seen[complement], i]
        }
        seen[current] = i
    }
}

const numbers = [2, 7, 11, 15];
const target = 9;

// const numbers = [3, 2, 4]
// const target = 6

// const numbers = [3, 3]
// const target = 6

console.log(twoSum(numbers, target))