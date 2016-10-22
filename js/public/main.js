      

        

      $(function () {

        /*轮播*/

            var container = $('.banner');
            var list = $('.list');
            var buttons = $('.buttons span');
            var section = $('.section');
            var next = $('.next');
            var index = 1;
            var len = $('.list .section').length-2;
            var eachWidth=parseInt($('.banner').css('width'))
            var windowWidth=$(window).width();
            var interval = 3000;
            var timer;
            var locations=$('.nav-menu a');

        /*轮播内的内容*/



            var textContain1=$('.tc1');
            var textContain2=$('.tc2');
            var textContain3=$('.tc3');

        
            // 设置setion宽度适应屏幕
            section.css({
                width: windowWidth
            }); 
            // 设置轮播开始位置
            list.css({
                left: -windowWidth+"px"
            });

            
            

       function animate (offset) {
                var left = parseInt(list.css('left')) + offset;
                if (offset>0) {
                    offset = '+=' + offset;
                }
                else {
                    offset = '-=' + Math.abs(offset);
                }
                list.animate({'left': offset}, 300, function () {
                    if(left > -(eachWidth-200)){
                        list.css('left', -eachWidth * len);
                    }
                    if(left < (-eachWidth * len)) {
                        list.css('left', -eachWidth);
                    }
                });
            }

            function showButton() {
                buttons.eq(index-1).addClass('on').siblings().removeClass('on');
            }
             /* 轮播内内容的动画*/
            function showAnimate(){
                
                section.eq(index).addClass('aniShow').siblings().removeClass('aniShow');
               
            }

            function play() {
                timer = setTimeout(function () {
                    next.trigger('click');
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }

            next.bind('click', function () {
                if (list.is(':animated')) {
                    return;
                }
               
                if (index == len) {
                    index = 1;
                }
                else {
                    index += 1;
                }


                animate(-eachWidth);
                showButton();
                showAnimate();//显示动画
            });

            buttons.each(function () {
                 $(this).bind('click', function () {
                     if (list.is(':animated') || $(this).attr('class')=='on') {
                         return;
                     }
                     var myIndex = parseInt($(this).attr('index'));
                     var offset = -eachWidth * (myIndex - index);

                     animate(offset);
                     index = myIndex;
                     showButton();
                 })
            });


            //设置页面点击时的特效
            locations.each(function() {
 
                $(this).bind('click', function() {
                for (var i = 0; i < locations.length; i++) {
                    $(locations[i]).removeClass('current')
                };
                    $(this).addClass('current');
                
                });
            });

            container.hover(stop, play);

            play();


            



        });

      //tab选项卡切换
      function tabBar(tabs,blocks){

        tabs.on('click',  function() {
            tabs.each(function() {
                $(this).addClass('hide')
            });
            $(this).removeClass('hide')
            var locations=$(this).data("href");
            blocks.each(function(){
            $(this).addClass("hide");
                })

            $("."+locations).removeClass("hide");

        });
      }

    
