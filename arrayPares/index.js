function substituiPares(array) {
    if (!array) return -1
    if (!array.length) return -1

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log("Você já é zero!!")
        } else if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0...`)
            array[i] = 0
        }
    }
    return array
}

let array = [1, 2, 0, 3, 4, 5, 6, 7, 8, 9, 0, 10, 50, 60, 99, 95, 34, 75, 96, 0, 85, 74, 52, 14, 63, 36]

console.log(substituiPares(array))