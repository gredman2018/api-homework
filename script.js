var app = {
	nyTimesArticles : [],
	flickrData : [],

	initialize: function() {
		app.getNYTimesData();
	},

	makeHTML: function() {
		var theHTML = '';
		for (var i = 0; i < app.nyTimesArticles.length; i++){
			theHTML += "<div class='flickrArticle'>";
			theHTML += "<h3>" + app.book_detailsb[i].title + "</h3>";
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
				//console.log(data);
				app.nyTimesBooks = data.response.docs;
				console.log(app.nyTimesBooks)
				// app.nyTimesArticles = data.book_details.title;
				// console.log(app.nyTimesArticles);
				// app.makeHTML();
			}
		});
	}



};