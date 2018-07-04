'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

 function keepFirst(string){
    return string.substring(0, 2);
 }

 function keepLast(string){
     return string.substring(string.length, string.length-2);

 }

 function keepFirstLast(string){
    return keepFirst(string)+keepLast(string);
 }

//* Begin of tests
const assert = require('assert')

assert.strictEqual(keepFirst('Bonjour'), ('Bo'))
assert.strictEqual(keepFirst('Pardon pour tout'), ('Pa'))
assert.strictEqual(keepLast('Bonjour'), ('ur'))
assert.strictEqual(keepLast('Pardon pour tout'), ('ut'))
assert.strictEqual(keepFirstLast('Bonjour'), ('Bour'))
assert.strictEqual(keepFirstLast('Pardon pour tout'), ('Paut'))

//assert.fail('You must write your own tests')
// End of tests */
