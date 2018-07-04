'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

 function cutFirst(string){
    return string.substring(2);
 }

 function cutLast(string){
    return string.substring(0, string.length-2); 
 }

 function cutFirstLast(string){
    return cutFirst(cutLast(string));
 }

//* Begin of tests
const assert = require('assert')

assert.strictEqual(cutFirst('Bonjour'), ('njour'))
assert.strictEqual(cutFirst('Pardon pour tout'), ('rdon pour tout'))
assert.strictEqual(cutLast('Bonjour'), ('Bonjo'))
assert.strictEqual(cutLast('Pardon pour tout'), ('Pardon pour to'))
assert.strictEqual(cutFirstLast('Bonjour'), ('njo'))
assert.strictEqual(cutFirstLast('Pardon pour tout'), ('rdon pour to'))

//assert.fail('You must write your own tests')
// End of tests */
