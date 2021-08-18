Webcam.set({
    width: 310,
    height: 300,
    image_format: 'png',
    png_quality: 90,

    constraints: {
        facingMade: 'environment'
    }
});
camera = document.getElementById("capturediv");
Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
        console.log("called");
        document.getElementById("identifydiv").innerHTML = '<img id="captured_image" src="' +data_uri+ '"/>';
    })
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded(){}

function identify_snapshot(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if (error){
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("result").innerHTML = results[0].label;
    }
}