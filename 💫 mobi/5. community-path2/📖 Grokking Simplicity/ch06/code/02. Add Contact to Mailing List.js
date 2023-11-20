// ☎️ 메일링 리스트에 연락처를 추가해보자!

let mailing_list_before_modification = [];

// 전역변수인 리스트에 실제로 값을 추가함
function add_contact(email) {
  mailing_list_before_modification.push(email);
}

// 입력 폼 event handler에서 해당 함수 호출
function submit_form_handler(event) {
  let form = event.target;
  let email = form.elements["email"].value;
  add_contact(email);
}

// Page 119 Answer

/// Copy-on-write

let mailing_list = [];

// 전역변수에 직접 접근하지 않도록 인자로 받아와서 복사본 생성
function add_contact(mailing_list, email) {
  let list_copy = mailing_list.slice();
  // 복사본 수정
  list_copy.push(email);
  // 수정된 복사본 반환
  return list_copy;
}

function submit_form_handler(event) {
  let form = event.target;
  let email = form.elements["email"].value;
  // 반환값을 전역 변수에 할당
  mailing_list = add_contact(mailing_list, email);
}
