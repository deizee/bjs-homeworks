"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    
    if (isNaN(percent)) {
        return `Параметр "Процентная ставка" содержит неправильное значение "${window.percent.value}"`
    } else if (isNaN(contribution)) {
        return `Параметр "Начальный взнос" содержит неправильное значение "${window.contribution.value}"`
    } else if  (isNaN(amount)) {
        return `Параметр "Общая стоимость" содержит неправильное значение "${window.amount.value}"`
    } 
    
    let today = new Date();
    let todayMonth = today.getMonth();
    let todayYear = today.getFullYear();
    let dateMonth = date.getMonth();
    let dateYear = date.getFullYear();
    let creditBody = amount - contribution;   //тело кредита
    let numberOfMonths = (dateYear - todayYear) * 12 - todayMonth + dateMonth;  //кол-во выплачиваемых месяцев
    let interestRate = percent / 100 / 12    //процентная ставка
    let monthlyFee = creditBody * (interestRate + interestRate / (((1 + interestRate) ** numberOfMonths) - 1));  //ежемесячный платеж
    let totalAmount = numberOfMonths * monthlyFee;  // общая сумма выплаты за кредит

    console.log(Number(totalAmount.toFixed(2)));

    return Number(totalAmount.toFixed(2));
}

function getGreeting(name) {

    if (!name) {
        return `Привет, мир! Меня зовут Аноним`
    } else {
        return `Привет, мир! Меня зовут ${name}`
    }
}