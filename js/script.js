function pikarun() {
  "use strict"

  console.log("Is this working?")

  var data = 'https://i.imgur.com/g99m5gz.gif'

  var shock = document.createElement('div')
  var img = new Image()
  img.src = data
  img.style.width = '450px'
  img.style.height = '350px'
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
