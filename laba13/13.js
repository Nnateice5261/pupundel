let id1 = Symbol("id"); // 1
const client_bank = {
    name: 'Vyacheslave',
    [id1]: 12
}
let id2 = Symbol("id");
const worker_hospital = {
    name: 'Slave',
    [id2]: 24
}
let id3 = Symbol("id");
const citizen_RF = {
    name: 'Slavka',
    [id3]: 36
}
alert(client_bank[id1].toString());

const number = Number(prompt('Загадайте цифру до 9', '')); //2
switch(number){
  case 1 :
    alert('Вы ввели число 1');
    break;
  case 2 :
    alert('Вы ввели число 2');
    break;
  case 3 :
    alert('Вы ввели число 3');
    break;
  case 4 :
    alert('Вы ввели число 4');
    break;
  case 5 :
    alert('Вы ввели число 5');
    break;
  case 6 :
    alert('Вы ввели число 6');
    break;
  case 7 :
    alert('Вы ввели число 7');
    break;
  case  8: case 9:
    alert('Вы ввели число 8, а может и 9');
    break;
  default:
    alert('Вы ввели не число или ваше число не попадает в наш диапазон');
}
let min = Math.floor(Math.random() * 59);
alert('min = ' + min);
    switch(true){
        case min <= 14:
            alert('Ваше число попадает в 1 четверть часа');
            break;
        case min <= 29:
            alert('Ваше число попадает в 2 четверть часа'); 
            break;
        case min <= 44:
            alert('Ваше число попадает в 3 четверть часа');
            break;
        case min <= 59:
            alert('Ваше число попадает в 4 четверть часа');
            break;
    }

const strOfNum = '152663751324';
alert('Наша строка: ' + strOfNum);
const firstLetter = strOfNum.charAt(0);
if (firstLetter == 1 && firstLetter == 2 && firstLetter == 3){
    alert('Первая цифра 1, 2 или 3');
}
else{
    alert('нет');
}
const myNumber = prompt('Введите ваш номер телефона:');
alert(myNumber);
