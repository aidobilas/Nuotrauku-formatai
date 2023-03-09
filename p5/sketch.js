// Fisrt frame
function setup() {
    createCanvas(windowWidth, windowHeight); // x, y
    background("crimson");
}
 
// Changes things when screen is resised
function windowResized() {
    createCanvas(windowWith, WindowHeight)
    background("crimson");
}

// Frames per seconds
// function draw() {
//     fill(random(255), (random(255), (random(255), // r, g, b

//     stroke("white");
//     strokeWeight(5)
//     ellipse(mouseX, mouseY, 55) // x, y, radius
// }

// Draws when mouse Dragged
function mouseDragged() {
    fill(random(255), random(255), random(255)) // r, g, b

    stroke("white")
    strokeWeight(2)
    ellipse(mouseX, mouseY, 55) // x, y, radius
}