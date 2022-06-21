const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f120b2eba8msh891612e2d5a56aep195dadjsnfe8643889029',
		'X-RapidAPI-Host': 'random-recipes.p.rapidapi.com'
	}
};

fetch('https://random-recipes.p.rapidapi.com/ai-quotes/20', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

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
