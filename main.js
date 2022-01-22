img = ""

 function preload()
{
    img = loadImage("TV.jpg")
}

function setup()
{
canvas = createCanvas(640 , 420)
canvas.center()
objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log(" Model Loaded!")
    status1 = true;
    objectDetector.detect(img , gotResult)
}

function gotResult(error , result)
{
if (error) {
    console.log(error)
}
else {
console.log(result)
}
}

function draw()
{
    image(img , 0 , 0 , 640 , 420)
    fill("#ff0000")
    text("Speaker" ,  45 , 75)
    noFill();
    stroke("#ff0000")
    rect(30 , 60 , 450 , 350)

    fill("#ff0000")
    text("Tv" ,  320 , 120)
    noFill();
    stroke("#ff0000")
    rect(300 , 90 , 270 , 320)
}