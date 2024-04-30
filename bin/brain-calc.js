#!/usr/bin/env node
import { playTheGame } from '../src/index.js';
import { rule, playTheGameCalc } from '../src/games/calc-cli.js';

playTheGame(rule, playTheGameCalc);
