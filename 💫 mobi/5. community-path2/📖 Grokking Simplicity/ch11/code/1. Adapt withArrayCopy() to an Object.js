function objectSet(object, key, value) {
  let copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}

function objectDelete(object, key) {
  let copy = Object.assign({}, object);
  delete copy[key];
  return copy;
}

/// Answer
// 함수로 빼낸 부분
function withObjectCopy(object, modify) {
  let copy = Object.assign({}, object);
  modify(copy);
  return copy;
}
// 콜백을 전달하는 부분
function objectSet(object, key, value) {
  return withObjectCopy(object, function (copy) {
    copy[key] = value;
  });
}

function objectDelete(object, key) {
  return withObjectCopy(object, function (copy) {
    delete copy[key];
  });
}
