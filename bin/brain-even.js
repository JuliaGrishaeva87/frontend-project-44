#!/usr/bin/env node
import readlineSync from 'readline-sync';
import playTheGameEven from '../src/brain-even-cli.js';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
playTheGameEven(userName);
