'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

function yell(string){
    return string.toUpperCase();
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell('salut'), ('SALUT'))
assert.strictEqual(yell('Salut'), ('SALUT'))
assert.strictEqual(yell('Ma maman travaille'), ('MA MAMAN TRAVAILLE'))
//assert.strictEqual(yell('SALUT'), ('SALUT'))

//assert.fail('You must write your own tests')
// End of tests */
