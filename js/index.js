class MainBooks {
  constructor() {
    // ------------------------------------------ VARIABLES
    this.collection = [];
    this.title = document.getElementById('title');
    this.author = document.getElementById('author');
    this.submit = document.getElementById('form');
    this.container = document.querySelector('.bookListCont');

    this.displayBooks();

    // ------------------------------------------- EVENTS
    this.submit.addEventListener('submit', (e) => {
      e.preventDefault();
      // alert(123)
      this.addBook();
    });

    this.container.addEventListener('click', (e) => {
      if (e.target.classList.contains('remove')) {
        const index = e.target.dataset.id;
        this.removeBook(index);
      }
    });
  }

  // ------------------------ FUNCTIONS

  addBook() {
    const title = this.title.value;
    const author = this.author.value;
    this.collection.push({ title, author });
    localStorage.setItem('collection', JSON.stringify(this.collection));
    this.displayBooks();
    this.title.value = '';
    this.author.value = '';
  }

  displayBooks() {
    this.container.innerHTML = '';
    this.collection.forEach((element, index) => {
      const div = document.createElement('div');
      div.className = 'book';
      const textContent = document.createElement('p');
      textContent.className = 'fs-bold m-0 input-txt';
      textContent.textContent = `${element.title} by ${element.author}`;
      const button = document.createElement('button');
      button.textContent = 'remove';
      button.className = 'remove';
      button.setAttribute('data-id', `${index}`);
      div.append(textContent, button);
      this.container.appendChild(div);
    });
  }

  removeBook(index) {
    this.collection.splice(index, 1);
    localStorage.setItem('collection', JSON.stringify(this.collection));
    this.displayBooks();
  }
}

const library = new MainBooks();

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