        //1 и 2 задание, калькулятор со всеми арифм операциями
        var a = prompt("Введите число: ");
        a = parseInt(a);
        var b = prompt("Введите число: ");
        b = parseInt(b);
        var sum = 0;
        var raznost = 0;
        var chastnoe = 0;
        var proizv = 0;
        var ostatok = 0;
        var stepen = 0;
        var obj = {
            sum: (a + b) ,
            raznost: (a - b) ,
            chastnoe:  (a / b),
            proizv: (a * b) ,
            ostatok:  (a % b),
            stepen: (a ** b)
        };
        document.write('Сумма:'+ obj.sum+ ' ' +'Разность:'+obj.raznost+ ' ' +'Частное:'+obj.chastnoe+ ' ' +'Произведение:'+obj.proizv+ ' ' + 'Остаточное деление:'+obj.ostatok+ ' ' + 'Степень:'+obj.stepen);