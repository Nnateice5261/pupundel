       secondname = 'полтавский'; //5
        var massive = [];
        var shiot = 1;
        for (j = 0; j < secondname.length; j++) {
            var pis = secondname.charAt(secondname.length-shiot);
            massive.push(pis);
            shiot++;
        } 
        var obratnoe = massive.join('');
        if (obratnoe == secondname){
            alert('Мое имя редкое, оно является полиндромом');
        }
        else {
            alert('Мое имя не полиндром(');
        }
        var num = 26; //6
        for (j = 1;j<=num;j++){
            alert(j);
        }