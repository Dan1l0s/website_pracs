var list = document.getElementById('list');
var pic = document.getElementById('pic')

function addToList() {
    let elem = prompt('Введите следующий элемент');
    while (elem!==null && elem!=='' &&   checkStr(elem)) {
        list.insertAdjacentHTML('beforeend', '<li><pre>'+elem+'</pre></li>');
        elem = prompt('Введите следующий элемент');
    }
}

function checkStr(str) {
    let count = 0;
    for (let i = 0; i<str.length; i++) {
        if (str[i]==' ') count++;
    }
    return count !== str.length;
}


function showPicture() {
    let w = prompt('Введите ширину картинки в px');
    let h = prompt('Введите высоты картинки в px');
    if (w!=Number(w) || w===null || w==='' || w == 0 || h!=Number(h) || h == 0 ||  h===null || h==='') {
        alert("Некорректные введенные данные");
        return;
    }
    pic.setAttribute("width", w);
    pic.setAttribute("height", h);
    pic.style.visibility = "visible";
    pic.style.left = (window.innerWidth - w)/2 + "px";
    pic.style.top = (window.innerHeight - h)/2 + "px";
    pic.style.position = "absolute";
}
function showCoordinates() {
    alert('x:'+event.clientX+', y:'+event.clientY);
}

var href = document.getElementById('href');
    href.style.color = "red";


function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

var elem = document.getElementById('messages');
var elemNum = document.getElementById('number-of-messages');
var i = 0;
function showNotification(options) {
    i++;
    let elemNew = document.createElement('p');
    elemNew.innerHTML = options + '<img src="pic/cross.png" class="cross">';
    elem.appendChild(elemNew);

    elemNum.innerHTML = i;

    setTimeout(deleteNotification, 1500, elemNew);
}

function deleteNotification(element) {
    if (element.parentNode == elem) {
        element.remove();
        delete element;
        i--;
        elemNum.innerHTML = i;
    }
}

const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
function generate_word() {
    let result = "";
    for (let i = 0; i < 10; i++) {
        result += symbols[Math.floor(Math.random() * (symbols.length))];
    }
    return result;
}


function createNotifications() {
     let options = generate_word();
     showNotification(options);
}
setInterval(createNotifications, 3000);



messages.onclick = function(event) {
    let target = event.target;
    if (target.className != 'cross') return;
    deleteNotification(target.parentNode);
}