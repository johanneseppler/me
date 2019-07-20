function pikarun() {
  "use strict"

  var data = '../img/pikar.gif'

  var shock = document.createElement('div')
  var img = new Image()
  img.src = data
  // img.style.width = '450px'
  // img.style.height = '350px'
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
    maxParticles: 250,
    speed: 0.4,
    color: [
      '#0F5FC3',
      '#3e7ecf',
      '#6f9fdb',
      '#9fbfe7'
    ],
    minDistance: 75,
    sizeVariations: 3,
    connectParticles: true,

    // options for breakpoints
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 100,
          color: '#0F5FC3',
          connectParticles: false
        }
      }, {
        breakpoint: 425,
        options: {
          maxParticles: 50,
          connectParticles: true
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
