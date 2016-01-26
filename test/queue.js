'use strict';
let mocha = require('mocha'),
    should = require('should'),
    queue_constructor = require('../src/queue'),
    queue = queue_constructor(),
    testObj = {a: 3, b: 5};

describe('queue push', () => {
    it('should push an item to the queue', () => {
        queue.push(testObj);
        should(queue.len()).equal(1);
    });
});
describe('queue pop', () => {
    it('should pop an item from the queue', () => {
        let popped = queue.pop();
        should(popped).deepEqual(testObj);
    });
});
