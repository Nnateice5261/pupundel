var massive_vseh = []; // 3
for (j = -10;j<=30; j++){
    massive_vseh.push(j);
}
var massive_15 = [];
for (j = 0; j<= 15;j++){
    var item = massive_vseh[Math.floor(Math.random() * massive_vseh.length)];
    massive_15.push(item);
}
var sum_polozh = massive_15.reduce((proshlzhach, tekushznach, idx, array) => (array[idx] > 0) ? tekushznach+=proshlzhach : proshlzhach, 0);
var srednee_polozh = sum_polozh/15;
alert('Среднее арифметическое положительных чисел равно' + ' ' + srednee_polozh); 
var sum_otric = massive_15.reduce((proshlzhach, tekushznach, idx, array) => (array[idx] < 0) ? tekushznach+=proshlzhach : proshlzhach, 0);
var srednee_otric = sum_otric/15;
alert('Среднее арифметическое отрицательных чисел равно' + ' ' + srednee_otric); 
var num_zero = massive_15.filter((item) => item == 0);
alert('Число нулей равно' + ' ' + num_zero.length); 
var massive = ['red', 'black', 'white']; //4
    var result = [];
    while(result.length !== 1000000){
        result.push(massive[Math.floor(Math.random() * massive.length)]);
    }
    result = result.filter(item => item == 'red');
    alert('Красное выпадало' + ' ' + result.length + ' ' + 'раз');