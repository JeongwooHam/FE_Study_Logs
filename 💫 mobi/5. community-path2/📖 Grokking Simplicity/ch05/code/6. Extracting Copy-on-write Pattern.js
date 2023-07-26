/// Original
function add_item(cart, item) {
  let new_cart = cart.slice();
  new_cart.push(item);
  return new_cart;
}

/// General
function add_element_last(array, elem) {
  let new_array = array.slice();
  new_array.push(elem);
  return new_array;
}

function add_item(cart, item) {
  return add_element_last(cart, item);
}
