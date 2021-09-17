const slider = document.querySelector('.slider')
const track = document.querySelector('.slider__track')
const items = document.querySelectorAll('.slider__item')
const btn = document.querySelectorAll('.slider__btn')
let counter = 0
const transition = '0.7s'
console.log(items.length)
track.addEventListener('click', function (e) {
  const targetName = e.target.tagName.toLowerCase()
  track.style.transition = transition
  if (!(targetName === 'a')) {
    return
  }
  transformTrack(e.target)
})

function transformTrack(e) {
  const firstElement = items[counter]
  counter === items.length - 1 ? (counter = 0) : counter++
  btn[counter].style.pointerEvents = 'none'
  track.style.transform = 'translate(-90%)'
  setTimeout(function () {
    btn[counter].style.pointerEvents = 'auto'
    track.append(firstElement)
    track.style.transition = '0s'
    track.style.transform = 'translate(0%)'
  }, parseFloat(transition) * 1000)
}
