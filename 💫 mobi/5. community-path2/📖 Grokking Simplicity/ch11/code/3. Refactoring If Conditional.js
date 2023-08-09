/// if 구문 리팩터링하기

if (array.length === 0) {
  console.log("Array is empty");
}

if (hasItem(cart, "shoes")) {
  return setPriceByName(cart, "shoes", 0);
}

when(array.length === 0, function () {
  console.log("Array is empty");
});

when(hasItem(cart, "shoes"), function () {
  return setPriceByName(cart, "shoes", 0);
});

/// Answer

function when(test, then) {
  if (test) return then();
}

/// else 구문까지 포함하여 리팩터링하기

IF(
  array.length === 0,
  function () {
    console.log("Array is empty");
  },
  function () {
    console.log("Array has something in it.");
  }
);

IF(
  hasItem(cart, "shoes"),
  function () {
    return setPriceByName(cart, "shoes", 0);
  },
  function () {
    return cart; // unchanged
  }
);

/// Answer

function IF(test, then, ELSE) {
  if (test) return then(); // early return
  // else return ELSE();
  return ELSE();
}
