$(function () {
	$('#year').val('2020');
	$('#month').val('1');
	$('#day').val('25');
	$('#Tyear').text('2020');
	$('#Tmonth').text('1');
	$('#Tday').text('25');

	$('.in').blur(function() {
		var y = $('#year').val();
		var m = $('#month').val();
		var d = $('#day').val();

		$('#Tyear').text(y);
		$('#Tmonth').text(m);
		$('#Tday').text(d);
	})



	var tm = null;
	
	//开始倒计时 
	$('#start').click(function() {
		tm = setInterval(upDateTime,1000);
		upDateTime();
	})

	function upDateTime() {
		// 获取目标时间
		var target_y = $('#Tyear').text();
		var target_m = $('#Tmonth').text() - 1;
		var target_d = $('#Tday').text();

		var target_date = new Date(target_y,target_m,target_d);
		var now_date = new Date();

		// 求出时间差getTime()
		var i_Time = (target_date.getTime() - now_date.getTime())/1000;
		// 判断时间是否过期
		if(i_Time <= 0) {
			alert("时间已过！");
			i_Time = 0;
			// if语句的作用是不让过期的时间进行倒计时
			if(tm != null) {
				clearInterval(tm);
			}
			return i_Time;
		}

		// 及那个秒转化为xx天xx小时xx分xx秒
		var iDay = parseInt(i_Time/(24*60*60));	
		i_Time = i_Time % (24 * 60 *60);
		// 小时
		var iHour = parseInt(i_Time/(60*60));
		i_Time = i_Time % (60 * 60);
		// 分
		var iMin = parseInt(i_Time/60);
		i_Time = i_Time % 60;
		// 秒
		var iSec = parseInt(i_Time);

		// 更新时间
		$('#iDay').text(fillZero(iDay,3));
		$('#iHour').text(fillZero(iHour,2));
		$('#iMin').text(fillZero(iMin,2));
		$('#iSec').text(fillZero(iSec,2));
		// 补0
		function fillZero(num,digit) {
			num = '' + num;
			while(num.length < digit) {
				num = '0' + num;
			}
			return num;
		}
	}


	// 停止倒计时
	$('#stop').click(function() {
		clearInterval(tm);
		tm = null;
	})


	// 让开始和停止倒计时的花转动
	var s1Floor = document.getElementById('start');
	var s2Floor = document.getElementById('stop');

	var num = 0;

	setInterval(function() {
		num++;
		s1Floor.style.transform = 'rotate(' + num + 'deg)';
		s2Floor.style.transform = 'rotate(' + num + 'deg)';
	}, 10);
})