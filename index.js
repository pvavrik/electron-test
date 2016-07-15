var Nightmare = require('nightmare');

var nightmare = Nightmare({webPreferences: {nodeIntegration: true}});

nightmare
.viewport(1000,960)
.goto('http://www.beastrestaurant.co.uk')
.evaluate(function () {
	return document.querySelector('html').outerHTML;
})
.end()
.then(function(html) {
	return console.log(html);
});