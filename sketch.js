//Topic 1.1 
//Object orientation revisted
//part one

var flying_saucer;
var flying_saucers = [];

function setup()
{
    createCanvas(800,600);
    noStroke();

    flying_saucers_num = 10;
    for(var i = 0; i < flying_saucers_num; i++)
    {
        flying_saucers.push(new FlyingSaucer(random(50, width), random(50, height-150)));
    }

}

function draw()
{
    background(50,0,80);
    
    //draw the ground
    fill(0,50,0);
    rect(0,height - 100, width, 100);

    //draw the flying saucers
    for(var i = 0; i < flying_saucers.length; i++)
    {
        if(flying_saucers[i].beem_on)
        {
            flying_saucers[i].beem();
        
        }
        flying_saucers[i].draw();
        flying_saucers[i].hover();
        flying_saucers[i].lighten();
    }
    
}


function mousePressed()
{
    flying_saucer.beem_on = !flying_saucer.beem_on;
}

function keyPressed()
{
    if(key == ' ')
    {
        flying_saucer.beem_on = !flying_saucer.beem_on;
    }
}



function FlyingSaucer(x, y){
    this.x = x,
    this.y = y  ,
    this.width = random(50, 200)
    this.height = this.width/4,
    this.window_width = 0.5,
    this.window_height = 2,
    this.base_height = .5,
    this.lights_num = round(random(5, 20)),
    this.brightness = [],
    this.beem_on = true,

    this.hover = function()
    {
        this.x += random(-2,2);
        this.y += random(-2,2);

        if(this.y > height - 105)
        {
            this.y = height - 105;
        }

        if(this.y < 50)
        {
            this.y = 50;
        }

        if(this.x > width - 50)
        {
            this.x = width - 50;
        }

        if(this.x < 50)
        {
            this.x = 50;
        }

        if(this.beem_on && random() > 0.95)
        {
            this.beem_on = false;
        }
        else if(!this.beem_on && random() > 0.98)
        {
            this.beem_on = true;
        }
    };

    this.beem = function()
    {
        if(random() > 0.2)
        {
            fill(255,255,0, 100);
            beginShape();
            vertex(this.x - this.width/4, this.y);
            vertex(this.x + this.width/4, this.y);
            vertex(this.x + this.width/2, height-100);
            vertex(this.x - this.width/2, height-100);
            endShape(CLOSE);
        }
    };

    this.draw = function()
    {
       //draw the flying saucer
        fill(175,238,238);
        arc(
            this.x,
            this.y,
            this.width*this.window_width,
            this.height*this.window_height,
            PI,
            TWO_PI)
        fill(150);
        arc(
            this.x,
            this.y,
            this.width,
            this.height,
            PI,
            TWO_PI);
        fill(50);
        arc(
            this.x,
            this.y,
            this.width,
            this.height*this.base_height,
            0,
            PI);
    };

    this.lighten = function()
    {
            // add lights to the flying saucer
        fill(255);
        var incr = this.width/(this.lights_num-1);
        for(var i = 0; i < this.lights_num; i++)
        {
            fill(this.brightness[i]);
            ellipse(
                this.x - this.width/2 + i * incr,
                this.y, 5, 5);
                this.brightness[i] = (this.brightness[i] + 1) % 255;
        }
    };

    

    for(var i = 0; i < this.lights_num; i++)
    {
        this.brightness.push((255/this.lights_num) * i);
    };

    
};