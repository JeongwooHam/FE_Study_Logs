/// Original

function setPriceByName(cart, name, price) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) cart[i].price = price;
  }
}

/// Copy-on-write

function setPriceByName(cart, name, price) {
  let cartCopy = cart.slice();
  for (let i = 0; i < cartCopy.length; i++) {
    if (cartCopy[i].name === name) cartCopy[i] = setPrice(cartCopy[i], price);
  }
  return cartCopy;
}
