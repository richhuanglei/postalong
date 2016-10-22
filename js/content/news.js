      //tab选项卡切换
      function tabBar(tabs,blocks){

        tabs.on('click',  function() {
        	console.log("asfe")
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



$(function(){
	var choslist=$(".choose li");
	var wrapContains=$(".content .wrapContain")



	        choslist.on('click',  function() {
       
            choslist.each(function() {
                $(this).removeClass('currentHref')
            });
            $(this).addClass('currentHref')
            var locationhref=$(this).data("href");
            wrapContains.each(function(){
            $(this).addClass("hide");
                })

            $("."+locationhref).removeClass("hide");

        });

	
})