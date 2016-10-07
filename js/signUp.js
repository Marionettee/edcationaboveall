$(function(){							
	$(window).load(abc).resize(abc)				//背景视频的预加载或者改变屏幕大小的时候的宽度和高度设置
	function abc(){
		$("body").css("height",$(window).height()+"px");
		$("body").css("width",$(window).width()+"px");
		$("#list1").css("height",$("#list").height()+"px")
		put.value=0;
		video.volume=0;
	}
	var i = 1;
	var put = document.getElementById("input");
	var video = document.getElementById("video");
	var sound = document.getElementById("sound1");
	sound.onclick = function(){					//点击声音的时候出现音量条或者隐藏音量条
		if(i==1){
			put.style.display = "block";
			i=0;
			return
		}else{
			i=1;
			put.style.display = "none";
			return
		}
	}
	put.oninput = function(){					//视频的声音大小与input关联
		video.volume = put.value/100;
	}
//###################################以上背景视频设置完毕####################	

//#################鼠标滑过之后input背景变成白的##############################
	$("input").each(function(){
		$(this).mouseover(function(){
			$(this).css("background","#fff");
		});
		$(this).mouseout(function(){
			if($(this).is(":focus")){
				$(this).css("background","#fff");
			}else{
				$(this).css("background","none");
			}
		});
		$(this).blur(function(){
			$(this).css("background","none");
		})
	})
	$("#pass").mouseover(function(){
		$("#password").css("background","#fff");
	});
	$("#pass").mouseout(function(){
		if($("#password").is(":focus")){
			$("#password").css("background","#fff");
		}else{
			$("#password").css("background","none");
		}
	});
//###################################以下表单开始##########################
	var x = 0;
	var pass = document.getElementById("password");
	var pass1 = document.getElementById("pass");
	var box = document.getElementById("box");
	$("#pass").click(function(){						//点击眼睛可以隐藏或者显示密码
		if(x==0){
			x = 1;
			pass.setAttribute("type", "text");			//setAttribute是改变希望添加的属性属性值
			pass1.innerHTML="&#xe600;";
		}else{
			x = 0;
			pass.setAttribute("type", "password");
			pass1.innerHTML="&#xe601;";
		}
	})
	
	$(".div").each(function(){
		$(this).mouseover(function(){
			$(this).css("background","#fff")
		});
		$(this).mouseout(function(){
			$(this).css("background","none")
		})
	})
	
	var userName = document.getElementById("userName");
	var passWord = document.getElementById("password");
	var email = document.getElementById("email");
	var name = document.getElementById("name");
	var IDnumber = document.getElementById("IDnumber");
	var daTe = document.getElementById("date");
	var tel = document.getElementById("tel");
	var yes = document.getElementById("yes");
	var subMit = document.getElementById("submit");
	var arr = document.cookie.split(";");
	for(var i=0;i<arr.length;i++){
		cookPiar = arr[i].split("=");
	}
//	alert(cookPiar[0].trim())
	function init(){										//用户名
		userName.onblur = function(){
			if(userName.value==''){
				userName.setCustomValidity("您好，这里必须输入");
				document.getElementsByClassName("labe")[0].innerHTML = "&#xe601;";
			}else if(userName.value==cookPiar[0].trim()){
				alert("亲，该用户名已被注册");
				subMit.disabled = "disabled";
			}else if(userName.value.length<6){
				document.getElementsByClassName("labe")[0].innerHTML = "&#xe601;";
				userName.setCustomValidity("不能小于6");
			}else if(userName.value.length>18){
				document.getElementsByClassName("labe")[0].innerHTML = "&#xe601;";
				userName.setCustomValidity("不能大于18");
			}else if(userName.checkValidity()){
				$("#submit").removeAttr("disabled"); 
				document.getElementsByClassName("labe")[0].innerHTML = "&#xe600;";
				document.getElementsByClassName("labe")[0].style.color = "green";
			}else{
				userName.setCustomValidity("");
			}
		}
	}
	window.addEventListener("load",init,false);				//用户名
	
	$("form").submit(function(){			//如果注册完成       则把用户信息储存到库里
		day = 7;
		data = new Date();
		data.setTime(data.getTime()+day*24*3600*1000);
		document.cookie = $("#userName").val()+"="+encodeURIComponent($("#password").val())+";expires="+data.toGMTString();
	})
})