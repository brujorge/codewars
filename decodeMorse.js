function decodeMorse(morseCode){
  let str = morseCode.split("   ").map(word => word.split(" ").map(code => code).join("")).join(" ");
  return str.trim()
}
console.log(decodeMorse('.... . -.--   .--- ..- -.. .   .--- ..- -.. .'));