const { binarySearch } = require("./Search");

// 1. how many searches

const arr1 = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
const arr2 = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];

const sequenceTo8 = binarySearch(arr1, 8, 0, arr1.length - 1).path;
const sequenceTo16 = binarySearch(arr2, 16, 0, arr2.length - 1).path;

console.log(sequenceTo8, sequenceTo16);
