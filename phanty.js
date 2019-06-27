//TESTING
//Need a loop, 

var firstname, lastname, email, city, postcode;
var firstnames = ['Holly','Oliver','Horrace','Jessica','Juliet'];
var lastnames = ['Bot','Bot','Bot','Bot','Bot'];
var emails = ['fdgs4g2@gmail.com','dgs4h5og23@hotmail.com','fghd45636@hotmail.com','dfg34g4u561@gmail.com','c352fg42aa@hotmail.com'];
var cities = ['London','Carmarthen','Birmingham','Manchester','Taunton'];
var postcodes = ['N2','SA31','B3','M3','TA1'];

for (i=0; i < 5; i++) {
	//test data variables
	firstname = firstnames[i];
	lastname = lastnames[i];
	email = emails[i];
	city = cities[i];
	postcode = postcodes[i];
	console.log(firstname+", "+lastname+", "+email+", "+city+", "+postcode); 

	//that opens the https://randomuser.me/ website for test data
	//grabs the username

	//opens my website, inputs test data into form, and submits form

	var width = 1024;
	var height = 1768;
	var page, populateForm;
	page = require('webpage').create();

	page.settings.userAgent = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36';
	page.settings.javascriptEnabled = true;
	page.settings.loadImages = false; //Script is much faster with this field set to false
	phantom.cookiesEnabled = true;
	phantom.javascriptEnabled = true;
	page.viewportSize = {
	  width: width,
	  height: height
	};

	console.log('All settings loaded, start with execution');

	page.onLoadFinished = function(status) {

		if (status === 'success') {
		   console.log('success');

		   console.log(firstname+", "+lastname+", "+email+", "+city+", "+postcode);

		   return;
		   populateForm(firstname, lastname, email, city, postcode);

		} else {
		    console.log('Connection failed.');
		    phantom.exit();
		}

	};

	page.onConsoleMessage = function(msg) {
	    console.log(msg);
	};

	page.open('');

}