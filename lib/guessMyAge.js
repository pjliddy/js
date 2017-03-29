'use strict'

const ask = require('../lib/ask.js')

// Have this script ask the user their age
const age = ask('What\'s your age? ')

if (age > 90) {
  // if they're older than 90 print to the console "You old fart!""
  console.log('You old fart!')
} else if (age < 10) {
  // If they're under the age of 10 print "Why are you on a computer? Go outside!"
  console.log('Why are you on a computer? Go outside!')
} else {
  // If they're between 10 and 90, print "How boring...".
  console.log('How boring...')
}
