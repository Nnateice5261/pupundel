let user = { //1. создается обьект user 
    name: "Джон", // добавляется ключ name и значение Джон
    age: 30 // добавляется ключ age и значение 30 
} 
user.sayHi = function(){  // в объект user добавляется метод sayHi через точечную нотацию
    alert("Привет!"); // метод выполняет команду alert('Привет')
}
let users = {
    number: 79621580800,
    name: "Slava",
    email: "poltawcki1mailru",
    provaider: "tele2",
    gorod: "Moscow"
}
document.write(users.name,' ', users.email,' ', users.number); //2.
let orders = { // 3.
    meal: 'steak',
    cost: 2000,
    gorod: 'Moscow',
    type_pay: 'cardSber'
}
let restaraunts = {
    name: "Clod Monet",
    gorod: 'Moscow',
    type_meal: 50,
    zvezdi_mishlen: 5
}
if (users.gorod == restaraunts.gorod){
    alert('Город заказа:' + ' ' + orders.gorod);
}
class User{ // 4, 5
    constructor(name){
    this.name = name;
    this.isAdmin = false;
    }
    nashiNames(){
        alert(this.name);
    }
}
let darova = new User("Слава");
darova.nashiNames();