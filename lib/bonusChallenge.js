'use strict'

const ask = require('../lib/ask.js')
let min = 19
let max = 65
let count = 0

console.log(`\nI'm going to guess your age (between ${min} and ${max})...\n`)

// if min & max are different, keep guessing
while (min < max) {
  console.log(`${min}-${max}`)

  // guess half way between min and max
  const guess = Math.round((max + min) / 2)
  const answer = ask(`Are you ${guess} or older? (y or n): `)

  if (answer === 'y' || answer === 'Y') {
    // user is guess or older; set min = guess
    min = guess
    count++
  } else if (answer === 'n' || answer === 'N') {
    // user is younger (less) than guess, set max = guess - 1
    max = guess - 1
    count++
  } else {
    // user didn't type y or n
    console.log('\nWhat part of yes or no don\'t you understand?\n')
  }
}

console.log(`\nYour age is ${min}.`)
console.log(`It only took ${count} guesses!\n`)
