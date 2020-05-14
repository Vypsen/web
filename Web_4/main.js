function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
}

function getArray(n) {
    let arr = []
    for(let i = 0; i < n; i++) {
        arr.push(getRandomInt(-100, 100))
    }
    return arr
}

function getResultArray(arr) {
    

}

// Задание 4.1
$('#trap-solve').on('click', solveOne)

function solveOne() {
    let height = $('#trap-height').val() * 1
    let first = $('#trap-up').val() * 1
    let second = $('#trap-down').val() * 1

    if (height <= 0 || first <= 0 || second <= 0) {
        alert("Вы ввели неверные значения")
    }

    let result = (first + second) / 2 * height

    $('#trap-result').html(result)
}

// Задание 4.2
$('#fibonacci').on('click', solveTwo)

function solveTwo() {
    let k = 1
    let a = [1, 1]
    while (k < 10){
        a.push(a[k - 1] + a[k])
        k++
    }
    $('#fibonacci-result').html(a[9])

}

// Задание 4.3
var matrix = []

$('#matrix').on('click', makeMatrix)
$('#matrix-sorted').on('click', sortMatrix)

function printMatrix(el, a) {
    el.html('')
    
    for (let i = 0; i < a.length; i++) {
        el.append(`<div class="row-${i} zzz"></div>`)

        for (let j = 0; j < a[i].length; j++) {
            $(`.row-${i}`).append(`<div>${a[i][j]}</div>`)
        }
    }
} 

function makeMatrix() {
    let n = $('#matrix-rows').val() * 1
    let m = $('#matrix-columns').val() * 1

    if(n <=0 || m <= 0){
        alert("Вы ввели неверные значения")
    }

    matrix = []

    for(let i = 0; i < n; i++) {
        matrix.push([])

        for(let j = 0; j < m; j++){
            matrix[i].push(getRandomInt(-100,100))
        }     
    }

    printMatrix($('#matrix-print'), matrix)
}

function sortMatrix(){
    let n = matrix.length

    for(let i = 0; i < n; i++ ){
        matrix[i].sort((a, b) => a - b)
    }
    printMatrix()
}

// Задание 4.4
$('#snake-create').on('click', getResultArray)
function getResultArray() {
    let n = $('#snake-size').val() * 1

    if(n <= 0){
        alert("Вы ввели неверные значения")
    }

    let size = n * n
    let a = getArray(size)

    a.sort((a, b) => b - a)

    console.log(a)

    let m = []

    for (let i = 0; i < n; i++) {
        m.push([])
    }

    let direction = 'toLeft'
    
    // Бежим по рядам
    for (let i = n - 1 ; i >= 0; i--) {
        if (direction == 'toLeft') {
            for (let j = n - 1; j >=0; j--) {
                m[i][j] = a.pop()
            }

            direction = 'toRight'
            continue
        }

        if (direction == 'toRight') {
            for (let j = 0; j < n; j++) {
                m[i][j] = a.pop()
            }

            direction = 'toLeft'
            continue
        }
    }

    console.log(m)

    printMatrix($('#snake-output'), m)
}



