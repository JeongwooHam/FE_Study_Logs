// [드로핑 큐를 사용해 네트워카 느릴 때 호출을 서로 덮어쓸 수 있게 만들기]
// 서버가 어떤 순서로 응답할지 모르기 때문에 나중에 받은 응답이 이전 응답을 덮어쓸 수 있게 하기

// BEFORE
var document = {...};

function save_ajax(document, callback) {...}

saveButton.addEventListener('click', function() {
  save_ajax(document);
});

// AFTER
var document = {...};

function save_ajax(document, callback) {...}

// dropping queue를 사용하여 클릭한 순서대로 저장할 수 있게 하면서도 이전 응답을 덮어쓰게 됨
var save_ajax_queued = DroppingQueue(1, save_ajax);

saveButton.addEventListener('click', function() {
  save_ajax_queued(document);
});