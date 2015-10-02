$('button').on('click', function(e){

	var button = $('button').hasClass('on')

	if (button == true){
		$('button').removeClass('on').addClass('off');
		$('body').removeClass('light').addClass('dark');
		$('.status').text("Hey, who turned off the lights?");
	}
	else if (button == false){
		$('button').removeClass('off').addClass('on');
		$('body').removeClass('dark').addClass('light');
		$('.status').text("It's so bright in here!");
	}

});

