'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

 function whisper(string){
    return string.toLowerCase();
 }

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper('SALUT'), ('salut'))
assert.strictEqual(whisper('Salut'), ('salut'))
assert.strictEqual(whisper('MA MAMAN TRAVAILLE'), ('ma maman travaille'))

//assert.fail('You must write your own tests')
// End of tests */
