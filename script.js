'use strict';
let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");
var appData = {
    money,
    timeData : time,
    expenses : {},
    optionalExpenses :{},
    income : [],
    savings : false

};

let moneyStat = prompt("Введите обязательную статью расходов в этом месяце?"),
    SkolkoMoney = prompt("Во сколько обойдется?");
    
appData.expenses.a = moneyStat;
appData.expenses.b = SkolkoMoney;

alert("Бюджет на месяц" + " " +money/30);