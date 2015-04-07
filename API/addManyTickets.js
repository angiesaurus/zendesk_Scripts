for(x=0; x<500; x++) {
  var title = "Ticket #" + x;
  var subject = "Test ticket #" + x;
  var body = "This is test ticket #" + x;
  $.ajax({
    url: '/api/v2/tickets.json',
    contentType:'application/json',
    type: 'POST',
    data: JSON.stringify({"ticket": {"subject": subject , "comment": { "body": body }}})
  });
}
