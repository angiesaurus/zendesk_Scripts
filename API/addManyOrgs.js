//run in browser console
for (i = 0; i < 200; i++) { //currently will create 200 orgs
	var name = 'Org #' + i; // Org name, will create Org #1, Org #2, etc.
	(function(index) {
		$.ajax('/api/v2/organizations.json', {
				'type': 'POST',
				'contentType': 'application/json',
				'data': JSON.stringify({ //The following is the JSON payload for the org
					'organization': {
						'name': name
					}
				})
			})
			.done(function(data) {
				console.log("added org ", index);
			})
			.fail(function(jqXHR) {
				console.log("request failed");
				console.log('Error creating org:\n' + jqXHR.status + ' ' + jqXHR.responseText);
			});
	})(name);

}
