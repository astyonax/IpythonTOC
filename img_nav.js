// From 
// https://kmahelona.github.io/ipython_notebook_goodies/ipython_notebook_toc.js
// the 28.5.15



// Builds a <img> list of imags from all imgs in DOM
function createIMGNAV(){
    var imgs = "";
    $('#img_nav').html('');
  
    $("div.output_subarea  img").not("#thumb_nav").each(function(i){       
            imgs +='<a href="#'+i+'"><img src="'+ $( this ).attr('src')+'" id="thumb_nav"/> </a>';
            wrapped=1
            while (wrapped){
	            if ($(this).parent("a").length) {
		    	$(this).unwrap();
		    }else{
		    	wrapped=0;
		    }
            }

            $(this).wrap('<a name="'+i+'"></a>');
            /*imgs +='<a name="'+i+'"/><img src="http://pic-zoom.com/media/images/80c9b7b74b.png" id="thumb_nav"> ';*/

	});

 
    $('#img_nav').append(imgs);

};

// Executes the createToc function
setTimeout(function(){createIMGNAV();},100);

// Rebuild to TOC every minute
// setInterval(function(){createIMGNAV();},60000);