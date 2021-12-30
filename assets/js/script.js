/*
  Author: Steven Varada Salazr
  Project: Resume Website
  File: scripot.js
  Date: Dec.29-2021
  Description: All of the scripts for each page
        Sections: 
            1. index.html - Varaible text, card slider, and contact bubble
            2. portfolio.html - animation on scroll
            3. contactMe.html - email interaction
*/

/* Homepage */ 

/* Variable Text */

/* Gobal Varaibles */
const text = ['Software Engineer', 'Computer Engineer', 'Web Developer' ];
let count = 0; // Index count of the string
let index = 0; // Index of word in text arrary
let currentText = ''; // complete string of the array current index
let displayText = ''; // string being displayed

/* Typiing Function
   ify fucntion - Invokes(calls) itself */
(function type(){
    // At the end of the array index
    if(count === text.length){
        count = 0;
    }
    // Takes whole string of array current index
    currentText = text[count];
    /* Extracts part of string to place into a new string
    slice( *satrt position, *end position) */
    displayText = currentText.slice(0,++index);

    document.querySelector('.typing').textContent = displayText;
    // When curretext is completed
    if(displayText.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 200);
}());

/*  This is the card slider general settings 
    ****This is a MIT licened slider**** */
$(document).ready(function() {			
    $("#content-slider").lightSlider({
    loop:true,
    item: 1,
    autoWidth: true,
    auto: true,
    speed: 1000,
    pauseOnHover: true,
    pause: 5000,
    keyPress:true
    });
});


