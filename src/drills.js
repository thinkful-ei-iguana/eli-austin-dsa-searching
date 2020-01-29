const { binarySearch } = require("./Search");

// 1. how many searches

const arr1 = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
const arr2 = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];

const sequenceTo8 = binarySearch(arr1, 8, 0, arr1.length - 1).path;
const sequenceTo16 = binarySearch(arr2, 16, 0, arr2.length - 1).path;

console.log(sequenceTo8, sequenceTo16);


// 3. find a book

// function find(array, value, title) {
//  for (let i = 0; i < array.length; i++) {
//      if (array[i] === value) {
//        return i;
//      }
//    }
//      return title[i];
//  }
//          O(n)


// 4. searching in a bst

// 14, 19, 15, 27, 25, 89, 91, 90, 79, 35
// 14, 19, 15, 27, 25, 91, 90, 79, 89, 35

// 8, 6, 5, 7, 10, 9, 11
