// run this in JS console in browser to automatically create groups 0-200 named 'group0', 'group1', etc...
for(x=0; x<200; x++) {
  var name = "group" + x;
  $.ajax({
    url: '/api/v2/groups.json',
    contentType:'application/json',
    type: 'POST',
    data: JSON.stringify({group:{name: name}})
  });
}