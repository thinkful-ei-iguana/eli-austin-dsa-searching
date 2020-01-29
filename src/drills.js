const { binarySearch } = require("./Search");
const BinarySearchTree = require("./BinarySearchTree");

const arraysEqual = (a, b) => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;

  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
  return true;
};

// 1. how many searches

const arr1 = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
const arr2 = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];

const sequenceTo8 = binarySearch(arr1, 8, 0, arr1.length - 1).path;
const sequenceTo16 = binarySearch(arr2, 16, 0, arr2.length - 1).path;

// console.log(sequenceTo8, sequenceTo16);

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

// 5. different tree traversals

const tree = new BinarySearchTree();
const data = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];

data.forEach((n, i) => tree.insert(n, i));

const preOrder = [25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90];
const inOrder = [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90];
const postOrder = [4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25];

// console.log(arraysEqual(tree.preOrder(), preOrder));
// console.log(arraysEqual(tree.inOrder(), inOrder));
// console.log(arraysEqual(tree.postOrder(), postOrder));

// 6. Find the next commanding officer

const commandTree = new BinarySearchTree();

commandTree.insert(5, "Captain Picard");
commandTree.insert(6, "Commander Data");
commandTree.insert(8, "Lt. Cmdr. Crusher");
commandTree.insert(7, "Lieutenant Selar");
commandTree.insert(3, "Commander Riker");
commandTree.insert(2, "Lt. Cmdr Worf");
commandTree.insert(4, "Lt. Cmdr LaForge");
commandTree.insert(1, "Lieutenant Security Officer");

console.log(commandTree.bfsOrder());
// console.log(commandTree);
