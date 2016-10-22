$(function(){
	var helpList=$(".hSbody li");
	var wrapContains=$(".helpWrap .wrapContain")
	helpList.on("click",function(){
		 helpList.each(function(){
		 	$(this).removeClass("hSactive");
		 })
         $(this).addClass("hSactive");
         var helpHref=$(this).data("href");
         wrapContains.each(function(){
		 	$(this).removeClass("show");
		 })
		 $("."+helpHref).addClass("show");
	})
})

function shiftToInstruction(){											//下载指引
     document.getElementById("instruction").style.display = 'block';
     document.getElementById("regedit").style.display = 'none';     //*****************************************************
	 document.getElementById("ruler").style.display='none';
	 document.getElementById("delivery").style.display='none';
}

function shiftToPlan(){												//隐私条款
     document.getElementById("instruction").style.display = 'none';
	 document.getElementById("ruler").style.display='none';
	 document.getElementById("delivery").style.display='none';
}

function shiftToHSactive(){											//常见问题
     document.getElementById("instruction").style.display = 'none';
}
                                        
function shiftToRegedit(){                                      //注册协议
     document.getElementById("regedit").style.display = 'block';    //******************************************************
     document.getElementById("instruction").style.display = 'none';//*****************************************************  
		document.getElementById("ruler").style.display='none';
		document.getElementById("delivery").style.display='none';
}

function shiftToRuler(){                                      //新菜单2
     document.getElementById("ruler").style.display = 'block';    //******************************************************
     document.getElementById("instruction").style.display = 'none';//***************************************************** 
	 document.getElementById("regedit").style.display='none';
	 document.getElementById("delivery").style.display='none';
	 
}
function shiftToDelivery(){                                      //新菜单2
     document.getElementById("delivery").style.display = 'block';    //******************************************************
     document.getElementById("instruction").style.display = 'none';//***************************************************** 
	 document.getElementById("regedit").style.display='none';
	 document.getElementById("ruler").style.display='none';
	 
}