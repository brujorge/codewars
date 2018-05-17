function accum(s) {
	return s.split('').map((letter, index) => letter.toUpperCase() + letter.toLowerCase().repeat(index)).join("-")
}
console.log(accum('abcd'));