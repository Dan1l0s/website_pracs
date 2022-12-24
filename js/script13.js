contents.onclick = function(event) {
    let target = event.target;
    while (target.tagName!='A' && target.id!='contents') {
        target = target.parentNode;
    }
    //alert(target.tagName);
    if (target.tagName=='A') {
        if (confirm('Вы точно хотите покинуть страницу?')) return true;
        else return false;
    }
}

var selected_pic = document.getElementById('1');
selected_pic.classList.add('highlighted');
gallery_sub.onclick = function(event) {
    let target = event.target;
    if (target.className == 'pic-sub') {
        let x = (-100) * (target.id-1);
        gallery_main.style.transform = 'translateX('+x+'%)';
        highlight_pic(target);
    }
}

function highlight_pic(elem) {
    if (elem==selected_pic) return;
    elem.classList.add('highlighted');
    selected_pic.classList.remove('highlighted');
    selected_pic = elem;
}

var selected_items = [];
list.onclick = function(event) {
    let target = event.target;
    while (target.className!='item' && target.id!='list') {
        target = target.parentNode;
    }
    if (target.className!='item') {
        highlight_items(false);
        selected_items = [];
        return;
    }


    if (event.ctrlKey) {
        let k = selected_items.indexOf(target);
        if (k==-1) {
            selected_items.push(target);
        }
        else {
            highlight_items(false);
            selected_items.splice(k, 1);
        }
    }
    else {
        let k = selected_items.indexOf(target);
        if (k==-1) {
            highlight_items(false);
            selected_items = [target];
        }
        else {
            highlight_items(false);
            selected_items = [];
        }
    }
    highlight_items();
}
function highlight_items(b=true) {
    for (elem of selected_items) {
        if (b) {
            elem.style.background = 'lightskyblue';
            elem.onmousedown = onmousedowncart;
        }
        else {
            elem.style.background = 'darkgray';
            elem.onmousedown = null;
        }

    }


}


var slider = document.getElementById('slider');
var elRect = slider.getBoundingClientRect();
var leftMin = elRect.right - slider.offsetWidth;
var leftMax = elRect.right;



var sl = document.getElementById('slider_item');
sl.onmousedown = function(e) {
    moveAt(e);
    sl.style.zIndex = 1000;

    function moveAt(e) {
        if (e.pageX < leftMin) {
             sl.style.left = 0 + 'px';
        }
        else if (e.pageX > leftMax) {
            sl.style.left = slider.offsetWidth - 20 + 'px';
        }
        else {
            sl.style.left = e.pageX - sl.offsetWidth / 2  - leftMin + 'px';
        }
    }
    document.onmousemove = function(e) {
        moveAt(e);
    }
    sl.onmouseup = function() {
        document.onmousemove = null;
        sl.onmouseup = null;
    }
}
sl.ondragstart = function() {
    return false;
};


document.body.onmousedown = function() {
    return false;
}


var count = 0;


function onmousedowncart(e) {
    let target = event.target;
    while (target.className!='item' && target.id!='list') {
        target = target.parentNode;
    }
    let el = target.getBoundingClientRect();
    let a = [];
    for (elem of selected_items) {
        let elTemp = elem.getBoundingClientRect();
        a.push({"item":elem, "top":-el.top+elTemp.top});
    }
    for (elem of selected_items) {
        elem.style.position = 'absolute';
    }


    var b = false;

    moveAtB(e);

    function moveAtB(e) {
        for (elem of a) {
            elem.item.style.top = e.pageY - sl.offsetHeight / 2 + elem.top + 'px';
            elem.item.style.left = e.pageX - sl.offsetHeight / 2 + 'px';
        }
    }
    document.onmousemove = function(e) {
        moveAtB(e);
    }
    target.onmouseup = function() {
        let b = checkCart(event);
        for (elem of a) {
            elem.item.style.position = 'relative';
            elem.item.style.left = 0;
            elem.item.style.top = 0;
            elem.item.onmouseup = null;
            elem.item.onmousedown = null;
            if (b)
                count += Number(getPrice(elem.item));
        }
        if (b) {
            document.getElementById('cost').innerHTML = count + ' p.';
        }
        document.onmousemove = null;
    }
    target.ondragstart = function() {
        return false;
    };
}

function checkCart(e) {
    let cart = document.getElementById('cart');
    let el = cart.getBoundingClientRect();
    let maxx = el.right + 50;
    let minx = el.right - cart.offsetWidth - 50;
    let maxy = el.bottom + 50;
    let miny = el.bottom - cart.offsetHeight - 50;
    return (e.clientX > minx && e.clientX < maxx && e.clientY > miny && e.clientY < maxy);

}


function getPrice(elem) {
    let ar = elem.childNodes;
    for (elem of ar) {
        if (elem.className=='cost') {
            return elem.innerHTML.slice(0,elem.innerHTML.length - 2);
        }
    }
}

var anim1 = document.getElementById('anim1');
var anim2 = document.getElementById('anim2');
anim1.onclick = function() {
    if (anim1.style.width!=='100%'){
        animate({
            duration: 4000,
            timing: function(timeFraction) {
                return timeFraction;
            },
            draw: function(progress) {
                if (progress < 0.7)
                    anim1.style.marginLeft = progress*500 + 'px';
                else {
                    anim1.style.width = (progress)*100 + '%';
                    anim1.style.marginLeft = (1-progress)*500 + 'px';
                }
            }
        });
    }
    else {
       animate({
           duration: 2000,
           timing: function(timeFraction) {
               return timeFraction;
           },
           draw: function(progress) {
                if (progress < 0.5) {
                    anim1.style.marginLeft = progress*500 + 'px';
                    anim1.style.width = (0.5 - progress)*100 + '%';
                    }
                else {
                    anim1.style.marginLeft = (1-progress)*500 + 'px';
                }
           }
       });
    }
};
anim2.onclick = function() {
    animate({
        duration: 3000,
        timing: function(timeFraction) {
            return timeFraction;
        },
        draw: function(progress) {
            if (progress < 0.3)
                anim2.style.width = progress*200 + 'px';
            else if (progress<0.8) {
                anim2.style.width = (0.8-progress)*100 + '%';
            }
            else if (progress<0.9) {
                anim2.style.marginLeft = 47 + '%';
            }
            else {
                anim2.style.marginLeft = 50 + '%';
            }
        }
    });
};


function animate({duration, draw, timing}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = timing(timeFraction)

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}





