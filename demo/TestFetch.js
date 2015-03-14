window.fetch("https://jsonp.nodejitsu.com/?url=http://jsonview.com/example.json").then(function (response) {
    return response.json();
}).then(function (json) {
    console.log(json);
});
