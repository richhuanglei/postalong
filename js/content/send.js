	$(
		function(){

			$(".increase").click(function(){

				var numNode=$(this).prev(".num")
				var numVal=Number(numNode.val())+1
				numNode.val(numVal)
			});
			$(".reduce").click(function(){

				var numNode=$(this).next(".num")
				var numVal=Number(numNode.val())-1
				if (numVal>=0) {
				numNode.val(numVal)
				}
			});
		}

		)
// tab
var myclick = function(v) {  
                var llis = document.getElementsByTagName("li");  
                for(var i = 0; i < llis.length; i++) {  
                    var lli = llis[i];  
                    if(lli == document.getElementById("tab" + v)) {  
                        lli.style.backgroundColor = "#F2F2F2";  //tab颜色
                    } else {  
                        lli.style.backgroundColor = "#F2F2F2";  
                    }  
                }  
  
                var divs = document.getElementsByClassName("tab_css");  
                for(var i = 0; i < divs.length; i++) {  
  
                    var divv = divs[i];  
  
                    if(divv == document.getElementById("tab" + v + "_content")) {  
                        divv.style.display = "block";  
                    } else {  
                        divv.style.display = "none";  
                    }  
                }  
  
            }  

/*
* 图片上传。服务器地址,成功返回,失败返回参数格式依照jquery.ajax习惯;
* 其他参数同WebUploader
*/

$('#goodspic #box #test').diyUpload({
    url:'server/fileupload.php',
    success:function( data ) {
        console.info( data );
    },
    error:function( err ) {
        console.info( err );    
    }
});
$('#as').diyUpload({
    url:'server/fileupload.php',
    success:function( data ) {
        console.info( data );
    },
    error:function( err ) {
        console.info( err );    
    },
    buttonText : '选择文件',
    chunked:true,
    // 分片大小
    chunkSize:512 * 1024,
    //最大上传的文件数量, 总文件大小,单个文件大小(单位字节);
    fileNumLimit:50,
    fileSizeLimit:500000 * 1024,
    fileSingleSizeLimit:50000 * 1024,
    accept: {}
});
