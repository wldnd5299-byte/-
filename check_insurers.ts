import { INSURERS_DATA } from './src/data';

console.log("Total INSURERS_DATA count:", INSURERS_DATA.length);

let nullOrUndefinedCount = 0;
let missingIdCount = 0;

INSURERS_DATA.forEach((ins, i) => {
  if (ins === null || ins === undefined) {
    console.log(`Element at index ${i} is null or undefined!`);
    nullOrUndefinedCount++;
  } else if (!ins.id) {
    console.log(`Element at index ${i} is missing 'id'!`, ins);
    missingIdCount++;
  }
});

console.log("Insurers analysis complete.");
console.log("Null/Undefined count:", nullOrUndefinedCount);
console.log("Missing id count:", missingIdCount);
