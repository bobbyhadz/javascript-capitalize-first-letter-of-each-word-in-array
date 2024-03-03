// EXAMPLE 1 - Capitalize the First Letter of Each Word in an Array

function capitalizeWords(arr) {
  return arr.map(word => {
    const firstLetter = word.charAt(0).toUpperCase();
    const rest = word.slice(1).toLowerCase();

    return firstLetter + rest;
  });
}

// 👇️ [ 'Bobby', 'Hadz' ]
console.log(capitalizeWords(['bobby', 'hadz']));

// 👇️ [ 'Bobby', 'Hadz', 'Com' ]
console.log(capitalizeWords(['bobby', 'hadz', 'com']));

// ------------------------------------------------------------------

// // EXAMPLE 2 - Capitalize the First Letter of Each Word in Array using `forEach()`

// const arr = ['bobby', 'hadz', 'com'];

// arr.forEach((word, index) => {
//   const firstLetter = word.charAt(0).toUpperCase();
//   const rest = word.slice(1).toLowerCase();

//   arr[index] = firstLetter + rest;
// });

// // 👇️ [ 'Bobby', 'Hadz', 'Com' ]
// console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Capitalize the First Letter of Each Word in Array using `for`

// const arr = ['bobby', 'hadz', 'com'];

// for (let index = 0; index < arr.length; index++) {
//   const firstLetter = arr[index].charAt(0).toUpperCase();
//   const rest = arr[index].slice(1).toLowerCase();

//   arr[index] = firstLetter + rest;
// }

// // 👇️ [ 'Bobby', 'Hadz', 'Com' ]
// console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Capitalize the First Letter of Each Word in a String

// function toTitleCase(str) {
//   const titleCase = str
//     .toLowerCase()
//     .split(' ')
//     .map(word => {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     })
//     .join(' ');

//   return titleCase;
// }

// // 👇️ Bobby Hadz
// console.log(toTitleCase('bobby hadz'));

// // 👇️ Hello World
// console.log(toTitleCase('hello world'));

// // 👇️ ''
// console.log(toTitleCase(''));

// ------------------------------------------------------------------

// // EXAMPLE 5 - Capitalize the first letter of each word using `String.replace()`

// function toTitleCase(str) {
//   return str.replace(/(^\w|\s\w)/g, m => m.toUpperCase());
// }

// // 👇️ Hello World
// console.log(toTitleCase('hello world'));

// // 👇️ Bobby Hadz Com
// console.log(toTitleCase('bobby hadz com'));
