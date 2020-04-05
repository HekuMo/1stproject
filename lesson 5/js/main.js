let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName ('budget-value')[0],
    daybudgetValue = document.getElementsByClassName ('daybudget-value')[0],
    levelValue = document.body.getElementsByClassName ('level-value')[0],
    expensesValue = document.getElementsByClassName ('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName ('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName ('income-value')[0],
    monthSavingsValue = document.getElementsByClassName ('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName ('yearsavings-value')[0],
    
    expensesItem = document.getElementsByClassName ('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionaExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalexpensesItem = document.querySelectorAll ('.optionalexpenses-item'),
    incomeItem = document.querySelector ('.choose-income'),
    checkavings = document.querySelector ('#savings'),
    sumValue = document.querySelector ('.choose-sum'),
    percentValue = document.querySelector ('.choose-percent'),
    yearValue = document.querySelector ('.year-value'),
    monthValue = document.querySelector ('.month-value'),
    dayValue = document.querySelector ('.day-value'),
    btn = document.getElementsByTagName('button');

    let money, time,optionalexpensesSum;

    function disableBtn (){
        for (let i=0;i<btn.length;i++) {
            btn[i].disabled = true;
        }
    }
    disableBtn ();

    function enableBtn (){
        for (let i=0;i<btn.length;i++) {
            btn[i].disabled = false;
        }
    }
    

    expensesBtn.addEventListener ('click', function(){
        
        let sum = 0;

        for (let i = 0; i < expensesItem.length; i++){
            let a = expensesItem[i].value, 
                b = expensesItem[++i].value;
            if ((typeof(a)) === 'string' && (typeof(a) != null) && (typeof(b) != null) && 
                a != '' && b != '' && a.length < 50){
                console.log("done");
                appData.expenses[a] = b;
                sum += +b;
        
            }else {
                console.log ("bad result");
                i = i - 1;
            }
           
        } 
        expensesValue.textContent = sum;
    });

    optionaExpensesBtn.addEventListener('click',function(){
        optionalexpensesSum = 0;
        for (let i = 0; i < optionalexpensesItem.length; i++) {
            let opt = optionalexpensesItem[i].value;
            appData.optionalExpenses[i] = opt;
            optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
            
            optionalexpensesSum = +optionalexpensesItem[i].value + optionalexpensesSum;
            
        }

    });

    countBtn.addEventListener('click', function(){

        

        if (appData.budget != undefined) {

        appData.MoneyPerDay = ((appData.budget - optionalexpensesSum) / 30).toFixed();
        daybudgetValue.textContent = appData.MoneyPerDay;
        console.log(optionalexpensesSum);

        if (appData.MoneyPerDay <= 100) {
            levelValue.textContent = "Минимальный достаток";
        }else if (appData.MoneyPerDay > 100 && appData.MoneyPerDay < 2000){
            levelValue.textContent = "Средний достаток";
        }else if (appData.MoneyPerDay > 2000){
            levelValue.textContent = "Высокий достаток";
        }else{
            levelValue.textContent = "Произошла ошибка";
        }
    }
        else {
            daybudgetValue.textContent = "Произошла ошибка";
        }
    });

    incomeItem.addEventListener('input', function(){
        let items = incomeItem.value;
        appData.income = items.split(',');
        incomeValue.textContent = appData.income;

    });
    

    checkavings.addEventListener('click', function(){
        if (appData.savings == true){
            appData.savings = false;
        }else{
            appData.savings = true;
        }
    });

    
    sumValue.addEventListener('input',function(){
        if(appData.savings == true){
            let sum = +sumValue.value,
                percent = +percentValue.value;
            
            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }

        
    });

    percentValue.addEventListener('input',function(){
        if(appData.savings == true){
            let sum = +sumValue.value,
                percent = +percentValue.value;
            
            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }

        
    });
    startBtn.disabled = false;
    startBtn.addEventListener('click', function(){
        enableBtn ();
        
        time = prompt("Введите дату в формате YYYY-MM-DD", '');
        money = +prompt("Ваш бюджет на месяц?", '');
    
        while(isNaN(money) || money == "" || money == null) {
            money = +prompt("Ваш бюджет на месяц?", '');
        }
        appData.budget = money;
        appData.timeData = time;
        budgetValue.textContent = money.toFixed();
        yearValue.value = new Date(Date.parse(time)).getFullYear();
        monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
        dayValue.value = new Date(Date.parse(time)).getDate();
    });
 


    let appData = {
        budget: money,
        timeData : time,
        expenses : {},
        optionalExpenses :{},
        income : [],
        savings : false,
        
        chooseExpenses: function () {
            
        },
    
        detectLevel: function() {
            
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
           
            alert("Ежедневный бюджет: " + appData.MoneyPerDay + "руб.");
        },
      
        // chooseIncome: function () {
        //     for (let i=0;i<1;i++){
                
        //         if ((typeof(items)) === 'string' && (typeof(items) != null) && 
        //         (items != '')) {
                
        //         appData.income.push(prompt('Может что-то еще?'));
        //         appData.income.sort(); 
        //         }
        //     else{
        //     i--;
        //     };
            
        //     };
        // }
    };

        // let arr = [];
        // appData.income.forEach (function (item,i){
        //     arr [i] = (i+1 + ' Споcобы доп заработка: ' + item + '\n');
        // });
        // alert (arr);
        // console.log ('Наша программа включает в себя данные:');
        // for (let key in appData) {
        // console.log (key +'-' +appData[key]);
            
        
    
    
    // }



  


    
        
   
    


