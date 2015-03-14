window.fetch("https://jsonp.nodejitsu.com/?url=http://jsonview.com/example.json").then((response) => {
	return response.json();
}).then((json) => {
	console.log(json);
});