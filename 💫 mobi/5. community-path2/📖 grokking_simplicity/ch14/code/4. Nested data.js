// 중첩된 update 시각화하기
const shirt = {
  name: "shirt",
  price: 13,
  options: {
    color: "blue",
    size: 3,
  },
};
s;

function incrementSize(item) {
  // 조회1
  const options = item.options;
  // 조회2
  const size = options.size;
  // 변경
  const newSize = size + 1;
  // 설정1
  const newOptions = objectSet(options, "size", newSize);
  // 설정2
  const newItem = objectSet(item, "options", newOptions);
  return newItem;
}
