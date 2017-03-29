//下拦菜单动效
$(".erjibox").slideUp(0);
$(".headerbuttonbox").hover(function(){
	$(".erjibox").stop(true,true);
		var index=$(this).index(".headerbuttonbox");
		$(".erjibox").eq(index).slideDown(500);
	},function(){
	$(".erjibox").stop(true,true);
		var index=$(this).index(".headerbuttonbox");
		$(".erjibox").eq(index).slideUp(500);
	});
/************************************************/
//baner动效
$(".bannerbox>a").fadeOut(0).eq(0).fadeIn(0)
var num=0;
	function move(){
		num++;
		if(num>=$(".bannerbox>a").size()){
			num=0;
		}
		$(".bannerbox>a").fadeOut(600).eq(num).fadeIn(600);
	}
var t=setInterval(move,3000);
$(".bannerbox").mouseover(function(){
	clearInterval(t);
});
$(".bannerbox").mouseout(function(){
	t=setInterval(move,3000);
});
/************************************************/
//跑马灯动效
$(".imgsmallbox:first").animate({width:0},1000);
	function moveLeft(){
		$(".imgsmallbox:last").after($(".imgsmallbox:first"))
		$(".imgsmallbox:first").animate({width:0},1000)
		$(".imgsmallbox:last").animate({width:150},1000)
	}
var t1=setInterval(moveLeft,2000);
$(".imgbox").mouseover(function(){
	clearInterval(t1);
});
$(".imgbox").mouseout(function(){
	t1=setInterval(moveLeft,2000);
});
/************************************************/
//多选框
$(".aa").hover(function(){
	$(".bb").stop(true,true);
		var index=$(this).index(".aa");
		$(".bb").eq(index).css({"display":"block"});
	},function(){
	$(".bb").stop(true,true);
		var index=$(this).index(".aa");
		$(".bb").eq(index).css({"display":"none"});
	});
/************************************************/
//二级网页跑马灯动效
$(".anlibox>li>a:first").animate({height:0},1000);
	function moveUp(){
		$(".anlibox>li>a:last").after($(".anlibox>li>a:first"))
		$(".anlibox>li>a:first").animate({height:0},1000)
		$(".anlibox>li>a:last").animate({height:63},1000)
	}
var t2=setInterval(moveUp,1000);
$(".anlibox").mouseover(function(){
	clearInterval(t2);
});
$(".anlibox").mouseout(function(){
	t2=setInterval(moveUp,1000);
});