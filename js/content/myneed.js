var str=decodeURI(window.location.href)	//decodeURI(),把得到的url地址转码为中文

   var value = new Array()
   var name = new Array()
   var num=str.indexOf("?")
   
   str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]

   var arr=str.split("&"); //各个参数放到数组里
   
   for(var i=0;i < arr.length;i++){
    num=arr[i].indexOf("=");
    if(num>0){
     name=arr[i].substring(0,num);
   
     value[i]=arr[i].substr(num+1);
       
    
     }
    }


type=value[0]			//两种状态
status=value[1]			//八大情况

switch(status)
	{

	case "待接单":
	
	$('.daijiedan').removeClass('status')
	$('.daijiedan').html(type)
		
	
	break;

	case "待付款":
	$('.daifukuan').removeClass('status')
	$('.daifukuan').html(type)
		
	
	break;

	case "待评价":
	$('.daipingjia').removeClass('status')
	$('.daipingjia').html(type)
	
	break;

	case "待取货":
	$('.daiquhuo').removeClass('status')
	$('.daiquhuo').html(type)
	
	break;
	case "已取货":
	$('.yiquhuo').removeClass('status')
	$('.yiquhuo').html(type)
	break;
	case "已取消":
	$('.yiquxiao').removeClass('status')
	$('.yiquxiao').html(type)
	
	break;

	case "议价中":
	$('.yijiazhong').removeClass('status')
	$('.yijiazhong').html(type)
	
	break;

	case "已完成":
	$('.yiwancheng').removeClass('status')
	$('.yiwancheng').html(type)
	break;

	}