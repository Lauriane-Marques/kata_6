function isValid(str){
    // //returning true even is the parentheses are not closed in order
    // let arr = str.split('')
    // if((arr.includes('(') && arr.includes(')')) || (arr.includes('[') && arr.includes(']'))){
    //     return true
    // } else {
    //     return false
    // }

    const openP = []

    for(let i = 0; i<str.length; i++){
        if(str[i] === '(' || str[i] === '{' || str[i] === '['){
            openP.push(str[i])
        } else {
            if (openP.length === 0){
                return false
            }

            lastOpenP = openP.pop()

            if (
                (str[i] === ')' && lastOpenP !== '(' ) ||
                (str[i] === '}' && lastOpenP !== '{' ) ||
                (str[i] === ']' && lastOpenP !== '[' )
            ) {
                return false
            }
        }
    }
    return openP.length === 0
}

// const str = "()"
// const str = "()[]{}"
// const str = "(]"
const str = "([])"
// const str = "([)]"

console.log(isValid(str))