//   Fade in glass container on page load, 
//   credit for fade effect code: 
//   https://www.geeksforgeeks.org/how-to-add-fade-in-effect-using-pure-javascript/ 

let opacity = 0;
let intervalId = 0;

window.onload = showGlassContainer();

function showGlassContainer() {

    setInterval(fadeIn, 200)
}


function fadeIn() {

    let glassContainer = document.getElementById('glassContainer');
    opacity = Number(window.getComputedStyle(glassContainer).getPropertyValue('opacity'));

    if (opacity < 1) {
        opacity = opacity + 0.22;
        glassContainer.style.opacity = opacity;
    } else {
        clearInterval(intervalId);
    }
}


//   Setting and changing the content in testimonials section 

const testimonials = [{
        text: "Sarah har haft en otrolig förmåga att hjälpa mig genom alla moment inom bolaget. Jag är väldigt tacksam för den snabba hjälpen och Sarahs fantastiska flexibilitet i vårt samarbete. Har du tankar på att använda dig av en redovisningsbyrå? Då rekommenderar jag starkt Sarah och East ekonomi!",
        speaker: "- Theodor Zätterström, ägare av The O AB",
        image: "./assets/images/man-costume.png",
        image_alt: "Man in blue collar shirt seen from the front"
    },
    {
        text: "Skötsam och proffsig. Ägna tiden åt det du är bäst på och lämna över bokföringen till ett proffs!",
        speaker: " - Lars Olsson, ägare av EL-PE 3000 AB",
        image: "./assets/images/working-man.png",
        image_alt: "Man with a yellow workers helmet, holding a spirit level"
    }
];

let talkBubbleText = document.getElementById("talk-bubble-text");
let talkBubbleSpeaker = document.getElementById("talk-bubble-speaker")
let testimonialsImage = document.getElementById("testimonials-img");

// Setting content to the testimonial section when window loads
window.onload = function() {
    talkBubbleText.innerHTML = testimonials[0].text;
    talkBubbleSpeaker.innerHTML = testimonials[0].speaker;
    testimonialsImage.src = testimonials[0].image;
    testimonialsImage.alt = testimonials[0].image_alt;
}

// Changing the content in testimonials section every 9 seconds
setInterval(changeTestimonialContent, 9000);
let counter = 0;

function changeTestimonialContent() {

    talkBubbleText.innerHTML = testimonials[counter].text;
    talkBubbleSpeaker.innerHTML = testimonials[counter].speaker;
    testimonialsImage.src = testimonials[counter].image;
    testimonialsImage.alt = testimonials[counter].image_alt;
    counter++;
    if (counter >= testimonials.length) {
        counter = 0;
    }

}