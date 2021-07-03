status = "";

function setup()
{
  canvas=createCanvas(620,420);
  canvas.center();
  video.hide();
}

function play()
{
  video.play();
  video.loop();
}

function preload()
{
  video=createVideo("video.mp4");
}

function draw()
{
   image(video,0,0,620,420);
}

function modelLoaded()
{
  console.log("COCO SSD Model Initiated!");
  status = true;
}

function gotResult()
{

}
