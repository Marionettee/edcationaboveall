$(function(){
	$(".fp-prev").live("mouseover",function(){
		$(this).animate({opacity:"1"},1000)
	})
	$(".fp-prev").live("mouseout",function(){
		$(this).animate({opacity:"0.3"},1000);
	})
	$(".fp-next").live("mouseover",function(){
		$(this).animate({opacity:"1"},1000)
	})
	$(".fp-next").live("mouseout",function(){
		$(this).animate({opacity:"0.3"},1000)
	})
})