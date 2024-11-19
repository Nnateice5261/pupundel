        otgadki = 0;
        zagadka1 = "Зимой и летом одним цветом";
        alert(zagadka1);
        otvet1 = "Ёлка";
        otvet = prompt('Введите ответ с большой буквы:');
        if (otvet == otvet1){
            alert('Правильный ответ!');
            otgadki++;
        }
        else {
            alert('Неправильно, как можно не отгадать?');
        }
        zagadka2 = "Два конца, два кольца, посредине гвоздик";
        alert(zagadka2);
        otvet1 = "Ножницы";
        otvet = prompt('Введите ответ с большой буквы:');
        if (otvet == otvet1){
            alert('Правильный ответ!');
            otgadki++;
        }
        else {
            alert('Неправильно, как можно не отгадать?'); 
        }
        alert('Вы отгадали' + ' ' + otgadki + ' ' + 'раз');