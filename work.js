function calc_add() {
		var answer = parseFloat($("#A").val()) + parseFloat($("#B").val());
		$("#Answer").html(answer)
}

$(window).load(function(){
	$("#Add").click(calc_add);
});
