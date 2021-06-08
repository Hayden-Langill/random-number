let number = 0
let random = 0

document.getElementById('button').addEventListener('click', guess)

function guess () {
  number = document.getElementById('input').value
  number = parseInt(number)
  random = Math.floor(Math.random() * 6) + 1
  document.getElementById('output').innerHTML = random
  if (number === random) {
    document.getElementById('output').innerHTML = "Great guess!"
    document.getElementById('body').style.backgroundColor = 'green'
    setTimeout(function(){
      document.getElementById('body').style.backgroundColor = 'white'
    }, 1000)
  }
  if (number != random) {
    document.getElementById('body').style.backgroundColor = 'red'
    document.getElementById('output').innerHTML = "Wrong"
    setTimeout(function(){
      document.getElementById('body').style.backgroundColor = 'white'
    }, 1000)
  }
}
