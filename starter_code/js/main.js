
/*Cathleen's note: I did not have much on my own for assignment 6, I had a very difficult 
time with this assignment! Will be re-doing over the weekend */


var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

	$(document).ready(function(){


	for(i=0;i<cities.length;i++) {
		$('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
	}


$('form').on('change', '#city-type', function(){
	var city = $('#city-type').val();
	if (city === 'NYC') {
		$('body'.attr('class', 'nyc'); 
	}

	else if (city === 'SF') {
	$('body'.attr('class', 'sf');
	}	


	else if (city === 'LA') {
	$('body'.attr('class', 'la');
	}

	else if (city === 'LA') {
	$('body'.attr('class', 'la');
	}


});


  

});
