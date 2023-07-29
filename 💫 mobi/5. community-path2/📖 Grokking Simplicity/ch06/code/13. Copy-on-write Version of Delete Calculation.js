function objectDelete(object, key) {
  let copy = Object.assign({}, object);
  delete copy[key];
  return copy;
}
