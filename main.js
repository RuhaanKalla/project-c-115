function preload(){

}


    
function setup(){
    canvas = createCanvas(300 , 300)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();
 
    posenet = poseNet(video , modelLoaded);
    posenet.on("pose" , gotPoses);
    }

function draw(){
image(video,0,0,300,300);

}

function take_snapshot(){
    save("myfilter.png");
}

function modelLoaded(){
    console.log("Model Loaded!");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nosex =" + results[0].pose.nose.x);
        console.log("nosey =" + results[0].pose.nose.y);
    }
}

