#!/usr/bin/env node
import playTheGame from '../src/index.js';
import { rule, playTheGameEven } from '../src/games/even-cli.js';

playTheGame(rule, playTheGameEven);
