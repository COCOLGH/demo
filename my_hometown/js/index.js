// 轮播图 js代码
var mycarousel = document.getElementsByClassName("mycarousel")[0];

var img = document.getElementsByClassName('carousel')[0];

var toLeft = document.getElementsByClassName('toLeft')[0];
var toRight = document.getElementsByClassName('toRight')[0];

var num = 1;
var timer;

// 自动换图
timer = setInterval(function () {
	num++;
	if(num == 8){
		num = 1;
	}
	img.src = "../images/carousel/" + num + ".jpg";
},1500)


// 上一张
toLeft.onclick = function () {
	num--;
	if(num == 1){
		num = 8;
	}
	img.src = "../images/carousel/" + num + ".jpg";
}

// 下一张
toRight.onclick = function () {
	num++;
	if(num == 8){
		num = 1;
	}
	img.src = "../images/carousel/" + num + ".jpg";
}

// 鼠标移入轮播图div时，清楚计时器
toRight.onmouseenter = function() {
	clearInterval(timer);
}
toLeft.onmouseenter = function() {
	clearInterval(timer);
}

// 鼠标移出时，重新启动计时器
toRight.onmouseleave = function() {
	timer = setInterval(function () {
		num++;
		if(num == 8){
			num = 1;
		}
		img.src = "../images/carousel/" + num + ".jpg";
	},1500)
}
toLeft.onmouseleave = function() {
	timer = setInterval(function () {
		num++;
		if(num == 8){
			num = 1;
		}
		img.src = "../images/carousel/" + num + ".jpg";
	},1500)
}





