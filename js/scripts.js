// Make Foundation Go!
//$(document).foundation();

// Your Awesome Scripts!
$(document).ready(function(){

//Good stuff
	new Maplace({
		show_markers: true,
		locations: [{
			lat: 45.9, 
			lon: 10.9,
			zoom: 8
		}]
	}).Load(); 	

	console.log('Page Loaded. Lets Do this!');

}); 
