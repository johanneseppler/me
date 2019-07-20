function pikarun() {
  "use strict"

  console.log("Is this working?")

  var data = 'https://i.imgur.com/g99m5gz.gif'

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
    img.style.left = 'calc(100% + 1000px)'
  }, 100)

  window.setTimeout(function () {
    img.parentNode.removeChild(img)
  }, 5000)
}

$(".stars").each(function() {
  var i;
  for (i = 0; i < $(this).attr('nr'); i++) {
    $(this).append('<li class="list-inline-item mx-0"><i class="fas fa-star"></i></li>');
  }
  for (; i < 5; i++) {
    $(this).append('<li class="list-inline-item mx-0"><i class="far fa-star"></i></li>');
  }
});
