var a = prompt("Введите число: "); // 1.
operator = prompt('Введите оператор(+, -, *, **, /, %):');
var b = prompt("Введите число: ");
var otvet = a + operator + b;
otvet = eval(otvet);
alert(otvet);
alert('Ответьте на загадки:'); // 2.
var test1 = prompt('Сто одёжек, и все без застёжек.');
var otvet1 = 'Капуста';
var test2 = prompt('Летом серый, а зимой белый.');
var otvet2 = 'Заяц';
var otgadki = 0;
var ourFunc = function(){
    if(test1 == otvet1){
        alert('Вы угадали первую загадку');
        otgadki++;
    }
    else {
        alert('Ответ неверный');
    }
    if (test2 == otvet2){
        alert('Вы угадали вторую загадку');
        otgadki++;
    }
    else{
        alert('Ответ неверный');
    }
    alert('Вы отгадали ' + otgadki + ' раз')
}
ourFunc();
var Polindrom = () =>{ //3.
    var massive = [];
    var shiot = 1;
    var secondName = 'полтавский'
    for (j = 0; j < this.name.length; j++) {
        var pis = this.name.charAt(this.name.length-shiot);
        massive.push(pis);
        shiot++;
    }
    var obratnoe = massive.join('');
    if (obratnoe == secondName){
        alert('Ваша фамилия полиндром');
    }
    else {
        alert('Ваша фамилия не полиндром');
    }
}
Polindrom();
var massive_vseh = []; // 4.
for (j = -10;j<=30; j++){
    massive_vseh.push(j);
}
var massive_15 = [];
for (j = 0; j<= 15;j++){
    var item = massive_vseh[Math.floor(Math.random() * massive_vseh.length)];
    massive_15.push(item);
}
var sum = massive_15.reduce((proshlzhach, tekushznach, idx, array) => tekushznach+=proshlzhach, 0);
var srednee = sum / massive_15.length;
alert('Среднее арифметическое равно' + ' ' + srednee); 
const NewYearDate = new Date('2025-01-01T00:00:00'); //5.
var NewYear = () => {
    const ourTime = new Date();
    const difference = NewYearDate - ourTime;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    document.getElementById("days").innerText = days;
  
    if (difference < 0) {
        document.getElementById("timer").innerText = "The event has started!";
    }
}
NewYear(); //6.
var pustoy;
var pustaya = () => pustoy;
alert(pustaya());
var massive_vseh = []; // 7.
for (j = -10;j<=30; j++){
    massive_vseh.push(j);
}
var massive_15 = [];
for (j = 0; j<= 15;j++){
    var item = massive_vseh[Math.floor(Math.random() * massive_vseh.length)];
    massive_15.push(item);
}
var sum = massive_15.reduce((proshloe,tekushee)=> proshloe + tekushee, 0);
var chetnye = massive_15.filter((item,idx,array) => (item % 2) == 0);
var umnozhen = massive_15.map((item,idx,array)=> item * 2);
alert(sum);
alert(chetnye);
alert(umnozhen);
const emails = [
    "john.doe@example.com",
    "jane.smith@example.com",
    "robert.jones@example.com",
    "mary.wilson@example.com",
    "david.brown@example.com",
];
        const emailsList = document.getElementById("emails");
        const filterInput = document.getElementById("filterInput");

        function displayEmails() {
            emailsList.innerHTML = ""; 
            const filteredEmails = emails.filter(email => {
                const name = email.split("@")[0]; 
                return name.includes(filterInput.value.toLowerCase()); 
            });

            filteredEmails.forEach(email => {
                const listItem = document.createElement("li");
                listItem.textContent = email;
                emailsList.appendChild(listItem);
            });
        }

        displayEmails();

        filterInput.addEventListener("input", displayEmails);