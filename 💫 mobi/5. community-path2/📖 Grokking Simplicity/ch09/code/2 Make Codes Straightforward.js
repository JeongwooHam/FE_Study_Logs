/// One-liners

function add_item(cart, item) {
  return objectSet(cart, item.name, item);
}

function gets_free_shipping(cart) {
  return calc_total(cart) >= 20;
}

function cartTax(cart) {
  return calc_tax(calc_total(cart));
}

function remove_item_by_name(cart, name) {
  return objectDelete(cart, name);
}

function isInCart(cart, name) {
  return cart.hasOwnProperty(name);
}

/// 🚨 아직 복잡한 코드!

function calc_total(cart) {
  let total = 0;
  let names = Object.keys(cart);
  for (let i = 0; i < names.length; i++) {
    let item = cart[names[i]];
    total += item.price;
  }
  return total;
}

function setPriceByName(cart, name, price) {
  if (isInCart(cart, name)) {
    let itemCopy = objectSet(cart[name], "price", price);
    return objectSet(cart, name, itemCopy);
  } else {
    return objectSet(cart, name, make_item(name, price));
  }
}
