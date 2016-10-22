var btn=document.getElementById('btn')
function a(){
	window.location.href='topublish.html'
}
$('.middlecontent #jia').click(function(event) {
		var i=parseInt($(this).next().html())+1;

	$(this).next().html(i);
	});
	$('.middlecontent #jian').click(function(event) {
		var j=parseInt($(this).prev().html())-1;
		if (j<0) {
			j=0;
		}
	$(this).prev().html(j);
	});
