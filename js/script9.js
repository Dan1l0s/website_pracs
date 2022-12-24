function doRegistration() {
    var login = prompt('Логин');
    if (login == 'Админ') {
        var password = prompt('Пароль?');
        if (!password) {
            alert('Отменено');
        }
        else if (password == "Я главный") {
            alert("Здравстуйте!");
        }
        else {
            alert('Я вас не знаю');
        }
    }
    else {
        alert('Добро пожаловать');
    }
}

function askRegistration() {
    var r = confirm('Желаете пройти регистрацию на сайте?');
    if (r) {
        alert('Круто!');
        doRegistration();
    }
    else {
        alert('Попробуй ещё раз');
        askRegistration();
    }
}

askRegistration();

function add(element) {
    if (element.style.backgroundColor == 'red') {
        var elem = element.cloneNode(true);
        elem.style.position = 'absolute';
        elem.style.top = event.clientY + 'px';
        elem.style.left = event.clientX + 'px';
        elem.removeAttribute("id");
        div.appendChild(elem);
    }   
}

button1 = document.getElementById('heart1');
button1.style.backgroundColor = 'rgb(169, 169, 169)';
button1.onclick = function () {
    if (button1.style.backgroundColor == 'rgb(169, 169, 169)') {
        button1.style.backgroundColor = 'red';
        button1.style.borderColor = 'rgb(169, 169, 169)';

    }
    else {
        button1.style.backgroundColor = 'rgb(169, 169, 169)';
        button1.style.borderColor = 'rgb(128, 128, 128)';
    }

}

button2 = document.getElementById('heart2');
button2.style.backgroundColor = 'rgb(169, 169, 169)';
button2.onclick = function () {
    if (button2.style.backgroundColor == 'rgb(169, 169, 169)') {
        button2.style.backgroundColor = 'red';
        button2.style.borderColor = 'rgb(169, 169, 169)';
    }
    else {
        button2.style.backgroundColor = 'rgb(169, 169, 169)';
        button2.style.borderColor = 'rgb(128, 128, 128)';
    }

}
