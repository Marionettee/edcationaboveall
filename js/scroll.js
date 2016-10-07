$(function() {
	$('#dowebok').fullpage({
		sectionsColor: ['#1bbc9b', '#f90', '#7BAABE', '#4BBFC3', '#f0f', '#0ff', '#d5d5d5'],
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
		menu: '#menu',
		slidesNavigation: 'ture',
		scrollingSpeed: '1000',
		afterRender: function() { 
			//自定义所有屏的位置
			$("#last2").css({
				bottom: ($(window).height()) / 2
			})

			//第四屏左右圆点样式
			$(".fp-slidesNav").css({
				top: "20px",
				transform: 'translate(-50%,0)'
			});
			$(".fp-slidesNav a span").css({
				display: "none"
			})
			$(".fp-slidesNav li").css({
				width: '70px'
			});
			$("<img src='img/cc4.png' class='cc1 cc'/>").appendTo($(".fp-slidesNav a").eq(0));
			$(".fp-slidesNav li").css({
				width: '70px'
			});
			$("<img src='img/cc3.png' class='cc2 cc'/>").appendTo($(".fp-slidesNav a").eq(1));
			$(".fp-slidesNav li").css({
				width: '70px'
			});
			$("<img src='img/cc2.png' class='cc3 cc'/>").appendTo($(".fp-slidesNav a").eq(2));
			$(".fp-slidesNav li").css({
				width: '70px'
			});
			$("<img src='img/cc1.png' class='cc4 cc'/>").appendTo($(".fp-slidesNav a").eq(3));
		},

		onLeave: function(index, nextIndex, direction) {
			//it won't scroll if the destination is the 3rd section

			if(nextIndex == 3) {

				$("#img").animate({
					opacity: "0"
				}, 2000)
				$("#events1").animate({
					top: "-400px"
				}, 1000)
				$("#events2").animate({
					top: "-60px"
				}, 1500)
				$("#events3").animate({
					top: "100%"
				}, 1000)
				$("#events4").animate({
					top: "100%"
				}, 1000)
				$("#evenImg1").animate({
					top: "-400px"
				}, 1000)
				$("#evenImg2").animate({
					right: "-300px"
				}, 1000);
				return false;
			}

		},

		afterLoad: function(anchorLink, index) { //回调函数
			//			            var loadedSection = $(this);
			if(index == 1) {
				if($(".section")[0].style.left == "315px") {
					$("#homeRight").animate({
						width: "0px"
					})
				} else {
					$("#homeRight").animate({
						width: "273px"
					})
				}
				$(".contentBotton2").animate({
					marginTop: "0"
				}, 1000)
				$(".contentBotton").animate({
					marginTop: "0"
				}, 1000)
				$(".contentTop").animate({
					marginTop: "50px"
				}, 1000)
				$("#contentLeft").animate({
					marginLeft: "0"
				}, 2000)
				
			} else {
				$("#homeRight").css("width", "0")
				$(".contentBotton2").css("margin-top", "1000px")
				$(".contentBotton").css("margin-top", "-300px")
				$(".contentTop").css("margin-top", "-300px")
				$("#contentLeft").css("margin-left", "-600px")
			}
			if(index == 2) {
				$('#evenImg1,#events1,#events2').show();
				$("#img").animate({
					opacity: "1"
				}, 2000)
				$("#events1").animate({
					top: "0"
				}, 1000)
				$("#events2").animate({
					top: "0"
				}, 1500)
				$("#events3").animate({
					top: "50%"
				}, 1000)
				$("#events4").animate({
					top: "50%"
				}, 1000)
				$("#evenImg1").animate({
					top: "0"
				}, 1000)
				$("#evenImg2").animate({
					right: "0"
				}, 1000);
			
			} else {
				$("#img").css("opacity", "0")
				$("#events1").css({"top":"-450px","display":"none"})
				$("#events2").css({"top":"-400px","display":"none"})
				$("#events3").css("top", "100%")
				$("#events4").css("top", "100%")
				$("#evenImg1").css({"top":"-450px","display":"none"})
				$("#evenImg2").css("right", "-300px")
			}
			if(index == 3) {
				$("#aboUs1").animate({
					left: "100px"
				}, 1000)
				$("#aboUs2").animate({
					left: "0px"
				}, 1000)
				$("#aboUs3").animate({
					top: "70%"
				}, 1000)
			} else {
				$("#aboUs1").css("left", "-600px")
				$("#aboUs2").css("left", "-1300px")
				$("#aboUs3").css("bottom", "-300px")
			}
			if(index == 4) {
				$(".slide1").animate({
					top: "150px"
				}, 1000)
				$(".slide .img").animate({
					right: "10%"
				}, 1000)
			} else {
				$(".slide1").css("top", "-400px")
				$(".slide .img").css("right", "-300px")
			}
			if(index == 5) {
				$("#wenben").show(1000)
			} else {
				$("#wenben").hide()
			}
			if(index == 6) {
				$("#lastUl").animate({
					bottom: "50px"
				}, 1000)
				$("#lastUl li").animate({
					margin: "0 50px"
				}, 1000)
				$("#lastnei").animate({
					top: "60px",
					left: "100px"
				}, 1000)
			} else {
				$("#lastnei").css({
					top: "-200px",
					left: "-800px"
				})
				$("#lastUl").css("bottom", "-200px")
				$("#lastUl li").css("margin", "0 0")
			}
			if(index == 7) {
				$("#lastUl").css("bottom", "50px")
				$("#lastUl li").css("margin", "0 50px")
				$("#last2 ul").animate({
					right: "100px"
				}, 1000)
				$("#last2 .p4").animate({
					fontSize: "20px"
				}, 1000, function() {
					$(this).animate({
						fontSize: "10px"
					}, 1000)
				})
				$("#last2 img").animate({
					width: "279px"
				}, 2000)
			} else {
				$("#last2 ul").css("right", "-900px")
				$("#last2 .p4").css("font-size", "5px")
				$("#last2 img").css("width", "0")
			}
		},
	});
});