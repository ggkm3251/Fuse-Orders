//JvaScript API fetch
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f120b2eba8msh891612e2d5a56aep195dadjsnfe8643889029',
		'X-RapidAPI-Host': 'random-recipes.p.rapidapi.com'
	}
};

let fruitTitles = () => {
  const apiUrl = 'https://random-recipes.p.rapidapi.com/ai-quotes/20'
  fetch(apiUrl, options)
	.then(response => response.json())
	.then(data => {
    data.map(data => {
      let ul = document.querySelector('#fruits')
      let li = document.createElement('li')
      li.classList.add('fruit-item')
      li.innertext = data.id
      ul.appendChild(li)

    })
  })
  .catch(err => console.error(err))
  }

  let getFruits = () =>{
    const apiUrl = 'https://random-recipes.p.rapidapi.com/ai-quotes/20'
    fetch(apiUrl, options)
    .then(response => response.json())
    .then(data => {
      data.forEach(fruit => fruitData(fruit))
    })
  }  
  
  let fruitData = (fruit) => {
    const description = document.getElementById('fruit-info')
    image.setAttribute('src', fruit.image)
    title.innerText = fruit.title
    description.innerText = fruit.ingredients
  }
  
  let initialize = () => {
    fruitTitles()
    getFruits()
  }  
  initialize()

document.addEventListener('DOMContentLoaded', function(){
  //Click Alert'
  const btn = document.querySelector('.btn')
  btn.addEventListener('click', () => {
  alert('Order Received!' )
})

const select = document.querySelector('select')
const FoodType = document.getElementById('FoodType')
 
select.addEventListener('change', function(){
  FoodType.innerText = select.value
})

const navbar = document.querySelector(".navbar")
const hamburger = document.querySelector(".hamburger")

//Toggle grid menu 
hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show")
})

const header = document.querySelector('.header')
const scrollLink = document.querySelectorAll('.navbar a:not(:last-child)')

Array.from(scrollLink).map((link) => {
  link.addEventListener('click', (e) => {
    // Prevent Default
    e.preventDefault()

    const id = e.currentTarget.getAttribute('href').slice(1)
    const element = document.getElementById(id)
    let position = element.offsetTop - 90

    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth',
    });
    navbar.classList.remove('show')
  });
});

}) 









