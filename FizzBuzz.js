const prompt = require('prompt-sync')
const Prompt = prompt({ sigint: true })

function fizzbuzz(x) {
	// Do loop for check number
	for (let i = 1; i <= Number(x); i++) {
		// if condition number can multiply with 3 and 5 then print FizzBuzz
		if (i % 3 === 0 && i % 5 === 0) {
			console.log('FizzBuzz')
		} else if (i % 3 === 0) {
			// if condition number can multiply with 3 then print Fizz
			console.log('Fizz')
		} else if (i % 5 === 0) {
			// if condition number can multiply with 5 then print Buzz
			console.log('Buzz')
		} else {
			// if condition number can't multiply with 3 or 5 or 3 & 5 then print number
			console.log(i)
		}
	}
}

// Get input number from user
const x = Prompt('Masukan range bilangan : ')

// Call the function
fizzbuzz(x)
