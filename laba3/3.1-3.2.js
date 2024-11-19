var massive_vseh = []; // 1
for (j = -10;j<=30; j++){
    massive_vseh.push(j);
}
var massive_15 = [];
for (j = 0; j<= 15;j++){
    var item = massive_vseh[Math.floor(Math.random() * massive_vseh.length)];
    massive_15.push(item);
}
var sum = massive_15.reduce((proshlzhach, tekushznach, idx, array) => (array[idx] > 0) ? tekushznach+=proshlzhach : proshlzhach, 0);
var srednee = sum / massive_15.length;
alert('Среднее арифметическое положительных чисел равно' + ' ' + srednee); 
for (j = 0;j < massive_15.length;j++){ // 2
    item = massive_15[j];
    if (item < 0){
        massive_15[j] = item * item;
    }
}