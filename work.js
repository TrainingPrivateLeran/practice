function alphabet(start) {
	var alc = "";
	for(i = start; i<start+26; i++){
		alc = alc + String.fromCharCode(i) + ", ";
	}
	alc = alc + "<br/>";
	return alc;
}



function hello() {
	$(".Hello").append(alphabet(97))
	
}

$(window).load(hello);