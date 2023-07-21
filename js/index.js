var target = document.getElementById('fact');
var titles = [
    "The only muscle that never tires is the heart.",
    "The entire surface of your skin is replaced every month, \nwhich put another way means you have about 1,000 different skins in your life!",
    "Bodies give off a tiny amount of light that is too weak for the eye to see.",
    "The word “muscle” comes from Latin term meaning “little mouse“, \nwhich is what Ancient Romans thought flexed bicep muscles resembled.",
    "Your left lung is about 10 percent smaller than your right one.",
    "Human teeth are just as strong as shark teeth.",
    "Dopamine makes you addicted to seeking information.",
    "There are genes that determine whether you are an early riser or a night owl.",
    "We can udnretsnad any msseed up stnecene as lnog as the lsat \nand frsit lteerts of wdros are in crrcoet palecs. Suhc as tihs stnecene.",
    "Having siblings is proven to help with getting along well with peers.",
    "Hearing a single negative thing could damage at least five positive memories.",
    "Men make more jokes as compared to women on average.",
    "People in blue rooms are also much more productive.",
    "The smarter the individual, the more selective they become.",
    "A cloud can weigh around a million pounds.",
    "Animals use magnetic field from Earth for orientation.",
    "Most of the oxygen on earth is produced by our oceans.",
    "The human stomach can dissolve razor blades.",
    "Rats laugh when they are tickled.",
    "Hot water freezes faster than cold water."
];

function newTitle () {
    var i = (Math.random() * titles.length) | 0;
    target.innerText = '" '+titles[i]+' "';
}

window.onload = newTitle();