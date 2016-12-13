(function() {
    'use strict';

var assert = require('chai').assert
let sum = require('../../src/js/calc');
let factorial = require('../../src/js/calc');


describe('Math Operation', function() {
  it('sums an array of numbers', function() {
    var a = [1,2,3,4]
    sum(a).assert.equal(10);
  });
  it('recognizes the topNumber and multiplies each number less than in value by the next greater number', function () {
    factorial(4).assert.equal(24)
  });
});




})();
