Parse.initialize("Ti2TFQTWv0P1QBzSERj1DieTWBaMACi9K51FDzX9", "CqyI2RBHcmke3hIJU5nWtLY9GnvoTsVQyodlq965");
Shops = Parse.Object.extend("Shops");

var cloc

$(document).ready(function(){
	cloc=null;
	navigator.geolocation.getCurrentPosition(function(pos) {
		cloc = {longitude:pos.coords.longitude, latitude:pos.coords.latitude};
	}, function(err) {
		doAlert("Sorry, but we couldn't find your location.\nYou may not post a cow tip.");
	});

	
	$("#UploadShop").on("submit", function(e){
		e.preventDefault();
		
		var address = $("#shopname").val();
		var rating = $("#rating").val();

		//TBD: Validation
		var shop = new Shops();
		var point = new Parse.GeoPoint({latitude: currentLocation.latitude, longitude: currentLocation.longitude});
		shop.save(
				{
					address: address,
					rating: rating
					location: point
				},{
					success:function(object) {
						console.log("Saved shop");
						doAlert("Shop Saved!", function() { document.location.href='index.html'; });
					},
					error:function(model, error) {
						console.log("Error saving");
					}
				});
	});
});