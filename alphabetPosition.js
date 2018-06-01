function alphabetPosition(text) {
    text = text.split('').map(c => {
      if(c && c.match(/[a-z]/i)){
        return c.toUpperCase().charCodeAt(0) -64 
      }
    }).filter(el => el !== undefined).join(' ')
    return text
  }

console.log(alphabetPosition("The sunset sets at twelve o' clock."))