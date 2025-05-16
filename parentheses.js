function isValid(str){
    //returning true even is the parentheses are not closed in order
    let arr = str.split('')
    if((arr.includes('(') && arr.includes(')')) || (arr.includes('[') && arr.includes(']'))){
        return true
    } else {
        return false
    }
}

// const str = "()"
// const str = "()[]{}"
// const str = "(]"
// const str = "([])"

console.log(isValid(str))