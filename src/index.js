/**
 * YIELDIFY CHALLENGE
 * Author: David Kananda
 */

// add listener for window's resize event to re-initialise/re-draw canvas 
window.addEventListener('resize', initCanvas, false);

let canvas = document.getElementById("canvas");

// import the circle module
import { Circle } from './circle';

function initCanvas() {
    
    // set canvas to 100% height and width offset by 30 pixels each
    canvas.width = window.innerWidth - 30;
    canvas.height = window.innerHeight - 30;

    // array to hold colours for the circles
    let colours = ["black", "green", "blue"];
    
    // array to hold the circles
    let circles = [];

    // get canvas context
    let context = canvas.getContext("2d"),
        W = canvas.width, 
        H = canvas.height,
        
        // for controlling the circle bounce
        bounceRate = .4;
    
    function clearCanvas() {
        context.clearRect(0, 0, W, H);
    }   

    // listen for click event on canvas
    canvas.addEventListener('click', function (e) {
        
        // mouse click position
        var rect = this.getBoundingClientRect(), 
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        for(var i=0; i < colours.length; i++) {
            
            // add the new Circle instance to the circles array
            circles.push(new Circle(x, y, colours[i], { 
                context: context,
                W: W, 
                H: H,
                bounceRate: bounceRate
            })); 
        }
        
    });


    (function update() {

        clearCanvas();
        for (var i = 0; i < circles.length; i++) {
            
            var circle = circles[i];

            // draw current circle
            circle.drawCircle();

            // determine the direction the circle is to move 
            circle.upOrDown(); 
        }

        // perform an animation calling update function
        requestAnimationFrame(update);
    })();
}

initCanvas();
