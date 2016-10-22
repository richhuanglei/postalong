// 新订单数据



//打开各个模态框
function selectmodal (x){
	switch (x)
	{
case '已取货':
		$('#yqhmask').css('display', 'block');
		$('#phonenumber').click(function() {
					$(this).html("6048589999")
					});
		$('button:contains(行程追踪)').click(function() {
		
					$("#pic").attr("src","../img/fa/map.png");
					});
	break;
case '待接单':
	
		$('#djdmask').siblings().css('display', 'none');
	    $('#djdmask').css('display', 'block');

	    if (sign==='ok') {
			$('.editor').css('display', 'none');
			$('.cancel').css('margin-left', '60%');
			}else{
					$('.cancel').css({
						'margin-left': '20%',
						'margin-top': '5px',
						'float':'left'
					});

					$('.editor').css({
						'display': 'block',
						'margin-top': '5px',
						'margin-left':'10%',
						'float':'left'
					});
			}

	   $('.cancel').click(function() {
	  	
	  $('#djdmask').css('display', 'none');
		 window.reload(true)
	  });

	   
	break;
case '待付款':
	  
	  $('#dfkmask').css('display', 'block');
	  $('.cancel').click(function() {
	  	
	  $('#dfkmask').css('display', 'none');
	  });
	  //打开待付款支付页面
	  		$('.pay').click(function() {
	  			$('#dfkmask').css('height', '0');
	  			$('#dfkzfmask').css('display', 'block');

	 			 	});
	  		$('.payment').click(function() {
	  			confirm('您确认支付吗？')
	  				});
	  		$('.cancelpayment').click(function() {
	  			confirm('您确认要取消此条订单消息吗？')
	  			});
	break;
case '已完成':
	 
	   		$('#ywcmask').css('display', 'block');
	break;
case '已取消':
	   
	    	$('#yqxmask').css('display', 'block');
	    	$('.publish').click(function() {
	    		sign='true';
				$('#newordermask').css('display', 'block');
				$('#yqxmask').css('display', 'none');
				$('.orderpublish').click(function() {
				$('#fbcgmask').css('display', 'block');
				$('#newordermask').css('display', 'none');
				});
	    	});
	break;
case '议价中':
	//显示模块   	
	 		$('#yjmask').css('display', 'block');
	 
	 		$('.quxiaobianji').click(function() {
	 		$('#yjmask').css('display', 'none');
	  		$('#yjmask2').css('display', 'block');
	 			});


	//提交数据
			$('#accept').click(function() {
				confirm('您确定选择此递送人给你送货吗？')
				});
	//取消按钮
			$('.yjcancel1').click(function() {
		 		$('#yjmask').css('display', 'none');
				});
			$('.yjcancel2').click(function() {
		 		$('#yjmask2').css('display', 'none');
				});
	break;
case '未取货':
	 
	   $('#wqhmask').css('display', 'block');
	break;
case '待评价':
	
	   $('#dpjmask').css('display', 'block');
	   break;
case '新订单':
		//显示
		sign='true';
		$('#newordermask').css('display', 'block');
		$('#newordermask').siblings().css('display', 'none');
		//判断数据类型
  			
  		//判断物品价值
				$('.itemValue').blur(function() {
								var reg_expression = /^(([1-9]\d*)|0)(\.\d{1,2})?$/ 
  								var textString=parseFloat($('.itemValue').val())
  								var result=reg_expression.test(textString); 
  								
  								if (!$('.itemValue').val() || result==false) {
  									alert("物品价值不能为空,或者格式不对")
  									
  												}
  								})
		//判断报酬	
				$('.reward').blur(function() {
								var reg_expression = /^(([1-9]\d*)|0)(\.\d{1,2})?$/ 
  								var textString=parseFloat($('.reward').val())
  								var result=reg_expression.test(textString); 
  								
  								if (!$('.reward').val() || result==false) {
  									alert("报酬不能为空，或者格式不对")
  									$(this).val('')			//赋给空值
          								$(this).focus();
  												}
  								
     											});
		//判断重量
		$('.itemWeight').blur(function() {
								var weight = /^(([1-9]\d*)|0)(\.\d{1,2})?$/ 
  								var textString=parseFloat($('.itemWeight').val())
  								var result=weight.test(textString); 
  								
  								if (!$('.itemWeight').val() || result==false ) {
  									alert("重量不能为空或格式不对")
  									$(this).val('')			//赋给空值
          								$(this).focus();
  									
  												}
  								
     											});

		//判断电话
		$('.tel').blur(function() {
								var phone = /^[1-9]\d{0,19}$/;
  								var textString=$('.tel').val()
  								var result=phone.test(textString); 
  								
  								if (!$('.tel').val() || result==false) {
  									alert("电话不能为空或电话格式不对")
  									
  												}
  								
     											});
   

		//提交
		$('.orderpublish').click(function() {

		//下面是填入的数据
		var orderarr = new Array()
			orderarr['pickupTime'] = $('.pickupTime').val()
			orderarr['pickupAddress'] = $('.pickupAddress').val()
			orderarr['deliveryTime'] = $('.deliveryTime').val()
			orderarr['deliveryAddress'] = $('.deliveryAddress').val()

			orderarr['consigner'] = $('.consigner').val()
			orderarr['consignerTel'] = $('.consignerTel').val()
			orderarr['consignee'] = $('.consignee').val()
			orderarr['consigneeTel'] = $('.consigneeTel').val()

			orderarr['itemName'] = $('.wp .itemName').val()
			orderarr['itemWeight'] = $(' .itemWeight').val()
			orderarr['itemDescribe'] = $('.itemDescribe').val()
			orderarr['itemValue'] = $('.itemValue').val()
			orderarr['reward']=$('.reward').val()
//下面判断是否有未填项目
		
			for (x in orderarr) {
				if (orderarr[x]=="") {
					alert(x+"不能未空")
						$('.'+x).focus();
					return
					}	
				}	

//下面判断是否在协议上打勾
 		if (!$("input[type='checkbox']").is(':checked')) {
			alert("您必须同意协议!")

			return
			$(".xieyi").focus();
 			}

//打开待接单
		selectmodal('待接单')
//给待接单赋值
			$('.middletopleft .pickupAddress').html(orderarr['pickupAddress'])						//取货地点
			$('.middletopright .deliveryAddress').html(orderarr['deliveryAddress'])					//收货地点
			$('#djd .lefttop .itemName').html(orderarr['itemName'])									//物品名称
			$('#footer .footerleftupleft .itemWeight').html(orderarr['itemWeight'])					//物品重量
			$('#footer .footerleftupleft .itemValue').html(orderarr['itemValue'])					//物品价值
			$('#footer .footerleftupright .footerleftuprightinside .reward').html(orderarr['reward'])//报酬
			$('#footer .footerleftmiddle .itemDescribe').html(orderarr['itemDescribe'])				//物品表述
			$('.middlebottom .middlebottomleft .pickupTime').html(orderarr['pickupTime'])			//取货时间
			$('.middlebottom .middlebottomright .deliveryTime').html(orderarr['deliveryTime'])		//送货时间

		});
	break;
case '批量订单':
		 sign='false';		//标记打开的是批量创建的模态框
		$('#newordersmask').siblings().css('display', 'none');
		$('#newordersmask').css('display', 'block');
	break;
	}
}


