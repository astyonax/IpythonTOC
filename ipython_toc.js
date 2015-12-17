// From 
// https://kmahelona.github.io/ipython_notebook_goodies/ipython_notebook_toc.js
// the 28.5.15
// modified by Guglielmo Saggiorato <astyonax@gmail.com>

// Converts integer to roman numeral
function romanize(num) {
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
	roman = '',
	    i;
	for ( i in lookup ) {
	    while ( num >= lookup[i] ) {
		roman += i;
		num -= lookup[i];
	    }
	}
	return roman;
 }

function shorten(text, length){
	return text;
	var llnew=Math.min(text.length,length-3);
	if (text.length!=llnew){
		return text.substring(0,llnew);
	}
	return text;
}

// Builds a <ul> Table of Contents from all <headers> in DOM
function createTOC(maxlvl=2){
    var toc = "";
    var level = 0;
    var levels = {}
    $('#toc').html('');

    $(":header").each(function(i){
	    if (this.id=='tocheading'){return;}
        
	    titleText = (this.innerHTML);
	    openLevel = this.tagName[1];

            if (parseInt(openLevel)>maxlvl){return;}

	    if (levels[openLevel]){
		levels[openLevel] += 1;
	    } else{
		levels[openLevel] = 1;
	    }

	    if (openLevel > level) {
		toc += (new Array(openLevel - level + 1)).join('<ul class="toc">');
	    } else if (openLevel < level) {
		toc += (new Array(level - openLevel + 1)).join("</ul>");
		for (i=level;i>openLevel;i--){levels[i]=0;}
	    }

	    level = parseInt(openLevel);


	    if (this.id==''){this.id = this.innerHTML.replace(/ /g,"-")}
	    var anchor = this.id;
            dots='';
	    if (titleText.length>30) dots='...';
	    toc += '<li><a href="#' + anchor + '">' +  romanize(levels[openLevel].toString()) + '. ' + titleText.substring(0,30)+
		dots+  '</a></li>';
        
	});

    
    if (level) {
	toc += (new Array(level + 1)).join("</ul>");
    }

 
    $('#toc').append(toc);

};

// Executes the createToc function
setTimeout(function(){createTOC();},100);

// Rebuild to TOC every 30 sec
setInterval(function(){createTOC();},30000);
