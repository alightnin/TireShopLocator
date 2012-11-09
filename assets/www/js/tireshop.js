Parse.initialize("zOo3i7EACHMZfYwernLCmbFUaMVX3TDIM2jVufli", "Ps7QM4Ylhtz7Ex3JWGVw83gD0WSJt5CuiUNGIB6A");
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