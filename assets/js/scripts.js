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
        text: "Jag driver en enskild firma och kan varmt rekommendera East Ekonomi, ett tryggt stöd att ha inom redovisning. De bollar gärna idéer, engagerar sig i din verksamhet och planering och är snabba på att svara på mail och frågor. De bemöter dig alltid på ett både professionellt, trevligt och personligt sätt!",
        speaker: "- Siiri Soveri, ägare av YogaSiiri",
        image: "./assets/images/woman-coffee.png",
        image_alt: "Woman dressed in light blue and green, brown hair, drinking from a mug"
    },
    {
        text: "Skötsam och proffsig. Ägna tiden åt det du är bäst på och lämna över bokföringen till ett proffs!",
        speaker: " - Lars Olsson, ägare av EL-PE 3000",
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