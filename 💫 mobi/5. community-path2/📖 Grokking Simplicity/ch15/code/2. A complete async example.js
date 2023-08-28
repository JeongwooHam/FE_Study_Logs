// [완전한 비동기 예제]

// HTML 페이지가 로드되었을 때 페이지에서 구매 버튼을 찾기 위해 쿼리 실행
var buy_button = document.getElementByID("buy-now-shoes"); // 문서에서 버튼을 찾음

// 찾은 구매 버튼 클릭 시 실행할 콜백 함수 추가
buy_button.addEventListener("click", () => {
  // 구매 버튼에 클릭 이벤트 콜백 추가
  // AJAX 요청을 만듦
  add_to_cart_ajax({ item: "shoes" }, () => {
    // AJAX 요청 완료 시 실행될 콜백
    shopping_cart.add({ item: "shoes" });
    render_cart_icon();
    // 나중에 AJAX 요청 완료 시 UI 업데이트
    buy_button.innerHTML = "Buy Now";
  });
  // AJAX 요청 만들고 바로 버튼을 loading으로 바꿈
  buy_button.innerHTML = "loading";
});

/*
@ notes
1️⃣ 어느 시점에 사용자가 구매 버튼 클릭 시 작업 큐에 해당 작업이 추가된다.
2️⃣ 이벤트 루프는 할 일을 하다가 클릭 이벤트를 작업 큐에서 꺼내면 클릭 이벤트에 등록된 콜백을 실행한다.
3️⃣ 클릭 이벤트 콜백이 실행되면 요청 큐에 AJAX 요청을 추가한다.
4️⃣ 어느 시점에 네트워크 엔진이 요청 큐에 있는 요청을 꺼내서 처리한다.
5️⃣ 구매 버튼 글씨를 바꾼다.
6️⃣ 이후 이벤트 루프는 큐에서 다음 작업을 꺼내 처리하기 시작한다.
7️⃣ AJAX 요청이 완료된다.
8️⃣ 네트워크 엔진은 등록했던 AJAX 요청에 대한 콜백을 작업 큐에 추가한다.
9️⃣ 이 콜백은 작업 큐에 있는 다른 작업이 모두 처리되고 처리할 때가 되면 실행된다.
🔟 응답 콜백은 장바구니를 업데이트하고, 장바구니 아이콘을 표시하며 구매 버튼 글씨를 원래대로 다시 설정한다.
*/
