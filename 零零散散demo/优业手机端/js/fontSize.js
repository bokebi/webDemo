(function(){
	var html = document.documentElement;
	var htmlWidth = html.getBoundingClientRect().width;
	/*以iphone6为标准，1rem = 750/15 = 50px*/
	html.style.fontSize = htmlWidth/15 +"px";
})()