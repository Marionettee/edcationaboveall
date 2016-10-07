$(function(){
		$(".hhh1").mouseover(function(){
			$(".hhh1 h4 span").addClass("aaaaa")
		})
		$(".hhh1").mouseout(function(){
			$(".hhh1 h4 span").removeClass("aaaaa")
		})
		$(".hhh0").mouseover(function(){
			$(".hhh0 h4 span").addClass("aaaaa")
		})
		$(".hhh0").mouseout(function(){
			$(".hhh0 h4 span").removeClass("aaaaa")
		})
	
//	$("#username").blur(function(){
//		var arr = document.cookie.split(";");
//		for(var i=0;i<arr.length;i++){
//			var cookPiar = arr[i].split("=");
//			if($("#username").val()==cookPiar[0].trim()){
//				$("#password").val(cookPiar[1].trim());
//				return;
//			}
//		}
//	})

	$("#yes").click(function(){
		
	})
	
	var i = 0;
	$("video").css("height",$(window).height())
	$("video").css("width",$(window).width())
//	$("#evenImg31").css("height",$(window).height()+"px")
//	$("#evenImg31").css("width",$(window).width()+"px")
//	$("#evenImg32").css("height",$(window).height()+"px")
//	$("#evenImg32").css("width",$(window).width()+"px")
//	$("#evenImg33").css("height",$(window).height()+"px")
//	$("#evenImg33").css("width",$(window).width()+"px")
//	$("#evenImg5").css("height",$(window).height()+"px")
//	$("#evenImg5").css("width",$(window).width()+"px")
//	$("#evenImg4").css("height",$(window).height()+"px")
//	$("#evenImg4").css("width",$(window).width()+"px")
//	$("#evenImg3").css("height",$(window).height()+"px")
//	$("#evenImg3").css("width",$(window).width()+"px")
//	$("#usImg").css("height",$(window).height()+"px")
//	$("#usImg").css("width",$(window).width()+"px")
//	$("#img").css("height",$(window).height()+"px")
//	$(".section").css("height",$(window).height()+"px")
//	$(".section").css("width",$(window).width()+"px")
//	$("#img").css("height",$(window).height()+"px")
	function change(){
		$("#evenImg31").css("height",$(window).height()+"px")
		$("#evenImg31").css("width",$(window).width()+"px")
		$("#evenImg32").css("height",$(window).height()+"px")
		$("#evenImg32").css("width",$(window).width()+"px")
		$("#evenImg33").css("height",$(window).height()+"px")
		$("#evenImg33").css("width",$(window).width()+"px")
		$("#evenImg5").css("height",$(window).height()+"px")
		$("#evenImg5").css("height",$(window).height()+"px")
		$("#evenImg5").css("width",$(window).width()+"px")
		$("#evenImg4").css("height",$(window).height()+"px")
		$("#evenImg4").css("width",$(window).width()+"px")
		$("#evenImg3").css("height",$(window).height()+"px")
		$("#evenImg3").css("width",$(window).width()+"px")
		$("#usImg").css("height",$(window).height()+"px")
		$("#usImg").css("width",$(window).width()+"px")
		$("#img").css("height",$(window).height()+"px")
		$(".section").css("height",$(window).height()+"px")
		$(".section").css("width",$(window).width()+"px")
		$("#img").css("height",$(window).height()+"px")
	};
	
	
	$(window).load(change).resize(change)
//	console.log($("#events").offset().top - $(window).scrollTop())
	
	var innt = window.setInterval(sh,1)     //系统每隔1s执行一次sh函数！如果写的sh()就会自动执行，不管函数有没有事件，不加()就会在执行事件后才会时间调用
	function sh(){
//		console.log($("#events").offset().top - $(window).scrollTop())
		if($("#events").offset().top - $(window).scrollTop()<=0){		
			$("#signIn").css("opacity","0");
			$("#signIn").css("z-index","0");
			$("#signIn2").css("opacity","0");
			$("#signIn2").css("z-index","0");
			$("#signIn3").css("display","block");
		}else{
			if($("#signIn2")[0].style.display=="block"){
				$("#signIn2").css("opacity","1");
				$("#signIn2").css("z-index","3");
			}else{
				$("#signIn").css("opacity","1");
				$("#signIn").css("z-index","3");
			}
			$("#signIn3").css("display","none");
		}
	}
	
	arr = document.cookie.split(";");
	$("#username").blur(function(){
		if($("#register").prop("checked")){
			for(var i=0;i<arr.length;i++){
				var cookPiar = arr[i].split("=");
				if($("#username").val()==cookPiar[0].trim()){
					$("#password").val(cookPiar[1].trim());
				}
			}
		}
	})
	$("#yes").click(function(){					//已登录
		c_start=document.cookie.indexOf($("#username").val()+"="); 
		for(var i=0;i<arr.length;i++){
			cookPiar = arr[i].split("=");
		}
		if(($("#username").val()!=="")&&($("#password").val()!=="")){
			if(c_start == -1){ 
				alert("亲，先注册")
			}else if($("#password").val()!=cookPiar[1].trim()){
				alert("亲，密码错误")
			}else{
				alert("亲已登录")
				$(".section").css("filter","blur(0)");
				$("#hm").css("filter","blur(0)");
				$("#var").css("filter","blur(0)");
				$.fn.fullpage.setAllowScrolling(true);
				$.fn.fullpage.setKeyboardScrolling(true);
				$("#no2").css("display","none");
				$("#no").css("display","none");
				$("#signIn").css("display","none")
				$("#signIn2").css("display","block")
			}
		}else{
			alert("亲，请填写用户名或者密码")
		}
	})

	$("#im").animate({marginLeft:"350px"},2000,function a(){
		$(this).animate({marginLeft:"-400px"},2000,function(){
			$(this).animate({marginLeft:"350px"},2000,a)
		})
	})
	$("#hm").click(function(){
		if(i==0){
			i=1;
			$("#st1")[0].style.display = "none";
			$(".st2")[0].style.display = "block";
			$(".st2")[1].style.display = "block";
			$(this).animate({"left":"315px"});
			$("#homeRight").animate({"width":"0"})
			$(".section").animate({"left":"315px"});
			$("#var").animate({"z-index":"1"});
			return
		}else{
			i=0;
			$("#homeRight").animate({"width":"273px"})
			$(".st2")[0].style.display = "none";
			$(".st2")[1].style.display = "none";
			$("#st1")[0].style.display = "block";
			$("#var").css("z-index","0")
			$(this).animate({"left":"0px"});
			$(".section").animate({"left":"0px"})
		}
	})
	
	$("#about").click(function(){			//点击“更多关于我们”跳转到全屏3框架里
		$.fn.fullpage.moveTo(3);
	})
	$("#two").click(function(){
		$.fn.fullpage.moveTo(2);
	})
	
	$("#sign-in").click(function(){			//点击登陆页面变模糊，出现登陆框
		$(".section").css("filter","blur(4px)");
		$("#hm").css("filter","blur(4px)");
		$("#var").css("filter","blur(4px)");
		$.fn.fullpage.setAllowScrolling(false);
		$.fn.fullpage.setKeyboardScrolling(false);
		$("#no2").css("display","block");
		$("#no").css("display","block");
	})
	
	$("#two").mouseover(function(){
		for(var i=0;i<3;i++){
			$(".an")[i].style.display = "block";
			$("#an1")[0].style.opacity = 0;
			$(".an")[i].style.opacity = 0;
			console.log(1)
		}
			$("#an1").animate({opacity:"1"},100,function(){
				$("#an2").animate({opacity:"1"},100,function(){
					$("#an3").animate({opacity:"1"},100,function(){
						$("#an4").animate({opacity:"1"},100);
					});
				});
			});
	})
	$("#two").mouseout(function(){
		for(var i=0;i<3;i++){
			$(".an")[i].style.display = "none";
			$(".an")[i].style.opacity = 0;
		}
	})
	$("#guan").click(function(){				//点击叉关闭登录窗口
		$(".section").css("filter","blur(0px)");
		$("#hm").css("filter","blur(0px)");
		$("#var").css("filter","blur(0px)");
		$.fn.fullpage.setAllowScrolling(true);
		$.fn.fullpage.setKeyboardScrolling(true);
		$("#no2").css("display","none");
		$("#no").css("display","none");
	})
	
	$("#signIn3").click(function(){				//点击右上角的类似菜单的标志时，会变成登录and注册，停4s后恢复
		clearInterval(innt)
		if($("#signIn2")[0].style.display=="block"){
			$("#signIn2").css("opacity","1");
			$("#signIn2").css("z-index","3");
		}else{
			$("#signIn").css("opacity","1");
			$("#signIn").css("z-index","3");
		}
		$("#signIn3").css("display","none");
		setTimeout(function(){ 
       		innt = window.setInterval(sh,1)
   		}, 3000);
	})
	
	$("#span1").click(function(){
		$("#video1").css("display","block");
		$("#but").css("display","block");
		document.getElementById("video1").play()
	})
	$("#but").click(function(){
		$("#video1").css("display","none");
		$("#but").css("display","none");
		document.getElementById("video1").pause()
	})
	$("#span2").click(function(){
		$("#video2").css("display","block");
		$("#but1").css("display","block");
		document.getElementById("video2").play()
	})
	$("#but1").click(function(){
		$("#video2").css("display","none");
		$("#but1").css("display","none");
		document.getElementById("video2").pause()
	})
	$("#span3").click(function(){
		$("#video3").css("display","block");
		$("#but2").css("display","block");
		document.getElementById("video3").play()
	})
	$("#but2").click(function(){
		$("#video3").css("display","none");
		$("#but2").css("display","none");
		document.getElementById("video3").pause()
	})
	$("#span4").click(function(){
		$("#video4").css("display","block");
		$("#but3").css("display","block");
		document.getElementById("video4").play()
	})
	$("#but3").click(function(){
		$("#video4").css("display","none");
		$("#but3").css("display","none");
		document.getElementById("video4").pause()
	})
})