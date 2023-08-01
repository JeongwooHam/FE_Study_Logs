// 🤖 Before Modification

function setPriceByName(cart, name, price) {
  let cartCopy = cart.slice();
  for (let i = 0; i < cartCopy.length; i++) {
    if (cartCopy[i].name === name) cartCopy[i] = setPrice(cartCopy[i], price);
  }
  return cartCopy;
}

function indexOfItem(cart, name) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) return i;
  }
  return null;
}

// 🤖 After Modification

function setPriceByName(cart, name, price) {
  let cartCopy = cart.slice(b);
  let i = indexOfItem(cart, name);
  if (i !== null) cartCopy[i] = setPrice(cartCopy[i], price);
  return cartCopy;
}

function indexOfItem(cart, name) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) return i;
  }
  return null;
}
