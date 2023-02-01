"use strict";

const shareBtn = document.querySelector(".icon-share")
const socialMedia = document.querySelector(".social-media")
const returnBtn = document.querySelector(".icon-share2")
const michellePart = document.querySelector(".michelle")

function displayBtn(){
    michellePart.classList.add(".hidden")
    socialMedia.classList.remove("hidden")

    socialMedia.style.display = ""
    michellePart.style.display = "none"
} 

function hideBtn(){
    michellePart.classList.remove(".hidden")
    socialMedia.classList.add(".hidden")

    socialMedia.style.display = "none"
    michellePart.style.display = ""
}
