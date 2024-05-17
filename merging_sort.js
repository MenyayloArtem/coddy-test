const a = [0, 1, 1, 1, 5, 8, 9, 10, 11, 12, 56];
const b = [3, 5, 7, 13, 17, 25, 40, 100];
const res = [];

// Указатели на элементы массива
let p1 = 0;
let p2 = 0;

console.log(a.length + b.length);

while (true) {
  // Находим минимальный элемент, добавляем его в начало массива результата, двигаем указатель
  if (a[p1] < b[p2]) {
    res.unshift(a[p1++]);
  } else {
    res.unshift(b[p2++]);
  }

  // Находим массив, чей указатель достиг предела
  if (p1 === a.length || p2 === b.length) {
    let lastArr = p1 === a.length ? b : a;
    let lastIndex = lastArr === a ? p1 : p2;

    // Заполняем результат оставшимися элементами противоположного массива
    while (lastIndex + 1 <= lastArr.length) {
      res.unshift(lastArr[lastIndex++]);
    }
    break;
  }
}

// Хотел бы использовать reverse, но нельзя

console.log(res, res.length);
