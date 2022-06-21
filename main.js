/*const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f120b2eba8msh891612e2d5a56aep195dadjsnfe8643889029',
		'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
	}
}*/

fetch('https://world.openfoodfacts.org/api/v0/product/737628064502.json')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
/*
let image = document.getElementById('poster')
console.log(image)
let title = document.getElementById('title')
let runtime = document.getElementById('runtime')
let showtime = document.getElementById('showtime')
let desc = document.getElementById('film-info')
let tickets = document.getElementById('ticket-num')

let getTitles = () => {
    const apiUrl = 'http://localhost:3000/films'
    fetch(apiUrl)
    .then(response => response.json())
    .then(films => {
        films.map(film => {
            
            let ul = document.querySelector('#films')
            let li = document.createElement('li')
            li.classList.add('film', 'item')
            li.innerText = film.title
            ul.appendChild(li)
        })
    })
    .catch(error => console.log(error))
}

let getMovies = () => {
    const apiUrl = 'http://localhost:3000/films'
    fetch(apiUrl)
    .then(response => response.json())
    .then(films => {
        films.forEach(film => renderOneMovie(film))
    })
}

let renderOneMovie = (film) =>{
    title.innerText = film.title
    runtime.innerText = film.runtime
    desc.innerText = film.description
    showtime.innerText = film.showtime
    image.setAttribute('src', film.poster)

    let remainingTickets = film.capacity - film.tickets_sold
    tickets.innerText = remainingTickets
}

let initialize = () => {
    getTitles()
    getMovies()
}
initialize()*/	
/*import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser',
  params: {ingr: 'apple'},
  headers: {
    'X-RapidAPI-Key': 'f120b2eba8msh891612e2d5a56aep195dadjsnfe8643889029',
    'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});*/
/*
let image = document.getElementById('poster')
console.log(image)
let title = document.getElementById('title')
let runtime = document.getElementById('runtime')
let showtime = document.getElementById('showtime')
let desc = document.getElementById('film-info')
let tickets = document.getElementById('ticket-num')

let getTitles = () => {
    const apiUrl = 'http://localhost:3000/films'
    fetch(apiUrl)
    .then(response => response.json())
    .then(films => {
        films.map(film => {
            
            let ul = document.querySelector('#films')
            let li = document.createElement('li')
            li.classList.add('film', 'item')
            li.innerText = film.title
            ul.appendChild(li)
        })
    })
    .catch(error => console.log(error))
}

let getMovies = () => {
    const apiUrl = 'http://localhost:3000/films'
    fetch(apiUrl)
    .then(response => response.json())
    .then(films => {
        films.forEach(film => renderOneMovie(film))
    })
}

let renderOneMovie = (film) =>{
    title.innerText = film.title
    runtime.innerText = film.runtime
    desc.innerText = film.description
    showtime.innerText = film.showtime
    image.setAttribute('src', film.poster)

    let remainingTickets = film.capacity - film.tickets_sold
    tickets.innerText = remainingTickets
}

let initialize = () => {
    getTitles()
    getMovies()
}
initialize()*/
const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

const header = document.querySelector('.header');
const scrollLink = document.querySelectorAll('.navbar a:not(:last-child)');

Array.from(scrollLink).map((link) => {
  link.addEventListener('click', (e) => {
    // Prevent Default
    e.preventDefault();

    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - 90;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth',
    });
    navbar.classList.remove('show');
  });
});
