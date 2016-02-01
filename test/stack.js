'use strict';
let mocha = require('mocha'),
    should = require('should'),
    stack_constructor = require('../src/stack.js'),
    s = stack_constructor(),
    testObj = {a: 3, b: 5};

describe('stack push', () => {
    it('should push an item to the stack', () => {
        s.push(3);
        s.push(5);
        should(s.len()).equal(2);
    });
});
describe('stack pop', () => {
    it('should pop an item from the stack', () => {
        let popped = s.pop();
        should(popped).equal(5);
        should(s.len()).equal(1);
        popped = s.pop();
        should(popped).equal(3);
    });
});
