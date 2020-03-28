'use strict';
let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");
var appData = {
    budget: money,
    timeData : time,
    expenses : {},
    optionalExpenses :{},
    income : [],
    savings : false

};


/*for (let i = 0; i < 2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    if ((typeof(a)) === 'string' && (typeof(a) != null) && (typeof(b) != null) && 
        a != '' && b != '' && a.length < 50){
        console.log("done");
        appData.expenses [a] = b;

    }else {

    }
   
} */
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

    }
}*/

//do цикл
let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
        if ((typeof(a)) === 'string' && (typeof(a) != null) && (typeof(b) != null) && 
        a != '' && b != '' && a.length < 50){
        console.log("done");
        appData.expenses [a] = b;
        i++;
    }else {

    }
} while (i < 2);
appData.MoneyPerDay = appData.budget / 30;


alert("Ежедневный бюджет: " + appData.MoneyPerDay);

if (appData.MoneyPerDay <100) {
    console.log("Минимальный достаток");
}else if (appData.MoneyPerDay > 100 && appData.MoneyPerDay < 2000){
    console.log ("Средний достаток");
}else if (appData.MoneyPerDay > 2000){
    console.log ("Высокий достаток");
}else{
    console.log ("Произошла ошибка");
}