difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);
    video.position(100,200)

    canvas = createCanvas(500,500);
    canvas.position(900,200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses)
}
function draw(){
    background('#800000');
    
    text('TEXT',50,50);
    fill('#ffffff');
    textSize(difference);
}
function modelLoaded(){
    console.log('PoseNet Load Status: YES, FUNCTIONAL')
}
function gotPoses (results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        righttWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log(" LeftWristX = " + leftWristX);
        console.log(" RightWristX = " + rightWristX);
        console.log(" Difference = " + difference);
        
    }
    
}