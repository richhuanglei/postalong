
function a(){

	window.location.href='zifadaigou.html?price=10&weight=20'
}
function b(){
	var msg = "是否抢单？\n\n请问您确定抢单吗？"; 
 if (confirm(msg)==true){ 
 	var message="成功！"
 	if (confirm(message)==true){
 		window.location.href='gou.html?p=1'
 	}else{
 		window.location.href="daigou.html"
 	}
  // window.location.href='qiangdanchenggong.html'
 }else{ 
 window.location.href='gou.html'
 } 
}