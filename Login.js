$(document).ready(function() {

  $("#login").click(function() {


      var email = $("#emailInput").val();
      var password = $("#passwordInput").val();
      var req = new XMLHttpRequest();
      req.open("POST", "http://localhost:5000/authenticate");
      req.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
      var params = "email="+email+"&password="+password;
      req.addEventListener("load", reqListener);
      req.send(params);

  })


  function reqListener() {
    var result = JSON.parse(this.responseText);
    if (result.success === true) {
      var token = result.token;

      localStorage.token = token;
      $(location).attr('href', './OrganizationPage.html')
    }
  }

})
