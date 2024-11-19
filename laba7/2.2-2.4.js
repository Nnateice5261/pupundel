        alert('Считалочка!');//2
        for (j = 1;j < 11;j++){
            alert(j);
        }
        var num = 0; //3
        while (num !== 1){
            alert('Ну, еще по одной?')
            num = parseInt(prompt('не вводи 1, проведи хороший вечер'));
        }
        var number = 26; //4
        var multiply = 1;
        for (j = 1;j< number; j++){
            multiply *= j;
        }
        alert('Факториал числа' + ' ' + num + ' ' + 'равен' + ' ' + multiply);