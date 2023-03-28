const showLocalStorage = (library) => {
  if (localStorage.getItem('collection')) {
    library.collection = JSON.parse(localStorage.getItem('collection'));
    library.displayBooks();
  }
};

export default showLocalStorage;