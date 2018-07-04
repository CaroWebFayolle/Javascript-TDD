'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(string){
    return string.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase('How are you'), ('How Are You'))
assert.strictEqual(jadenCase('HOW ARE YOU'), ('How Are You'))
assert.strictEqual(jadenCase('how are you'), ('How Are You'))

//assert.fail('You must write your own tests')
// End of tests */
