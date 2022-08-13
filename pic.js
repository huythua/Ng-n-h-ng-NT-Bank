var slideWidth = document.getElementsByClassName("slide")[0].clientWidth;
var slideShow = document.getElementsByClassName("slide_show")[0];
var Img = slideShow.getElementsByTagName("img");
var max = slideWidth * Img.length;
max -= slideWidth;
var slide = 0;

function Next(){
    if(slide < max) slide += slideWidth;
    else slide = 0;
    slideShow.style.marginLeft = '-' + slide + 'px';
}
function Previous(){
    if(slide == 0) slide = max;
    else slide -= slideWidth;
    slideShow.style.marginLeft = '-' + slide + 'px';
}
setInterval(function() {
    Next();
}, 3000);

// var video= document.getElementById("myVideo");
// var btn = document.getElementById("myBtn");
// function myFunction(){
//     if(video.paused){
//         video.play();
//         btn.innerHTML="Pause";
//     }
//     else{
//         video.pause();
//         btn.innerHTML="Play";
//     }
// }