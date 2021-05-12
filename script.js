document.getElementById('button').addEventListener('click', age)
let userInput = 0

function age () {
  userInput = document.getElementById('input').value
  userInput = parseInt(userInput)

  if (userInput >= 17) {
    document.getElementById('answer').innerHTML = 'You can watch any movie!'
  } else if (userInput >= 13) {
    document.getElementById('answer').innerHTML = 'You can watch any movie with an adult!'
  }
   else if (userInput >= 5) {
     document.getElementById('answer').innerHTML = 'You can watch any PG movie or G movie!'
   }
}
