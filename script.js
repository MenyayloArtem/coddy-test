let c1 = 12 // Всего огней
let b1 = 3 // Сгоревшие огни для двух новых
let b = 0 // Сгоревшие огни
let h = 0 // Часы горения

while (c1) {

    if (b1 <= 2) {
        console.log("Нельзя")
        break
    }
    c1--
    b++

    if (b == b1) {
        c1 += 2
        b = 0
    }

    h += 2 // + 2 часа
}

console.log(h, b)