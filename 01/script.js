var money=+prompt("Ваш бюджет на месяц?", ""),
    time=prompt("Введите дату в формате YYYY-MM-DD", "");

var appData={budget: money,
    timedate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false};
    alert(appData);
for(var i=1;i<=2;i++){
    var q=prompt("Введите обязательную статью расходов в этом месяце", '');
    var a=prompt("Во сколько обойдется?", '');
    appData.expenses.q=a;
}
alert(appData.budget/30);
// console.log(money);
// console.log(time);