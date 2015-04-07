for(x=0; x<200; x++) {
  var name = "User #" + x;
  var email = "User" + x + "@testuser.com";
  $.ajax({
    url: '/api/v2/users.json',
    contentType:'application/json',
    type: 'POST',
    data: JSON.stringify({user:{name: name, email:email}})
  });
}
