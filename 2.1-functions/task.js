"use strict";

// ============================ Задача 1 ==============================
function getSolutions( a, b, c ) {
    const D = b ** 2 - 4 * a * c;
    let x1, x2;
    if (D < 0) {
        return {D: D, roots: []};
    } else if (D === 0) {
        x1 = -b / (2 * a);
        return {D: D, roots: [x1]};
    }
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    return {D: D, roots: [x1, x2]};
}

function showSolutionsMessage( a, b, c ) {
    let operator1, operator2;
    let result = getSolutions( a, b, c );
    b > 0 ? operator1 = '+' : operator1 = '-';
    c > 0 ? operator2 = '+' : operator2 = '-';
    console.log(`Вычисляем корни квадратного уравнения ${a}x² ${operator1} ${Math.abs(b)}x ${operator2} ${Math.abs(c)}`)
    console.log(`Значение дискриминанта: ${result.D}`)
    if (result.roots.length === 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    } else if (result.roots.length === 1) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

showSolutionsMessage( 2, 4, 2 );

// ============================ Задача 2 ==============================
function getAverageMark(marks) {
    let numberOfMarks = marks.length;
    let sumOfMarks = 0;

    if (numberOfMarks === 0) {
        return 0;
    }

    for (let mark of marks) {
        sumOfMarks += mark; 
    }

    return sumOfMarks / numberOfMarks;
}

function getAverageScore(data) {
    let averageOfAverageMarks = [];
    let newData = {};
    for (let subject in data) {
        newData[subject] = getAverageMark(data[subject]); // считаем среднюю оценку по каждому предмету
        averageOfAverageMarks.push(newData[subject]);
    }
    newData.average = getAverageMark(averageOfAverageMarks);
    return newData;
}

console.log(getAverageScore({
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    phisics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4]
}))

// console.log(getAverageScore({}))


// ============================ Задача 2 ==============================
function getPersonData(secretData) {
    return {firstName: getDecodedValue(secretData.aaa), lastName: getDecodedValue(secretData.bbb)};
}

function getDecodedValue(secret) {
    if (secret === 1) {
        return "Эмильо";
    }
    if (secret === 0) {
        return "Родриго";
    }
}

console.log(getPersonData({
    aaa: 1,
    bbb: 0
}))