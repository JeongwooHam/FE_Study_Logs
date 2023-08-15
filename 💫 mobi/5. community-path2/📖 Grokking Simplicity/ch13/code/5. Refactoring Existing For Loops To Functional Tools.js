let answer = [];
let window = 5;
for (let i = 0; i < array.length; i++) {
  let sum = 0;
  let count = 0;
  for (let w = 0; w < window; w++) {
    let idx = i + w;
    if (idx < array.length) {
      sum += array[idx];
      count += 1;
    }
  }
  answer.push(sum / count);
}
