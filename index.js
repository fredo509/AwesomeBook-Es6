import { MainBooks } from "./module/bookGenerator.js";

const submit = document.getElementById('form');

submit.addEventListener('submit', (e) => {
  e.preventDefault();
 const library = new MainBooks();
  library.addBook();
  library.collection = JSON.parse(localStorage.getItem('collection'));
  library.displayBooks();
  // alert(123)
});


if (localStorage.getItem('collection')) {
  library.collection = JSON.parse(localStorage.getItem('collection'));
  library.displayBooks();
}


const navLink = document.querySelectorAll('.nav-link');

navLink[0].addEventListener('click', () => {
  navLink[0].style.color = 'blue';
  navLink[1].style.color = '';
  navLink[2].style.color = '';
});

navLink[1].addEventListener('click', () => {
  navLink[0].style.color = '';
  navLink[1].style.color = 'blue';
  navLink[2].style.color = '';
});

navLink[2].addEventListener('click', () => {
  navLink[0].style.color = '';
  navLink[1].style.color = '';
  navLink[2].style.color = 'blue';
});