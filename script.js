var ball = document.getElementById("ball"); //fetch the ball

ball.style.top = ball.offsetTop + "px";   //distance fron top
ball.style.left = ball.offsetLeft + "px";  //distance fron left

// height and width of ball
var ballHeight = ball.offsetHeight;
var ballWidth = ball.offsetWidth;

// handling keyboard events
window.addEventListener("keypress", function (event) {
    var which = event.which;
    console.log(typeof (which))
    check(which);
});

// converting the number to string
function setValue(value) {
    return value + "px";

}

// checking the desired keypress
function check(keypress) {

    var top = parseInt(ball.style.top);
    var left = parseInt(ball.style.left);


    // W is pressed
    if (keypress === 119 || keypress === 87) {
        if (top > 5) {
            ball.style.top = setValue(top - 15);
        }
        console.log("W");
    }

    // A is pressed
    else if (keypress === 97 || keypress === 65) {
        if (left > 5) {
            ball.style.left = setValue(left - 15);
        }
        console.log("A");
    }

    // D is pressed
    else if (keypress === 100 || keypress === 68) {
        console.log("D");
        if (left < (window.innerWidth - ballWidth) - 5) {
            ball.style.left = setValue(left + 15);
        }

    }

    // S is pressed
    else if (keypress === 83 || keypress === 115) {
        console.log("S");
        if (top < (window.innerHeight - ballHeight) - 5) {
            ball.style.top = setValue(top + 15);
        }

    }
}
