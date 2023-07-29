/// It's your turn

function setQuantityByName(cart, name, quantity) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) cart[i].quantity = quantity;
  }
}

/// Answer

function setQuantityByName(cart, name, quantity) {
  let cartCopy = cart.slice();
  for (let i = 0; i < cartCopy.length; i++) {
    if (cartCopy[i].name === name)
      cartCopy[i] = objectSet(cartCopy[i], "quantity", quantity);
  }
  return cartCopy;
}
