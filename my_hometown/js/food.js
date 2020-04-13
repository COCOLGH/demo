////////////////////////////////// 展示龟苓膏图片的js代码

// 获取到需要展示图片的div
var picDiv = document.getElementsByClassName('GLGpic')[0];

// 获取到该图片
var pic = document.getElementById('pic');

function showGLG() {

    // 将图片展示出来，并将img标签变为块级元素，使图片居中
    picDiv.style.display = 'block';
    pic.style.display = 'block';
}

function myClose() {
    picDiv.style.display = 'none';
    pic.style.display = 'none';
}


////////////////////////////////// box6中所用到的js代码
var box6 = document.getElementsByClassName('box6')[0];
var p = document.getElementsByClassName('p')[0];

function hTranslate(num) {

    var hs = document.getElementsByClassName('h');

    for (var i = 0; i < hs.length; i++) {  
        hs[i].style.transform = 'translate(' + num + 'px)';
    }

}

// 鼠标移入事件
box6.onmouseenter = function() {
    hTranslate(355);
    p.style.transform = 'translateY(0px)';
}

// 鼠标移出事件
box6.onmouseleave = function() {

    hTranslate(0);
    p.style.transform = 'translateY(95px)';
    
}



////////////////////////////////// smallList 用到的的js

// 获取向左/右运动的点击对象
var toL = document.getElementsByClassName('left')[0];
var toR = document.getElementsByClassName('right')[0];

// 获取向左/右运动的运动对象
var obj = document.getElementsByClassName('smallListContent')[0];

// 使图片列表向左移动
toL.onclick = function() {
    console.dir(obj );
    toL.style.left = '10%';
    toR.style.display = 'block';
    obj.style.transform = 'translate(0px)';
}

// 使图片列表向右移动
toR.onclick = function() {
    toL.style.left = '20%';
    toR.style.display = 'none';
    obj.style.transform = 'translate(300px)';
    
}



// 右键菜单事件
var timer;

document.oncontextmenu = function (e) {
    console.dir(e)

    menuBox.style.display = "inline-block";

    menuBox.style.top = e.clientY + 'px';
    menuBox.style.left = e.clientX + 'px';

    // 连续右键，需要先清除之前的定时器，否则再右键时菜单显示时间会很短
    clearTimeout(timer);

    timer = setTimeout(function() {
        menuBox.style.display = "none";
    }, 5000);

    // 把网页默认的右键菜单隐藏起来，显示自己编写的右键菜单
    // 不写的话原有的会覆盖自己写的
    return false;
}

window.onclick = function() {
    clearTimeout(timer);
    menuBox.style.display = "none";
}
