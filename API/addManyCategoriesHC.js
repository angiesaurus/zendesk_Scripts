//run in browser console while logged into test account/help center
for(x=0; x<50; x++) {
  var title = "Category #" + x;
  var body = "This is test category #" + x;
  $.ajax({
    url: '/api/v2/help_center/en-us/categories.json',
    contentType:'application/json',
    type: 'POST',
    data: JSON.stringify({ "category" : { "name" : title, "description" : body }})
  });
}
