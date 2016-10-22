$('.leftheader').click(function(event) {
$('.leftheader').next('.wrapmenu').hide();
$(this).next('.wrapmenu').toggle(600);

var menu=$(this).html();

switch(menu)
{
case "搜索商品":
   $('.rightcontent').children().hide();
   $('.rightcontent').children('.wrap').eq(0).show();
  break;
case "帮人代购":
  $('.rightcontent').children().hide();
  $('.rightcontent').children('.wrap').eq(1).show();  
  break;
case "我的需求订单":
  $('.rightcontent').children().hide();
  $('.rightcontent').children('.wrap').eq(2).show();
  break;
case "我的接单":
  $('.rightcontent').children().hide();
  $('.rightcontent').children('.wrap').eq(3).show();
  break;

};

})



$(".Menu-title ul li:contains('同城');").hover(function() {
	$(".Menu-title ul li:contains('同城');").css('color', '#21B796');
	/* Stuff to do when the mouse enters the element */
}, function() {
	$(".Menu-title ul li:contains('同城');").css('color', '#FFFFFF');
	/* Stuff to do when the mouse leaves the element */
});

$(".Menu-title ul li:contains('城际');").hover(function() {
	$(".Menu-title ul li:contains('城际');").css('color', '#21B796');
	/* Stuff to do when the mouse enters the element */
}, function() {
	$(".Menu-title ul li:contains('城际');").css('color', '#FFFFFF');
	/* Stuff to do when the mouse leaves the element */
});

$(".Menu-title ul li:contains('国际');").hover(function() {
	$(".Menu-title ul li:contains('国际');").css('color', '#21B796');
	/* Stuff to do when the mouse enters the element */
}, function() {
	$(".Menu-title ul li:contains('国际');").css('color', '#FFFFFF');
	/* Stuff to do when the mouse leaves the element */
});
// // 下面是左上角发送收行购背景
//a(),onmouseover样式
function a(obj){
	$('.leftlinkmenu').css('opacity', '0.5');
	
	obj.style.opacity=1
}
//b().onmouseout样式
function b(obj){
	obj.style.opacity=0.5
	
}




