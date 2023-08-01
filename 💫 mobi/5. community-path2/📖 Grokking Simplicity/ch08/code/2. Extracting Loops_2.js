// 🤖 Before Modification
function isInCart(cart, name) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) return true;
  }
  return false;
}

function indexOfItem(cart, name) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) return i;
  }
  return null;
}

// 🤖 After Modification

function isInCart(cart, name) {
  return indexOfItem(cart, name) !== null;
}

function indexOfItem(cart, name) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) return i;
  }
  return null;
}
