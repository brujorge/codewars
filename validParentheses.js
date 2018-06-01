function validParentheses(parens){
    const arr = parens.split("")
    const even = []
    for(let i = 0; i< arr.length; i++){
        if(arr[i] == '('){
            even.push(arr[i])
        } else {
            if(even.length == 0) return false
            even.pop()
        }
    }
    return even.length == 0
  }

console.log(validParentheses("(())"));