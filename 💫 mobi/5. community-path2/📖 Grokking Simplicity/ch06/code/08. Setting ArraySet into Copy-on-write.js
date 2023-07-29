function arraySet(array, idx, value) {
  let copy = array.slice();
  copy[idx] = value;
  return copy;
}
