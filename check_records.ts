import { SURGERY_RECORDS } from './src/data';

console.log("Total SURGERY_RECORDS count:", SURGERY_RECORDS.length);

let nullOrUndefinedCount = 0;
let missingIdCount = 0;

SURGERY_RECORDS.forEach((s, i) => {
  if (s === null || s === undefined) {
    console.log(`Element at index ${i} is null or undefined!`);
    nullOrUndefinedCount++;
  } else if (!s.id) {
    console.log(`Element at index ${i} is missing 'id'!`, s);
    missingIdCount++;
  }
});

console.log("Analysis complete.");
console.log("Null/Undefined count:", nullOrUndefinedCount);
console.log("Missing id count:", missingIdCount);
