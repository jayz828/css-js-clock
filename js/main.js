/**
 * Created by jasonnatividad on 4/2/17.
 */


"use strict";


(function Main(){

    var handPositioning = [];
    var initialLocation = 84;

    for (var position = 0; position < 60; position++) {


        if (initialLocation >= 360) {
            initialLocation = 0;
        }



        handPositioning[position] = {
            time: position,
            location: initialLocation += 6

        };

        //console.log(handPositioning.time, handPositioning.location);
        //console.log(handPositioning[0]);
        console.log(handPositioning[0]);
    }



    function setDate() {
        var currentDate = new Date();
        console.log(currentDate.getSeconds());
        var seconds = currentDate.getSeconds();
        var minutes = currentDate.getMinutes();
        var hours = currentDate.getHours();

        handPosition(seconds, minutes, hours);

    }


    function handPosition(seconds, minutes, hours) {

        var secondHand = document.querySelectorAll(".second-hand");
        var minuteHand = document.querySelectorAll(".minute-hand");
        var hourHand = document.querySelectorAll(".hour-hand");


        var degreesSeconds = handPositioning[seconds].location;
        var degreesMinutes = handPositioning[minutes].location;
        var degreesHours = handPositioning[hours].location;
        //console.log(degreesMinutes);

        console.log(degreesHours);

        secondHand[0].style.transform = "rotate(" + degreesSeconds + "deg)";
        minuteHand[0].style.transform = "rotate(" + degreesMinutes + "deg)";
        hourHand[0].style.transform = "rotate(" + degreesHours + "deg)";


    }


    setInterval(setDate, 1000);


})();


