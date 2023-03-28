import MainBooks from './modules/bookGenerator.js';
import showLocalStorage from './modules/displayLocal.js';
import { DateTime } from './node_modules/luxon/build/es6/luxon.js';

const submit = document.getElementById('form');
const library = new MainBooks();

submit.addEventListener('submit', (e) => {
  e.preventDefault();
  library.addBook();
  library.collection = JSON.parse(localStorage.getItem('collection'));
});

showLocalStorage(library);

const updateLiveDate = () => {
  const liveDate = document.querySelector('.Mydate');
  const timeNow = DateTime.local().toLocaleString(DateTime.DATETIME_FULL);

  liveDate.textContent = timeNow;
};

setInterval(updateLiveDate, 1000);

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
