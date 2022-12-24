const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
function generate_word() {
    let result = "";
    for (let i = 0; i < 6; i++) {
        result += symbols[Math.floor(Math.random() * (symbols.length))];
    }
    return result;
}
function isEmpty(strIn)
{
    if (strIn == undefined)
    {
        return true;
    }
    else if(strIn == "")
    {
        return true;
    }
    else
    {
        return false;
    }
}


var send_form = document.getElementById('submit');
send_form.onclick = function(){
    let kapcha = generate_word();
    let result = prompt('Введите символы ' + kapcha);
    if (result === kapcha) {}
    else{
        if (isEmpty(result)) {
            alert('Вы ничего не ввели, попробуйте еще раз');
        }
        let num1, num2;
        do {
            num1 = Math.ceil(Math.random() * 100);
            num2 = Math.ceil(Math.random() * 100);
            result = prompt('Вычислите сумму чисел ' + num1 + ' + ' + num2);
            if (isEmpty(result)){
                alert('Вы ничего не ввели, попробуйте еще раз');
            }
            result = Number(result);
        } while (result != num1 + num2);
    }
    alert('Да');
}


function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        result = parseInt(prompt('Количество элементов'));
        for (let i = 0; i < result; ++i)
        {
            let number = +prompt('Элемент под номером ' + (i + 1));
            number = Number(number);
            if (number == number) {
                this.value += number;
            }

        }
    };
}
var trash = document.getElementById("trash");
var accumulator = new Accumulator(0);
trash.onclick = function()
{
    accumulator.read(i);
    alert('В корзине элементов на сумму ' + accumulator.value);
}

function truncate(str, maxlength) {
    if (str.length > maxlength){
        str = str.slice(0, maxlength - 1 ) + "...";
    }
    return str;
}
var name_ate = document.getElementsByClassName('glass-legend-txt');
    for (i=0; i < name_ate.length; i++){
        name_ate[i].textContent = truncate(name_ate[i].textContent, 12);
    }

