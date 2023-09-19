// [도메인 계층에서 선택적인 값 가져오기]

// 지난해 판매된 모든 제품에 대한 보고서 만들기

// 제품을 가져와 보고서를 생성하는 함수
function generateReport(products) {
  return reduce(products, "", function (report, product) {
    return report + product.name + " " + product.price + "\n";
  });
}

var productsLastYear = db.fetchProducts("last year");
var reportLastYear = generateReport(productsLastYear);

// =============================================================================
// 🤔 보고서에 할인 정보를 표시해야 한다면?
// 할인 레코드의 아이디는 제품 레코드에 있을 때도 있고 없을 때도 있다.

function generateReport(products) {
  return reduce(products, "", function (report, product) {
    return report + product.name + " " + product.price + "\n";
  });
}
// 🚨 reduce 콜백에서 할인 레코드 아이디를 통해 DB에서 가져올 경우 generateReport()가 액션이 된다!

// 👩‍🏫 제품을 DB에서 가져오는 가장 상위 액션에서 작업을 수행해야 합니다.
var productsLastYear = db.fetchProducts("last year");
// 제품은 최상위 계층에 있는 인자!
var productsWithDiscounts = map(productsLastYear, function (product) {
  if (!product.discountID) return product;
  return objectSet(product, "discount", db.fetchDiscount(product.discountID));
});

var reportLastYear = generateReport(productsWithDiscounts);

// 👩‍🏫 항상 도메인 계층과 인터렉션 계층을 분리해 도메인 규칙을 계산으로 유지합시다!
