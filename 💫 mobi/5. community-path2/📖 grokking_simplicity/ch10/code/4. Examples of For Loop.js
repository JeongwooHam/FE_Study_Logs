/// 준비하고 먹기
for (let i = 0; i < foods.length; i++) {
  let food = foods[i];
  cook(food);
  eat(food);
}

/// 설거지하기
for (let i = 0; i < dishes.length; i++) {
  let dish = dishes[i];
  wash(dish);
  dry(dish);
  putAway(dish);
}

// 1. 배열을 순회하는 일반적인 반복문 함수들이지만 두 반복문이 하는 일이 다름
// 코드가 완전히 같지 않아 두 번 호출할 수밖에 없음

// 2. 반복문에서 최대한 문법적으로 비슷한 부분을 찾아 하나로 만들기!

// 3. 설명할 수 있는 이름 붙이기
function cookAndEatFoods() {
  for (let i = 0; i < foods.length; i++) {
    let food = foods[i];
    cook(food);
    eat(food);
  }
}

function cleanDishes() {
  for (let i = 0; i < dishes.length; i++) {
    let dish = dishes[i];
    wash(dish);
    dry(dish);
    putAway(dish);
  }
}
// 4. 원래처럼 동작할 수 있도록 새 함수 호출하기
cookAndEatFoods();
cleanDishes();

/// 5. 일반적인 이름으로 지역변수 변경하기
// 암묵적 인자 foods, dishes: 함수 안에서 배열 이름으로 쓰이면서 함수명에도 있음
function cookAndEatFoods() {
  for (let i = 0; i < foods.length; i++) {
    let item = foods[i];
    cook(item);
    eat(item);
  }
}

function cleanDishes() {
  for (let i = 0; i < dishes.length; i++) {
    let item = dishes[i];
    wash(item);
    dry(item);
    putAway(item);
  }
}

cookAndEatFoods();
cleanDishes();

/// 6. 암묵적 인자 없애기
// 일반적인 이름으로 함수명 변경하기
// 함수에 명시적인 배열 인자 추가하기
function cookAndEatArray(array) {
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    cook(item);
    eat(item);
  }
}

function cleanArray(array) {
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    wash(item);
    dry(item);
    putAway(item);
  }
}
// 7. 호출 부분에서 인자로 배열 전달하기
cookAndEatFoods(foods);
cleanDishes(dishes);

// 8. 반복문 안에서 중복되는 부분 추출하기
// cookAndEatArray와 cleanArray는 구현이 비슷하고 함수명 부분만 다름
function cookAndEatArray(array) {
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    // 빼낸 함수 호출
    cookAndEat(item);
  }
}

function cleanArray(array) {
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    // 빼낸 함수 호출
    clean(item);
  }
}

// 빼낸 함수 정의
function cookAndEat(food) {
  cook(food);
  eat(food);
}

function clean(dish) {
  wash(dish);
  dry(dish);
  putAway(dish);
}

cookAndEatFoods(foods);
cleanDishes(dishes);

// 9. 일반적인 이름으로 바꾸기, 명시적인 인자로 표현하기(f)
function operateOnArray(array, f) {
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    // 본문에서 새 인자 사용하기
    f(item);
  }
}

function cookAndEat(food) {
  cook(food);
  eat(food);
}

function operateOnArray(array, f) {
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    f(item);
  }
}

function clean(dish) {
  wash(dish);
  dry(dish);
  putAway(dish);
}

// 호출하는 코드에 인자 추가하기
cookAndEatFoods(foods, cookAndEat);
cleanDishes(dishes, clean);

// 10. 같은 두 함수 중 하나 없애기
// forEach 함수는 배열과 함수를 인자로 받고, 그러므로 고차 함수임
function forEach(array, f) {
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    f(item);
  }
}

function cookAndEat(food) {
  cook(food);
  eat(food);
}

forEach(foods, cookAndEat);

function clean(dish) {
  wash(dish);
  dry(dish);
  putAway(dish);
}

forEach(dishes, clean);

// Page 254

/// Using anonymous functions and forEach()

forEach(foods, function (food) {
  cook(food);
  eat(food);
});

forEach(dishes, function (dish) {
  wash(dish);
  dry(dish);
  putAway(dish);
});
