// 🤖 Before Modification

function remove_item_by_name(cart, name) {
  let idx = null;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) idx = i;
  }
  if (idx !== null) return removeItems(cart, idx, 1);
  return cart;
}

// 🤖 After Modification

function remove_item_by_name(cart, name) {
  let idx = indexOfItem(cart, name);
  if (idx !== null) return removeItems(cart, idx, 1);
  return cart;
}

function indexOfItem(cart, name) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) return i;
  }
  return null;
}