// 下面是左上五大功能效果

$('.leftlinkmenu:eq(3)').hover(function() {
	$('.leftlinkmenu:eq(3)').css('background', '#FFFFFF');
	$('.leftlinkmenu:eq(3)').css('opacity', '1');
	$('.leftlinkmenu:eq(0)').css('opacity', '0.5');
	$('.leftlinkmenu:eq(0)').css('background', '#FFFFFF');
	/* Stuff to do when the mouse enters the element */
}, function() {
	$('.leftlinkmenu:eq(3)').css('background', '#FFFFFF');
	$('.leftlinkmenu:eq(3)').css('opacity', '0.5');
	$('.leftlinkmenu:eq(0)').css('background', '#FFFFFF');
	$('.leftlinkmenu:eq(0)').css('opacity', '1');
});

$('.leftlinkmenu:eq(1)').hover(function() {
	$('.leftlinkmenu:eq(1)').css('background', '#FFFFFF');
	$('.leftlinkmenu:eq(1)').css('opacity', '1');
	$('.leftlinkmenu:eq(0)').css('opacity', '0.5');
	$('.leftlinkmenu:eq(0)').css('background', '#FFFFFF');
	/* Stuff to do when the mouse enters the element */
}, function() {
	$('.leftlinkmenu:eq(1)').css('background', '#FFFFFF');
	$('.leftlinkmenu:eq(1)').css('opacity', '0.5');
	$('.leftlinkmenu:eq(0)').css('background', '#FFFFFF');
	$('.leftlinkmenu:eq(0)').css('opacity', '1');
});

