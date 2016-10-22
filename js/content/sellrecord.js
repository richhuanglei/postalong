 $(".title").click(function(){	
 	var i=$(this).html();
 		
  if (i.trim()=='我的购买记录') {
  	window.location.href="myrecord.html"
  }	
  if (i.trim()=='搜索商品') {
  	window.location.href="gou.html"
  }
  if (i.trim()=='发布购买需求') {
  	window.location.href="purchaseneed.html"
  }	
   if (i.trim()=='发布商品') {
  	window.location.href="sellpublishgoods.html"
  }		
  if (i.trim()=='我的卖出记录') {
  	window.location.href="sellrecord.html"
  }		
  $(this).next().slideToggle(200).siblings().not(".title").not("#publishgoods").slideUp(200);
                });

 	
 	$('a:contains(我要买)').click(function(event) {
 		window.location.href='gou.html'
 	});
 	$('a:contains(我要卖)').click(function(event) {
 		window.location.href='sellpublishgoods.html'
 	});
  
  // 数量计算
  $('#jia').click(function(event) {

		var i=parseInt($(this).next().html())+1;
	
	$(this).next().html(i);
	document.all.number.value=i;
	
	});
	$('#jian').click(function(event) {
		var j=parseInt($(this).prev().html())-1;
		if (j<0) {
			j=0;
		}
	$(this).prev().html(j);
	document.all.number.value=j;
	});
 // --------------------------------------------------------------------------------------
  $('.leftheader').click(function(event) {
$('.leftheader').next('.wrapmenu').hide();
$(this).next('.wrapmenu').slideToggle();

var menu=$(this).html();

switch(menu)
{
case "搜索商品":

   $('.rightcontent').children().hide();
   $('.rightcontent').children('.wrap').eq(0).slideToggle();
  break;
case "帮人代购":
  $('.rightcontent').children().hide();
  $('.rightcontent').children('.wrap').eq(2).slideToggle();  
  break;
case "我的需求订单":
  $('.rightcontent').children().hide();
  $('.rightcontent').children('.wrap').eq(3).slideToggle();
  break;
case "我的接单":
  $('.rightcontent').children().hide();
  $('.rightcontent').children('.wrap').eq(4).slideToggle();
  break;
};

})
  // 点击加号的效果
  $('#publishrequire').click(function(event) {
  
     $('.rightcontent').children().hide();
  	$('.rightcontent').children('.wrap').eq(1).show();
}); 
  // 查看搜索商品详细信息
  $('.searchgoods').click(function(event) {
 
window.location.href="购商品信息.html"
});
  // 帮人代购
  $('.bangrendaigou').click(function(event) {
    $(this).css('cursor', 'pointer');
   window.location.href="daigou.html"
  });
  // 我的需求
  $('.myneed').click(function(event) {
    var t=$(this).children('.resultright').children().eq(1).html()
   
    var status=$(this).children('.resultright').children('.information').children('.weizhi').html()
   
    if (status=="待接单") {
       // window.location.href='goudaijiedan.html'
       window.location.href='selldaijiedan.html'

    }
     if (status=="议价中") {
       // window.location.href='gouyijiazhong.html'
       window.location.href='sellyijiazhong.html'

    }
    if (status=="待付款") {
       // window.location.href='goudaifukuan.html'
       window.location.href='selldaifukuan.html'

    }
    if (status=="已完成") {
       // window.location.href='gouyiwancheng.html'
       window.location.href='sellyiwancheng.html'

    }
    if (status=="已取消") {
       // window.location.href='已取消.html'
       window.location.href='sellyiquxiao.html'

    }
    if (status=="已取货") {
       // window.location.href='已取货.html'
       window.location.href='sellyiquhuo.html'

    }
    if (status=="待取货") {
       // window.location.href='goudaiquhuo.html'
       window.location.href='selldaiquhuo.html'

    }
    if (status=="待评价") {
       // window.location.href='goudaipingjia.html'
       window.location.href='selldaipingjia.html'

    }
     if (status=="待付款") {
       // window.location.href='goudaifukuan.html'
       window.location.href='selldaifukuan.html'

    }
     if (status=="待取货") {
       // window.location.href='goudaiquhuo.html'
          window.location.href='selldaiquhuo.html'
    }
      if (status=="待评价") {
       // window.location.href='goudaipingjia.html'
       window.location.href='selldaipingjia.html'

    }
   // window.location.href='myneed.html?type='+t+'&status='+status
  });
   // Get URL 参数
  function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

if (GetQueryString("p")==1) {
   $('.rightcontent').children().hide();
  $('.rightcontent').children('.wrap').eq(2).show();  
}