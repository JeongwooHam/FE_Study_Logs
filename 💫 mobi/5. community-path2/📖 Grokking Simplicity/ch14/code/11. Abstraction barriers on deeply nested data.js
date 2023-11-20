// [깊이 중첩된 데이터에 추상화 벽 사용하기]

// 🌟 주어진 ID로 블로그를 변경하는 함수

// updatePostById: 명확한 이름
// modifyPost: 분류에 있는 블로그 글의 구조를 몰라도 사용할 수 있는 함수
function updatePostById(category, id, modifyPost) {
  // ["posts", id]: 분류의 구조 등 구체적인 부분은 추상화 벽 뒤에 숨김
  // modifyPost: 블로그 글 구조는 콜백에 맡김
  return nestedUpdate(category, ["posts", id], modifyPost);
}

// 작성자를 수정하는 함수
// updateAuthor: 명확한 이름
// 블로그 글 안에 작성자가 어떤 구조로 작성되어 있는지 몰라고 사용할 수 있는 함수
function updateAuthor(post, modifyUser) {
  // modifyUser: 사용자를 처리하는 방법을 알고 있는 함수
  return update(post, "author", modifyUser);
}

// 사용자 이름을 대문자로 바꾸는 함수
// capitalizeName: 명확한 이름
function capitalizeName(user) {
  return update(user, "name", capitalize);
}

// 🤖 AFTER
/*
[👩‍🏫 무엇이 좋아졌을까요?]
1. 기억해야 할 것이 네 가지에서 세 가지로 줄었다.
2. 동작의 이름이 있으므로 각각의 동작을 기억하기 쉽다.
  - 분류 안에 무엇이 있는지 알 수 있다.
  - 하지만 어떤 키에 들어있거나 어떻게 저장되어 있는지는 몰라도 된다.
*/
updatePostById(blogCategory, "12", function (post) {
  return updateAuthor(post, capitalizeUserName);
});
