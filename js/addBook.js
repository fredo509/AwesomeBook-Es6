export default function addBook(){
    const title = this.title.value;
    const author = this.author.value;
    this.collection.push({ title, author });
    localStorage.setItem('collection', JSON.stringify(this.collection));
    this.displayBooks();
    this.title.value = '';
    this.author.value = '';
}