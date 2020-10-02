"use strict";

var guest = ["question 1", "guestion 2", "question 3"];
var answers = ["1", "2", "3"];
var result = document.getElementById("result");

function getStart () {
    for(var i=0; i<guest.length; i++) {
        var answer = prompt(guest[i]);
        result.innerHTML += "<div class='item item" + i + "'>" + answer + "</div>";

        if (answer == answers[i]) {
			result.innerHTML += "<div class='answer answer" + "-true" + "'>" + "true" + "</div>" + "</br>";
		} else {
			result.innerHTML += "<div class='answer answer" + "-false" + "'>" + "false" + "</div>" + "</br>";
		}
    }   
}