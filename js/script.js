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
    selector: '.background',
    maxParticles: 400,
    speed: 0.5,
    color: [
      '#2ba654', // primary
      '#46b469',
      '#5ec17d',
      '#74cf92',
      '#8adda6',
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
            '#2ba654', // primary
            '#5ec17d',
            '#8adda6',
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
          color: '#368751',
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
