let context, W, H, bounceRate;

export class Circle {

    constructor(x, y, colour, contextConfig) {
        context = contextConfig.context;
        W = contextConfig.W;
        H = contextConfig.H;
        bounceRate = contextConfig.bounceRate;

        // array to hold the circle path
        this.path = [];

        // circle attributes
        this.x = x;
        this.y = y;
        this.radius = 5;
        this.colour = colour;

        /**  for calculating vertical speed **/
        this.vx = 0;
        this.vy = 1;
        /************************************/

        // random controlled speed
        this.speed = Math.random() * (0.8 - 0.3) + 0.3;

        // random controlled angle - upwards forwards
        this.angle = (Math.PI / 180) * (Math.random() * (360 - 270) + 270);

        // max vertical distance flag
        this.max = false;

        // made up formula for vertical distance
        this.vDistance = this.y / this.angle;

        // circle bounce counter
        this.bounces = 0;
    }

    // function to draw circle
    drawCircle() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = this.colour;
        context.fill();
        context.closePath();
    }

    // function to check if the circle should head up or down
    upOrDown() {
        if (this.max) {
            this.headingDown();
            return;
        }
        this.headingUp();
    }

    // function to recalculate the circle speed, 
    // virtical distance & angle heading up  
    headingUp() {

        // recalculate vertical speed
        this.vy += -this.speed;
        this.vx += this.speed;

        // add path to array
        this.path.push({
            x: this.x,
            y: this.y
        });

        // change path speed
        this.x += this.vx;
        this.y += this.vy;

        // change path angle 
        this.x = (this.radius * Math.cos(this.angle) + this.x);
        this.y = (this.radius * Math.sin(this.angle) + this.y);

        // check the circle has reached its max vertical distance
        if (this.y + this.radius < (0 + this.vDistance)) {

            // reset speed with made up gravity
            this.vy *= 0.1;

            // set max vertical distance flag
            this.max = true;
        }
    }

    // function to recalculate the circle speed, 
    // virtical distance & angle heading down
    headingDown() {

        // add path to array
        this.path.push({
            x: this.x,
            y: this.y
        });

        // recalculate vertical speed 
        this.vy += this.speed;

        this.y += this.vy;

        // check if the circle is has reached the bottom
        if (this.y + this.radius > H) {
            // check the number of bounces
            // after 6, stop the circle
            if (this.bounces === 6) {
                this.stop();
                return;
            }

            this.bounces++;
            this.y = H - this.radius;

            // recalculate the vertical speed using the bounce rate
            this.vy *= -bounceRate;
        }

        // prevent the circle from disappearing 
        if (this.x + this.radius > W) {
            this.x = W - this.radius;
        }

        // change path angle 
        this.x = (this.radius * Math.cos(this.angle) + this.x);
    }

    // stop the circle gradually
    stop() {
        if (this.y > H) {
            this.y = H - this.radius;
            return;
        }
        this.y = H - .1;
    }

}