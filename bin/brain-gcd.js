#!/usr/bin/env node
import { playTheGame } from '../src/index.js';
import { rule, playTheGameGcd } from '../src/games/gcd-cli.js';

playTheGame(rule, playTheGameGcd);
