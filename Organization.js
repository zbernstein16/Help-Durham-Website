$(document).ready(function() {

  var token = localStorage.token;

  $("#getEvents").click(function() {

      var req = new XMLHttpRequest();
      req.open("GET", "http://localhost:5000/events");
      req.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
      req.setRequestHeader('Authorization', token);
      req.addEventListener("load", reqListener);
      req.send();

  })


  function reqListener() {
    var result = JSON.parse(this.responseText);
    console.log(result);
    //console.log(token);
  }

})
