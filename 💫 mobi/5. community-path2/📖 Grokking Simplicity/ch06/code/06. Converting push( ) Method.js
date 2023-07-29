// 🤖 Before Modification
function add_contact(mailing_list, email) {
  let list_copy = mailing_list.slice();
  list_copy.push(email);
  return list_copy;
}

// 🤖 After Modification
function push(array, elem) {
  let copy = array.slice();
  copy.push(elem);
  return copy;
}
// copy-on-write는 호출 부분이 아닌 실행 부분에서 적용!
function add_contact(mailing_list, email) {
  return push(mailing_list, email);
}
