'use strict'

// We'll learn about require later in the course
const ask = require('../lib/ask.js')

const name = ask('What\'s your name? ')

// console.log(`Hi, ${name}!`)

if (name === 'Brian') {
  console.log('Hi, Brian!')
} else if (name === 'Jeff') {
  console.log('Hi, Jeff!')
} else if (name === 'Chris') {
  console.log('Hi, Chris!')
} else {
  console.log('Hi, stranger.')
}
