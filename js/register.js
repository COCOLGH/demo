////////////////////////// <!--实时获取窗口大小，方便调整布局样式-->
var Width = $(window).width();
// console.log(Width);
$(window).resize(function() {
    Width = $(window).width();
    // console.log(Width);
})


// 获取菜单列表
var menuList = document.getElementsByClassName('menuList')[0];
// 获取菜单头部
var topnav = document.getElementsByClassName('topnav')[0];
// 获取菜单底部
var bottomDiv = document.getElementsByClassName('bottom')[0];
// 获取右侧/下方主体内容部分
var rightContent = document.getElementsByClassName('right')[0]; 
// 获取底部菜单
var bottomMenu = document.getElementsByClassName('bottomMenu')[0];
//获取“下载星巴克app”的图片
var updImg = document.getElementsByClassName('updImg')[0];

// 展示菜单列表的函数定义
function show() {

    if ( (Width >= 1008) ) {
        menuList.style.display = 'block';
        topnav.style.display = 'none';
        bottomDiv.style.display = 'none';

    }else if ( (Width >= 623) && (Width <= 1007) ){

        menuList.style.display = 'block';
        topnav.style.display = 'none';
        bottomDiv.style.display = 'none';
        rightContent.style.display = 'none';
        bottomMenu.style.display = 'none';
        updImg.style.display = 'none';

    }else {
        menuList.style.display = 'block';
        bottomDiv.style.display = 'none';
        rightContent.style.display = 'none';
        bottomMenu.style.display = 'none';
        updImg.style.display = 'none';
    }
}

// 隐藏菜单列表的函数定义
function menuClosed() {

    if ( (Width >= 1008) ) {

        menuList.style.display = 'none';
        topnav.style.display = 'block';
        bottomDiv.style.display = 'block';

    }else if ( (Width > 623) && (Width <= 1007) ){

        menuList.style.display = 'none';
        topnav.style.display = 'block';
        bottomDiv.style.display = 'block';
        rightContent.style.display = 'block';
        updImg.style.display = 'block';

    }else {
        menuList.style.display = 'none';
        bottomDiv.style.display = 'block';
        rightContent.style.display = 'block';
        bottomMenu.style.display = 'block';
        updImg.style.display = 'block';
    }
}
