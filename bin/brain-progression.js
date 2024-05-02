#!/usr/bin/env node
import { playTheGame } from '../src/index.js';
import { rule, playTheGameProgression } from '../src/games/progression-cli.js';

playTheGame(rule, playTheGameProgression);
