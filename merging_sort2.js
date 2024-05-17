const a = [0, 1, 1, 1, 5, 8, 9, 10, 11, 12, 56];
const b = [3, 5, 7, 13, 17, 25, 40, 100];
const res = [];

// Менее замудрённая версия того же алгоритма

console.log(a.length + b.length);

while (true) {
  if (a[0] < b[0]) {
    res.unshift(a.shift());
  } else {
    res.unshift(b.shift());
  }

  if (!a.length || !b.length) {
    let emptyArr = !a.length ? b : a;
    emptyArr.forEach((item) => {
      res.unshift(item);
    });
    break;
  }
}

console.log(res, res.length);
