var app = {
	nyTimesArticles : [],

	initialize: function() {
		app.getNYTimesData();
	},

	makeHTML: function() {
		var theHTML = '';
		for (var i = 0; i < 15 ; i++){
			theHTML += "<div class='nyTimesBooks'>";
			theHTML += "<a href=" + app.nyTimesBooks[i].amazon_product_url + ">";
			theHTML += app.nyTimesBooks[i].title + "</a>";
			theHTML += "</div>";
		}
		$('.container').html(theHTML);
	},

	getNYTimesData: function() {
		console.log("Get NY Times Data");
		var nyTimesURL = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=rOHpyb7Zeldia1QaLXofRnDSZcVvyUSa';
		console.log(nyTimesURL);
		$.ajax({
			url: nyTimesURL,
			type: 'GET',
			dataType: 'json',
			error: function(err){
				console.log("Uh oh...");
				console.log(err);
			},
			success: function(data){
				app.nyTimesBooks = data.results.books
				app.makeHTML();

			}
		});
	}



};