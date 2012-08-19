function hello() {
	var str = ""
	for(i = 0; i < 4; i++){
		$(".Hello").append(i + "<br/>");
	}
	
}

$(window).load(hello);