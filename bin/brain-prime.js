#!/usr/bin/env node
import playTheGame from '../src/index.js';
import { rule, playTheGamePrime } from '../src/games/prime-cli.js';

playTheGame(rule, playTheGamePrime);
