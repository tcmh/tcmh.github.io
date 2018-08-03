$(document).ready(function() {
	$(".searchInput").on("keyup", function() {
		searchTable();
	});
});

function searchTable() {
	var productName = $("#productName").val().toLowerCase();
	var category = $("#category").val().toLowerCase();
	var priceMin = $("#priceMin").val();
	var priceMax = $("#priceMax").val();

	$("tr").show();

	$("td.product").each(function() {
		if (!$(this).text().toLowerCase().includes(productName)) {
			$(this).parent().hide();
		}
	});

	$("td.category").each(function() {
		if (!$(this).text().toLowerCase().includes(category)) {
			$(this).parent().hide();
		}
	});

	//!isNan checks if a string is a number
	// + converts a string to a number

	if (priceMin.length > 0 && !isNaN(priceMin)) {
		$("td.price").each(function() {
			if (+$(this).text().substr(1) < +priceMin) {
				$(this).parent().hide();
			}
		});
	}

	if (priceMax.length > 0 && !isNaN(priceMax)) {
		$("td.price").each(function() {
			if (+$(this).text().substr(1) > +priceMax) {
				$(this).parent().hide();
			}
		});
	}
}