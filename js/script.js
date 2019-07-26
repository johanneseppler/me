function pikarun() {
  "use strict"

  var data = '../img/pikar.gif'

  var shock = document.createElement('div')
  var img = new Image()
  img.src = data
  img.style.width = '360px'
  img.style.height = '280px'
  img.style.transition = '4s all'
  img.style.position = 'fixed'
  img.style.left = '-400px'
  img.style.bottom = '0px'
  img.style.zIndex = 999999

  document.body.appendChild(img)

  window.setTimeout(function () {
    img.style.left = 'calc(100% + 800px)'
  }, 100)

  window.setTimeout(function () {
    img.parentNode.removeChild(img)
  }, 5000)

}

// toggle collapse arrow

var coll = document.getElementsByClassName("plus");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function(i) {
    this.classList.toggle("minus");
    console.log("this is i: " +i );
    var x;
    for (x = 0; x < coll.length; x++){
      if(this != coll[x]){
        coll[x].classList.remove("minus")
      }
    }
  });
}

$('.toggler').click(function() {
  $('i', $('.toggler', '#accordion')).removeClass('fa-angle-down');
  $('i', $('.toggler', '#accordion')).addClass('fa-angle-right');
  $('i', this).toggleClass('fa-angle-down');
  $('i', this).toggleClass('fa-angle-right');
});

// // append text
//
// $(window).ready(function(){
//   setTimeout(function(){
//     $("#appendhere").append("<p class='lead mb-5'>My <span class='text-primary'>interdisciplinary background</span>,  <span class='text-primary'>professional experience</span> &amp;<span class='text-primary'>academic drive</span> make me a good fit for the program</p><p class='lead mb-5'>I'm 25 years old, half German 🇩🇪, half Italian 🇮🇹<br>  My background was originally business administration<br>but recently I have been focussing on computer science.<br><br>I love problem solving and can navigate (almost) any situation you throw me in.<br>I believe teams work best, when everyone gets to focus on what they love doing!<br>That's why you need someone who can organize and communicate<br>as well as help out with many different tasks.<br><br>That someone could be <span class='text-primary'>me</span> 🤯</p><p class='mt-5'>(Also, my humor may be questionable at times...)</p><p class='mt-1'>Want to get in touch or have any questions? <br>mail me<a href='mailto:philipp.wiedemann@tum.de'>@tum.de</a></p>")
//   }, 2000);
//
// });

// add ratings

$(".stars").each(function() {
  var i;
  for (i = 0; i < $(this).attr('nr'); i++) {
    $(this).append('<li class="list-inline-item mx-0"><i class="fas fa-star"></i></li>');
  }
  for (; i < 5; i++) {
    $(this).append('<li class="list-inline-item mx-0"><i class="far fa-star"></i></li>');
  }
});

// Particles effect

window.onload = function() {
  Particles.init({

    // normal options
    selector: '.background',
    maxParticles: 400,
    speed: 0.5,
    color: [
      '#1776ed', // primary
      '#2f84ef',
      '#4792f1',
      '#5ea0f3',
      '#76aef4',
      '#ef9a2f' // orange
    ],
    minDistance: 80,
    sizeVariations: 4,
    connectParticles: true,

    // options for breakpoints
    responsive: [
      {
        breakpoint: 992,
        options: {
          maxParticles: 250,
          color: [
            '#1776ed', // primary
            '#4792f1',
            '#76aef4',
            '#ef9a2f' // orange
          ],
          minDistance: 50,
          sizeVariations: 3,
          connectParticles: true,
        }
      }, {
        breakpoint: 768,
        options: {
          maxParticles: 100,
          color: '#0F5FC3',
          minDistance: 30,
          connectParticles: true
        }
      }, {
        breakpoint: 425,
        options: {
          maxParticles: 50 // disables particles.js
        }
      }, {
        breakpoint: 320,
        options: {
          maxParticles: 0 // disables particles.js
        }
      }
    ]
  });
};
