$(document).ready(function() {

  var token = localStorage.token;
  var user = JSON.parse(localStorage.user);


  const eventList = $("#eventList");


  $("#post").click(function() {
    console.log("Post");
    var title = $("#eventTitle").val();
    var description = $("#eventDesc").val();
    var date = $("#eventDate").val();
    var req = new XMLHttpRequest();
    req.open("POST", "http://localhost:5000/events?email="+user.email);
    req.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    req.setRequestHeader('Authorization', token);
    req.addEventListener("load", postEventListener);
    req.send({title:title,desc:description,date:date,orgEmail:user.email,orgName:user.orgName});

  })

  $("#getEvents").click(function() {



      var req = new XMLHttpRequest();
      req.open("GET", "http://localhost:5000/events?email="+user.email);
      req.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
      req.setRequestHeader('Authorization', token);
      req.addEventListener("load", getEventsListener);
      req.send();

  })


  function getEventsListener() {
    var result = JSON.parse(this.responseText);
    console.log(result);
    for (i in result.events) {
      var event = result.events[i];
      eventList.append(generateEventLiHTML(event));
    }
  }

  function postEventListener() {
      console.log(this.responseText);
      console.log("Post event");
  }


  function generateEventLiHTML(event) {


    return "<li><details><summary>" + event.title + "</summary></details></li>";
  }

})
