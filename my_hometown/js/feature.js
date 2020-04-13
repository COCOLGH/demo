//////////////////////// 图片移动的js

// 保存定时器
var timer;

// 每执行一次计时器，图片移动的距离
var moveX = -500;

// 移到最后一张停止移动
function moveTranslate(obj, num) {
    timer = setInterval(function() {
        obj.css('transform', 'translate(' + moveX +'px)');
        moveX -= 500;           
        if (moveX == num) {
            clearInterval(timer)
        }
    }, 1000);
}


// 获取移动的对象 除夕
var translatebox = $('.CX');
moveTranslate(translatebox, -2000);



//////////////////////// 
