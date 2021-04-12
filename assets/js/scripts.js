/* Fade in glass container on page load, 
   credit for fade effect code: 
   https://www.geeksforgeeks.org/how-to-add-fade-in-effect-using-pure-javascript/ */

var opacity = 0;
var intervalId = 0;

window.onload = showGlassContainer();

function showGlassContainer() {

    setInterval(fadeIn, 200)
}


function fadeIn() {
      
var glassContainer = document.getElementById('glass-container');
opacity = Number(window.getComputedStyle(glassContainer).getPropertyValue('opacity'));

if (opacity < 1) {
opacity = opacity + 0.22;
glassContainer.style.opacity = opacity;
} else {
    clearInterval(intervalId);
}
}

/* Show on scroll functionality, credit: 
https://stackoverflow.com/questions/20307555/how-to-make-text-appear-on-scroll-in-html/20308531 */
/*
var body = document.getElementsByTagName('body')[0];
var parent = document.getElementById('parent-div');
var child = document.getElementById('child-div');
body.onscroll = function(){
    if(document.documentElement.scrollTop>=child.offsetTop) {
        child.style.display='block';
    }
};*/