$('.leftlinkmenu:eq(2)').hover(function() {
	$('.leftlinkmenu:eq(2)').css('background', '#FFFFFF');
	$('.leftlinkmenu:eq(2)').css('opacity', '1');
	$('.leftlinkmenu:eq(0)').css('opacity', '0.5');
	$('.leftlinkmenu:eq(0)').css('background', '#FFFFFF');
	/* Stuff to do when the mouse enters the element */
}, function() {
	$('.leftlinkmenu:eq(2)').css('background', '#FFFFFF');
	$('.leftlinkmenu:eq(2)').css('opacity', '0.5');
	$('.leftlinkmenu:eq(0)').css('background', '#FFFFFF');
	$('.leftlinkmenu:eq(0)').css('opacity', '1');
});

$('.leftlinkmenu:eq(4)').hover(function() {
	$('.leftlinkmenu:eq(4)').css('background', '#FFFFFF');
	$('.leftlinkmenu:eq(4)').css('opacity', '1');
	$('.leftlinkmenu:eq(0)').css('opacity', '0.5');
	$('.leftlinkmenu:eq(0)').css('background', '#FFFFFF');
	/* Stuff to do when the mouse enters the element */
}, function() {
	$('.leftlinkmenu:eq(4)').css('background', '#FFFFFF');
	$('.leftlinkmenu:eq(4)').css('opacity', '0.5');
	$('.leftlinkmenu:eq(0)').css('background', '#FFFFFF');
	$('.leftlinkmenu:eq(0)').css('opacity', '1');
});

// 创建新订单模态框的显示
$('#searchbutton').click(function() {
	window.open('发布订单.html')


});



// 关闭创建新订单模态框
$('.ordercancel').click(function() {
sign='ok'
$('#newordermask').css('display', 'none');
});

//批量发布订单显示
$('button:contains(批量发布订单)').click(function() {
	
window.open('群发布订单.html')

});
//克隆批量增加订单中内容

function kelong(){
$(".fapostformwhite").prev().clone(true).insertBefore('.fapostformwhite')
}


//smallcontent选中效果
;
	$(".smallcontent").mouseenter(function(){
  $(this).siblings().css({
  	opacity: '0.4',
  
  });
});
	
	$(".smallcontent").mouseleave(function(){
  $(this).siblings().css({
  	opacity:'1',
  });
});
	$('#neworders').removeClass('show')

$('.smallcontent').click(function() {
	var nextpage=$('.status').html()+".html"

	var nextpage=$(this).find(".status").html()+".html"
	// window.location.href=nextpage
		window.open(nextpage)
});
//得到八大块的具体内容
$('.smallcontent').click(function() {
	var status=$(this).children('.smallcontentright').children('.smallcontentrightDown').children('.smallcontentrightdownbox').children().html()
	sign='ok'
	selectmodal(status)			//调用selectmodal()函数
	
});
//待接单--修改编辑--按钮

$('.editor').click(function() {
	if (sign==='true') {
		selectmodal('新订单')
	
	}
	if (sign==='false') {
		selectmodal('批量订单')

	}
	
});
//带评价
//移动鼠标评选星级
$('.starrates').mouseenter(function() {
   
    var j=parseInt($(this).index())
    $(this).removeClass('star-five').addClass('change');
    $(".starrates").slice(0, j).removeClass('star-five').addClass('change')
    
  });
  
 //单击修改星级，至少选一个星
$('.starrates').click(function() {
   $(this).removeClass('change').addClass('star-five')
   $(this).nextAll().removeClass('change').addClass('star-five')
 })
// 改版后效果
$('.pageheader a ').click(function() {
	$(this).css('background', '#21B796');
	$(this).css('height', '50px');
});
$('.assess').click(function(event) {
	window.location.href='已完成.html'

});





		
	