//

// toggle collapse arrow

$('.toggler').click(function() {
  // toggle selected element
  $('i', this).toggleClass('fa-angle-down');
  $('i', this).toggleClass('fa-angle-right');
  // make sure all others are uncollapsed
  $('i', $('.toggler', '#accordion').not(this)).removeClass('fa-angle-down');
  $('i', $('.toggler', '#accordion').not(this)).addClass('fa-angle-right');

});

// Particles effect

window.onload = function() {
  Particles.init({

    // normal options
    selector: '#background',
    maxParticles: 300,
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
          maxParticles: 200,
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
          maxParticles: 75,
          color: '#0F5FC3',
          minDistance: 30,
          connectParticles: true
        }
      }, {
        breakpoint: 425,
        options: {
          maxParticles: 33 // disables particles.js
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
