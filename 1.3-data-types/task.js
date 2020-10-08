"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    
    if (isNaN(percent)) {
        return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`
    } else if (isNaN(contribution)) {
        return `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`
    } else if  (isNaN(amount)) {
        return `Параметр "Общая стоимость" содержит неправильное значение ${amount}`
    } 
    
    const today = new Date();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();
    const dateMonth = date.getMonth();
    const dateYear = date.getFullYear();
    const creditBody = amount - contribution;   //тело кредита
    const numberOfMonths = (dateYear - todayYear) * 12 - todayMonth + dateMonth;  //кол-во выплачиваемых месяцев
    const interestRate = percent / 100 / 12    //процентная ставка
    const monthlyFee = creditBody * (interestRate + interestRate / (((1 + interestRate) ** numberOfMonths) - 1));  //ежемесячный платеж
    const totalAmount = numberOfMonths * monthlyFee;  // общая сумма выплаты за кредит

    console.log(Number(totalAmount.toFixed(2)));

    return Number(totalAmount.toFixed(2));
}

function getGreeting(name) {
    return `Привет, мир! Меня зовут ${(!name || name === 'null' || name === 'undefined' || name === '""' || name === "''") ? 'Аноним' : name}`
}