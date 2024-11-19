// 3 задание
var zadum = prompt("Введите задуманное число: ");
zadum = parseInt(zadum);
alert("Умножьте задуманное число на 2 и прибавьте 7");
var res = zadum * 2 + 7;
var res2 = prompt("Введите результат:");
res2 = parseInt(res2);
if (res2 == res){
    alert("Вы хорошо считаете! Ваш результат: " + res + " Ваше задуманное число: " + zadum);
}
else {
    alert("Вы неправы :( . Правильный результат: " + res + " Ваше задуманное число: " + zadum);
}
var name = prompt("Введите ваше имя: ");
var data = prompt("Введите ваш год рождения: ");
data = parseInt(data);
vozrast = 2024 - data;
document.write(name+":"+vozrast);