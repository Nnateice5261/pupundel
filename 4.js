function showMessage() { // создание функции showMessage // 1.
    let message = "Привет, я JavaScript!"; // локальная переменная
    
    alert( message ); // Вывод переменной message
    proverka(message);
    }
showMessage(); // Привет, я JavaScript! // вызов функции 
function proverka(message){ //2.
    var massive = [];
    var shiot = 1;
    for (j = 0; j < message.length; j++) {
        var pis = message.charAt(message.length-shiot);
        massive.push(pis);
        shiot++;
    } 
    var obratnoe = massive.join('');
    if (obratnoe == message){
        alert('Мое имя редкое, оно является полиндромом');
    }
    else {
        alert('Мое имя не полиндром(');
    }
}
function zamena(){
    var massive_vseh = []; // 3.
    for (j = -10;j<=30; j++){
        massive_vseh.push(j);
    }
    var massive_15 = [];
    for (j = 0; j<= 15;j++){
        var item = massive_vseh[Math.floor(Math.random() * massive_vseh.length)];
        massive_15.push(item);
    }
        for (j = 0;j < massive_15.length;j++){ 
            item = massive_15[j];
            if (item < 0){
                massive_15[j] = item * item;
            }
        }
        document.write(massive_15);
    }
zamena();
class User{ // 4.
    constructor(name){
        this.name = name;
    }
    vivod(){
        alert(this.name);
    }
}
var user = new User('Вячеслав');
user.vivod();
class Message{ // 5.
    constructor(username){
        this.username = 'Дарова, ' +username;
        this.vivod();
    }
    vivod(){
        alert(this.username);
    }
}
var message = new Message('Васёк');
class ObrName{
    constructor(name){
        this.name = name;
        this.Obratnoe();
    }
    Obratnoe(){
        var massive = [];
        var shiot = 1;
        for (j = 0; j < this.name.length; j++) {
            var pis = this.name.charAt(this.name.length-shiot);
            massive.push(pis);
            shiot++;
        } 
        var obratnoe = massive.join('');
        alert(obratnoe);
    }
}
var obrname = new ObrName('Славянчик');