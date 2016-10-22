$(function(){
   // 绑定点击左侧菜单链接事件
   $("#menu p a").click(function(){
       // 设置当前点击的链接的选中样式
       $(this).addClass("selected").siblings().removeClass("selected");
	   
       // $(this).index()是当前被点击链接的索引值, 找到右侧div对应的索引值显示
       // 同时隐藏右侧其他的div. 此处除了用index做以外
       // 也可以给左侧a标签设置ID,通过id对应右侧的div.
       $('#content .box:eq(' + $(this).index() + ')').show().siblings().hide();
   });
});