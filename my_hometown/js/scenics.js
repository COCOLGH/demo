
//   西江美图
function choose(index) {
	var divs = document.getElementsByClassName('scenseXJ');
	divs[index].style.display = 'block';
	for (var i = 0; i < divs.length; i++) {
		if(i != index) {
			divs[i].style.display = 'none';
		}
	}
}



// 苍海湖景点
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
	if(num == 7){
		num = 1;
	}
	img.src = "../images/scenics/CHH" + num + ".jpg";
},1500)


// 上一张
toLeft.onclick = function () {
	num--;
	if(num == 1){
		num = 7;
	}
	img.src = "../images/scenics/CHH" + num + ".jpg";
}

// 下一张
toRight.onclick = function () {
	num++;
	if(num == 7){
		num = 1;
	}
	img.src = "../images/scenics/CHH" + num + ".jpg";
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
		if(num == 7){
			num = 1;
		}
		img.src = "../images/scenics/CHH" + num + ".jpg";
	},1500)
}
toLeft.onmouseleave = function() {
	timer = setInterval(function () {
		num++;
		if(num == 7){
			num = 1;
		}
		img.src = "../images/scenics/CHH" + num + ".jpg";
	},1500)
}



// 评论样式
//初始化数据
var arr = [
	{id:1,img:"../images/scenics/tx3.jpg",replyName:"小小序",beReplyName:"匿名",content:"苍海湖挺不错的，还有夜晚灯光秀看",time:"2019-12-29 11:42:53",address:"深圳",osname:"",browse:"谷歌",replyBody:[]},
	{id:2,img:"../images/scenics/tx2.jpg",replyName:"匿名",beReplyName:"",content:"玫瑰湖既可以玩又可以看美景，不错不错",time:"2019-12-30 11:42:53",address:"广西",osname:"",browse:"火狐",replyBody:[{id:3,img:"",replyName:"维尼",beReplyName:"匿名",content:"对呀，就是少了点吃的",time:"2017-10-17 11:42:53",address:"",osname:"",browse:"谷歌"}]},
	{id:3,img:"../images/scenics/tx1.jpg",replyName:"维尼",beReplyName:"匿名",content:"骑楼城很有梧州特色呢，美食巨多",time:"2017-10-17 11:42:53",address:"深圳",osname:"win10",browse:"IE",replyBody:[]}
];
$(function(){
	$(".comment-list").addCommentList({data:arr,add:""});
	$("#comment").click(function(){
		var obj = new Object();
		obj.img="../images/scenics/tx4.jpg";
		obj.replyName="匿名";
		obj.content=$("#content").val();
		obj.browse="广西";
		obj.osname="win10";
		obj.replyBody="";
		$(".comment-list").addCommentList({data:[],add:obj});
	});
})