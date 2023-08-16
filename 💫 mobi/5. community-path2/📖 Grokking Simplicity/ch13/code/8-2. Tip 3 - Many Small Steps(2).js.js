/// 코드를 함수형 도구 체인으로 수정하기

function shoesAndSocksInventory(products) {
  var inventory = 0;
  for (var p = 0; p < products.length; p++) {
    var product = products[p];
    // filter로 거르기
    if (product.type === "shoes" || product.type === "socks") {
      // inventory의 총합을 return하는 reduce 사용하기
      inventory += product.numberInInventory;
    }
  }
  // product를 product.inventory로 변환하는 map 사용하기
  return inventory;
}

/// Answer

function shoesAndSocksInventory(products) {
  var shoesAndSocks = filter(products, function (product) {
    return product.type === "shoes" || product.type === "socks";
  });
  var inventories = map(shoesAndSocks, function (product) {
    return product.numberInInventory;
  });
  return reduce(inventories, 0, plus);
}
