'use strict';
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();
    
let appData = {
    budget: money,
    timeData : time,
    expenses : {},
    optionalExpenses :{},
    income : [],
    savings : true

};

function chooseExpenses(){
    for (let i = 0; i < 2; i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
        if ((typeof(a)) === 'string' && (typeof(a) != null) && (typeof(b) != null) && 
            a != '' && b != '' && a.length < 50){
            console.log("done");
            appData.expenses[a] = b;
    
        }else {
            console.log ("bad result");
            i = i - 1;
        }
       
    } 
}

chooseExpenses();



//While цикл
/*let i = 0;
while  (i < 2){

    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
        if ((typeof(a)) === 'string' && (typeof(a) != null) && (typeof(b) != null) && 
        a != '' && b != '' && a.length < 50){
        console.log("done");
        appData.expenses [a] = b;
        i++;

    }else {
       console.log ("bad result");
        i--;     
    }
}*/

//do цикл

/*let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
        if ((typeof(a)) === 'string' && (typeof(a) != null) && (typeof(b) != null) && 
        a != '' && b != '' && a.length < 50){
        console.log("done");
        appData.expenses [a] = b;
        i++;
    }else {
        console.log ("bad result");
        i--;
    }
} while (i < 2);*/


detectDayBudget ();

function detectLevel(){ // Расчет уровня достатка
    if (appData.MoneyPerDay <100) {
        console.log("Минимальный достаток");
    }else if (appData.MoneyPerDay > 100 && appData.MoneyPerDay < 2000){
        console.log ("Средний достаток");
    }else if (appData.MoneyPerDay > 2000){
        console.log ("Высокий достаток");
    }else{
        console.log ("Произошла ошибка");
    }
}

detectLevel();

function checkSavings(){
    if (appData.savings == true){
        let save = +prompt("Какова сумма накопления?"),
            percent = +prompt("Под какой процент");
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

function detectDayBudget (){ // Расчет дневного бюджета
    appData.MoneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.MoneyPerDay + "руб.");
}


function chooseOptExpenses(){ // Функция для определения необязательных расходов
    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses();