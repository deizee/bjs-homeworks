"use strict";

//======================== Задача 1 ========================
function isPalindrome() {
    const myString = this.replace(/\s/g, '').toLowerCase();  // убираем из строки пробелы
    const halfLength = Math.ceil(myString.length / 2);       // вычисляем половину строки и округляем до целого числа в большую сторону,
                                                           // чтобы не делать лишних итераций в цикле
    for (let i = 0; i < halfLength; i++) {
        if (myString[i] != myString[myString.length - i - 1]) {  // сравниваем первый символ в строке с последним.
            return false;                                        // Если они не равны, завершай выполнение функции и возвращай false
        }
    }
    return true;      // если все проверенные символы равны, значит возвращай true
}

String.prototype.isPalindrome = isPalindrome;   // добавляем метод isPalindrome в прототип объекта String


//======================== Задача 2 ========================
function getAverageMark(marks) {
    const numberOfMarks = marks.length;    // количество оценок в массиве

    if (numberOfMarks === 0) {    // если массив пустой, возвращаем 0
        return 0;
    }

    const sumOfMarks = marks.reduce((curValue, prevValue) => {   // считаем сумму всех оценок в массиве
        return curValue + prevValue
    }, 0);

    return Math.round(sumOfMarks / numberOfMarks);    // возвращаем среднее арифметическое, округленное до ближайшего целого числа
}


//======================== Задача 3 ========================
function checkBirthday(birthday) {
    // первый способ (предлагаемый в задаче)

    // const now = new Date();
    // const b = new Date(birthday);
    // const nowUT = +now;
    // const birthdayUT = +b;
    // const diff = nowUT - birthdayUT;
    // const age = diff / 31556952000;   // здесь неточность, потому что делим на среднее количество миллисекунд в году (вне зависимости от того, високосный год или нет)
    // return age >= 18;                 // погрешность составляет ~2 дня
    

    //=======================================================
    // второй способ (более точный, не зависит от високосных годов)

    const now = new Date();
    const b = new Date(birthday);

    const nowYear = now.getFullYear();      // получаем сегодняшний год
    const birthdayYear = b.getFullYear();   // получаем год рождения
    const age = nowYear - birthdayYear;     // считаем разницу в годах
    
    const nowDate = now.setFullYear(1970);        // заменяем год на 1970 и считаем сколько миллисекунд прошло с начала года до "сегодняшней даты" (число и месяц)
    const birthdayDate = b.setFullYear(1970);     // заменяем год на 1970 и считаем сколько миллисекунд прошло с начала года до "даты рождения"
    
    if (nowDate < birthdayDate) {
        age = age - 1;                    // если "дата рождения" больше текущей даты, значит День рождения еще не наступил, поэтому вычитаем из возраста 1
    }

    return age >= 18;      // возвращает true, если условие выполняется, и false в противном случае
}