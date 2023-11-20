/// 📑 With array index

function setPriceByName(cart, name, price) {
  let i = indexOfItem(cart, name);
  if (i !== null) {
    let item = cart[i];
    return arraySet(cart, i, setPrice(item, price));
  }
  return cart;
}

function indexOfItem(cart, name) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) return i;
  }
  return null;
}

/// 📄 Without array index

function setPriceByName(cart, name, price) {
  let i = indexOfItem(cart, name);
  if (i !== null) {
    let item = arrayGet(cart, i);
    return arraySet(cart, i, setPrice(item, price));
  }
  return cart;
}

function indexOfItem(cart, name) {
  for (let i = 0; i < cart.length; i++) {
    if (arrayGet(cart, i).name === name) return i;
  }
  return null;
}

function arrayGet(array, idx) {
  return array[idx];
}
