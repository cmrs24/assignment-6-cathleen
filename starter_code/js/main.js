/*
//city-type should be named city-name
//make it switch once and then go from there
//style.css file has classes for images... so when someone types in name of city, apply a class
//the way to apply the class is .att() >> $('body').att set body equal to class
//('#submit-btn').click(selectCity);
*/

/*wait to run jquery*/

	$(document).ready(function(){

/*user enters city name and clicks update*/

	$("#submit-btn").click(updateBackground);

/*create function*/
/*prevent form submission*/
	function updateBackground(event) {
		event.preventDefault();
	

/*capture & store the value*/

	var cityChoice = $("#city-type").val();

/*change background css class depending on value*/

	if (cityChoice === 'New York' || cityChoice === 'New York City'|| cityChoice === 'NYC' || cityChoice === 'new york' || cityChoice === 'new york city' || cityChoice === 'nyc') {

	$('body').removeClass('background').addClass('nyc');

	}

	else if (cityChoice === 'San Francisco' || cityChoice === 'SF'|| cityChoice === 'Bay Area') {

	$('body').removeClass('background').addClass('sf');

	}

	else if (cityChoice === 'Los Angeles' || cityChoice === 'LA'|| cityChoice === 'LAX') {

	$('body').removeClass('background').addClass('la');

	}

	else if (cityChoice === 'Austin' || cityChoice === 'ATX') {

	$('body').removeClass('background').addClass('austin');

	}
  
	else if (cityChoice === 'Sydney' || cityChoice === 'SYD') {

	$('body').removeClass('background').addClass('sydney');

	}

	else {

	$('body').addClass('background');

	}
  
}

});
