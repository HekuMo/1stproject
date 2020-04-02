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
    savings : true,
    chooseExpenses: function () {
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
    },

    detectLevel: function() {
        if (appData.MoneyPerDay <100) {
            console.log("Минимальный достаток");
        }else if (appData.MoneyPerDay > 100 && appData.MoneyPerDay < 2000){
            console.log ("Средний достаток");
        }else if (appData.MoneyPerDay > 2000){
            console.log ("Высокий достаток");
        }else{
            console.log ("Произошла ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true){
            let save = +prompt("Какова сумма накопления?"),
                percent = +prompt("Под какой процент");
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    detectDayBudget: function () {
        appData.MoneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.MoneyPerDay + "руб.");
    },
    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function () {
        for (let i=0;i<1;i++){
            let items = prompt('Что принесет дополнительный доход? (Перечислить через заптую)');
            if ((typeof(items)) === 'string' && (typeof(items) != null) && 
            (items != '')) {
            appData.income = items.split(',');
            appData.income.push(prompt('Может что-то еще?'));
            appData.income.sort(); 
        }else{
        i--;
        }
        
    }
    let arr = [];
    appData.income.forEach (function (item,i){
        arr [i] = (i+1 + ' Споcобы доп заработка: ' + item + '\n');
    });
    alert (arr);
    console.log ('Наша программа включает в себя данные:');
    for (let key in appData) {
    console.log (key +'-' +appData[key]);
        
    
}}

};



   

//appData.chooseExpenses();



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


//appData.detectDayBudget ();



//appData.detectLevel();


//appData.checkSavings();





//appData.chooseOptExpenses();


let y = 1; 
let x = y = 2;
console.log(0 || "" || 2 || undefined || true || falsе);