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