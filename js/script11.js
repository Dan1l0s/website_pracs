var arr = [];
var arr_new = [];
var cart = document.getElementById('cart');

//localStorage.clear();
update_array();
make_cart();

function make_cart() {
    if (cart !== null) {
        cart.innerHTML ='';
        let totalPrice = 0;
        let className = 'cart-item';
        for (let elem of arr) {
            if (arr_new.indexOf(elem, 0)!=-1) {
                className = 'cart-item-temp';
            }
            cart.insertAdjacentHTML('beforeend', '<div class="'+className+'"><p>Товар №'+elem.id+'</p>'+
            '<p>'+elem.price*elem.count+
            ' p.</p><button onclick="decrease('+elem.id+')">-</button>'+elem.count+
            '<button onclick="increase('+elem.id+')">+</button>'+
            '<button onclick="deleteItem('+elem.id+')"><img height="10px" src="pic/trash.png"></button></div>');
            totalPrice += elem.price*elem.count;
            className = 'cart-item';
        }
        if (totalPrice == 0) {
            cart.insertAdjacentHTML('beforeend', '<p>Пусто</p>')
        }
        else {
            cart.insertAdjacentHTML('beforeend', '<p>Полная стоимость: '+totalPrice+'</p>'+
            '<button onclick="sort_array()">Отсортировать товары по количеству в заказе</button><br>'+
            '<button onclick="sub_array()">Выбрать элементы с количеством от а до b</button><br>'+
            '<button onclick="sub_array_clear()">Отменить выбор элементов</button><br>');
        }
    }
}
function deleteItem(id) {
    if (confirm("Вы точно хотите удалить?")) {
        let index = 0;
        for (let elem of arr) {
            if (elem.id == id) {
                arr.splice(index, 1);
            }
            index++;
        }
    }
    make_cart();
    update_storage();
}
function increase(id) {
    let elem = arr.find(item => item.id==id);
    elem.count++;
    make_cart();
    update_storage();
}
function decrease(id) {
    let elem = arr.find(item => item.id==id);
    elem.count--;
    if (elem.count == 0) {
        deleteItem(id);
    }
    make_cart();
    update_storage();
}

function add(id, price) {
    let elem = arr.find(item => item.id==id);
    if (elem === undefined) {
        let elem_to_add = {
            id: id,
            price: price,
            count: 1,
        }
        arr.push(elem_to_add);
    }
    else {
        elem.count++;
    }
    alert("Товар добавлен в корзину");
    make_cart();
    update_storage();
}




function update_array() {
    arr = [];
    for (let i = 0; i<localStorage.length; i++) {
        arr.push(JSON.parse(localStorage.getItem(i)));
    }
}
function update_storage() {
    localStorage.clear();
    let i = 0;
    for (let elem of arr) {
        localStorage.setItem(i, JSON.stringify(elem));
        i++;
    }
}

function compare(a, b) {
    if (a.count > b.count) return -1;
    else return 1;
}
function sort_array() {
    arr.sort(compare);
    make_cart();
    update_storage();
}
function sub_array() {
    let a = prompt("Введите а");
    if (a.length!=0)
        a = Number(a);
    while (a!=a | a==''){
        a = prompt("Пожалуйста, введите а");
        a = Number(a);

    }
    let b = prompt("Введите b");
    if (b.length!=0)
        b = Number(b);
    while (b!=b | b==''){
        b = prompt("Пожалуйста, введите b");
        b = Number(b);

    }
    arr_new = [];
    for (elem of arr) {
        if (elem.count>=a & elem.count<=b) {
            arr_new.push(elem);
        }
    }

    make_cart();
}
function sub_array_clear() {
    arr_new = [];
    make_cart();
}



var i = 1;
function makeMessage() {
    i++;
    let elem = document.getElementById('messages');
    elem.innerHTML = '<p style="margin:10px">'+i+'-ое сообщение</p>';
    elem = document.getElementById('number-of-messages');
    elem.innerHTML = i;
}
function stopMessage() {
    clearInterval(timer);
    setTimeout(delay, 5000);
}
function delay() {
    timer = setInterval(makeMessage, 1000);
}

var timer = setInterval(makeMessage, 1000);





