var last = document.getElementById("last");
var request = new XMLHttpRequest();


setInterval(() => {
    request.open("GET", "http://localhost:3000/last");
    request.responseType = "json";
    request.send();
    request.onload = function(){
        var msg = request.response;
        last.innerText = `topic: ${msg.topic} \n msg: ${msg.message}`;
    }
},5000);