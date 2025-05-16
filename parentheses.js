function isValid(str){
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