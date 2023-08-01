// 🤖 Before Modification
function setPriceByName(cart, name, price) {
  let cartCopy = cart.slice();
  let i = indexOfItem(cart, name);
  if (i !== null) cartCopy[i] = setPrice(cartCopy[i], price);
  return cartCopy;
}

function arraySet(array, idx, value) {
  let copy = array.slice();
  copy[idx] = value;
  return copy;
}

// 🤖 After Modification

function setPriceByName(cart, name, price) {
  let i = indexOfItem(cart, name);
  if (i !== null) return arraySet(cart, i, setPrice(cart[i], price));
  return cart;
}

function arraySet(array, idx, value) {
  let copy = array.slice();
  copy[idx] = value;
  return copy;
}
