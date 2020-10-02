"use strict";

function getResult(a,b,c){
    let d = Math.pow(b, 2) - 4 * a * c;
    let x = [];
    if (d > 0) {
        x = [(-b + Math.sqrt(d)) / 2 * a, (-b - Math.sqrt(d)) / 2 * a]
        return x;
    } else if (d === 0) {
        x = [(-b + Math.sqrt(d)) / 2 * a];
        return x;
    } else return x;
}

function getAverageMark(marks){
    let averageMark;
    let numberOfMarks = marks.length;
    let sumOfMarks = 0;

    if (numberOfMarks === 0) {
        return 0;
    } else if (numberOfMarks > 5) {
        alert("Количество оценок больше пяти. Будут считаться первые пять");
        marks = marks.slice(0, 5);
        numberOfMarks = 5;
    }

    for (let mark of marks) {
        sumOfMarks += mark; 
    }

    averageMark = sumOfMarks / numberOfMarks;

    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let today = new Date().getFullYear();
    let yearOfBirthday = dateOfBirthday.getFullYear();
    let result = '';

    let years = today - yearOfBirthday;

    if (years >= 18)
        result = `Не желаете ли олд-фэшн, ${name}?`;
    else result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;

    return result;
}