const prompt = require('prompt-sync')
const Prompt = prompt({ sigint: true })

const checkPalindrome = (x) => {
	// find the length of a string
	const len = x.length

	// loop through half of the string
	for (let i = 0; i < len / 2; i++) {
		// check if first and last string are same
		if (x[i] !== x[len - 1 - i]) {
			return 'It is not a palindrome'
		}
	}
	return 'It is a palindrome'
}

// take input
const x = Prompt('Enter a string: ')

// call the function
console.log(checkPalindrome(x))
