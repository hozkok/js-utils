'use strict';
let queue = require('./queue.js');
let za = queue();

za.push('7');
za.push('0');
za.push('3');

setInterval(() => {
    za.pop();
}, 4500);
setInterval(() => {
    console.log(za.toString(), ', len:', za.len());
    let curr = za.pop();
    if (curr)
        za.push(curr);
}, 1000);
