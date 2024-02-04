const list = [1, 2, 3, 4, 5];

function sumFor(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}

console.log(sumFor(list));

function sumWhile(num) {
  let sum = 0;
  let i = 0;
  while (i < num.length) {
    sum += num[i];
    i++;
  }
  return sum;
}

console.log(sumWhile(list));

function sumRecursion(num, index) {
  if (index === num.length) {
    return 0;
  }
  return num[index] + sumRecursion(num, index + 1);
}

console.log(sumRecursion(list, 0));

function sumTheSimpleWay(num) {
  return _.reduce(num, function (one, two) { return one + two; });
}

console.log(sumTheSimpleWay(list));
