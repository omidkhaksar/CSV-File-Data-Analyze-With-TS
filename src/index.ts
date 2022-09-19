import fs from 'fs';
import {CsvFileReader} from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();

enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D',
}
let manUnitedWin = 0;
for (let match of reader.data) {
    if (match[1]==='Man United' && match[5] ===MatchResult.HomeWin){manUnitedWin++}
    else if(match[2]==='Man United' && match[5] ===MatchResult.AwayWin){manUnitedWin++}
}
console.log(`Man United Won ${manUnitedWin} Matches`)