//Topic 1.1 
//Object orientation revisted
//part one

var flying_saucer;

function setup()
{
    createCanvas(800,600);
    noStroke();

    flying_saucer = {
        x: 400,
        y: 200  ,
        width: 200,
        height: 50,
        window_width: 0.5,
        window_height: 2,
        base_height: .5,
        lights_num: 16,
        brightness: []
    };

    for(var i = 0; i < flying_saucer.lights_num; i++)
    {
        flying_saucer.brightness.push((255/flying_saucer.lights_num) * i);
    }
}

function draw()
{
    background(50,0,80);
    
    //draw the ground
    fill(0,50,0);
    rect(0,height - 100, width, 100);
    
    //draw the flying saucer
    fill(175,238,238);
    arc(
        flying_saucer.x,
        flying_saucer.y,
        flying_saucer.width*flying_saucer.window_width,
        flying_saucer.height*flying_saucer.window_height,
        PI,
        TWO_PI)
    fill(150);
    arc(
        flying_saucer.x,
        flying_saucer.y,
        flying_saucer.width,
        flying_saucer.height,
        PI,
        TWO_PI);
    fill(50);
    arc(
        flying_saucer.x,
        flying_saucer.y,
        flying_saucer.width,
        flying_saucer.height*flying_saucer.base_height,
        0,
        PI);

    //hovver the flying saucer
    flying_saucer.x += random(-2,2);
    flying_saucer.y += random(-2,2);
    
    // add lights to the flying saucer
    fill(255);
    var incr = flying_saucer.width/(flying_saucer.lights_num-1);
    for(var i = 0; i < flying_saucer.lights_num; i++)
    {
        fill(flying_saucer.brightness[i]);
        ellipse(
            flying_saucer.x - flying_saucer.width/2 + i * incr,
            flying_saucer.y, 5, 5);
            flying_saucer.brightness[i] = (flying_saucer.brightness[i] + 1) % 255;
    }
}