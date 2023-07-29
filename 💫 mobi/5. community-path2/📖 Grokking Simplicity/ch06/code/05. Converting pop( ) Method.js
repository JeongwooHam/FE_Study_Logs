// Page 123 It's your turn

let a = [1, 2, 3, 4];
let b = a.pop();
console.log(b); // prints 4
console.log(a); // prints [1, 2, 3]

// Page 124 Answer

/// 1. Split the read and write into two operations

function last_element(array) {
  return array[array.length - 1];
}

function drop_last(array) {
  array.pop();
}

//// Copy-on-write

function drop_last(array) {
  let array_copy = array.slice();
  array_copy.pop();
  return array_copy;
}

/// 2. Return two values

function pop(array) {
  return array.pop();
}

//// Copy-on-write

function pop(array) {
  let array_copy = array.slice();
  let first = array_copy.pop();
  return {
    first: first,
    array: array_copy,
  };
}
