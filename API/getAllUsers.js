var usersIDArray = [];
var i = 0;
var next_page;

function finalOutput(usersIDArray) {
	console.log("\n\nTotal # of users: " + usersIDArray.length);
}

function makeCall(pageNum) {
	if (next_page === null) {
		finalOutput(usersIDArray);
		return;
	}
	i++;
	$.getJSON('/api/v2/users.json?page=' + i, function(request) { // change API endpoint to any that has a name key
			var k = 0;
			next_page = request.next_page;
			while (k < request.users.length) {
				var userName = request.users[k].name;
				console.log(userName);
				usersIDArray.push(userName);
				k++;
			}
		})
		.done(function(data) {
			makeCall(i);
		});
}

makeCall();
