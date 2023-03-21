class Book {
    constructor(title, genres) {
        this.title = title;
        this.genres = genres;
    }

    describe() {
        return`${this.title} belongs ${this.genres}.`;
    }
}

class Author {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book instanceof Book) {
            this.books.push(book);
        } else {
          throw new Error (`You can only search by books. Input not a book: ${book}`);
        }
    }

    describe() {
        return `${this.name} has ${this.books.length} books.`;
    }
}

class Menu {
    constructor(){
      this.authors = [] ;
      this.selectedAuthor = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
       
        while (selection != 0){
            switch (selection) {
                case '1':
                    this.createAuthor();
                    break;
                case '2':
                    this.viewAuthor();
                    break;
                case'3':
                    this.deleteAuthor();
                    break;
                case '4':
                    this.displayAuthors();
                    break;
                  default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        
       alert('Good Bye!');
    }

    showMainMenuOptions() {
        return prompt (`
          0) exit
          1) create new author
          2) view author
          3) delete author
          4) display all authors
          `);
    }

showAuthorMenuOptions(authorInfo) {
    return prompt(`
        0) back
        1) create title
        2) delete title
        -----------------------

        ${authorInfo}
    `);
}





    displayAuthors(){
        let authorString = '';
        for (let i =0; i < this.authors.length; i++) {
            authorString += i = ') ' + this.authors[i].name + '\n';
        }
        alert(authorString);
    }

    createAuthor(){
        let name = prompt('Enter name for new author');
        this.authors.push(new Author(name));
     console.log(this.authors);   
    }

    viewAuthor(){
        let index = prompt('Enter the index of the Author you wish to view:');
        if (index > -1 && index < this.authors.length) {
            this.selectedAuthor = this.authors[index];
            let description = 'Author Name: ' + this.selectedAuthor.name + '\n';

            for (let i = 0; i < this.selectedAuthor.books.length;  i++) {
              description += i + ') ' +this.selectedAuthor.books[i].title + ' - ' + this.selectedAuthor.books[i].genres + '\n';

              
            }

            let selection = this.showAuthorMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createTitle();
                    break;
                case '2':
                    this.deleteTitle();
            }
        }

    }

    deleteAuthor() {
        let index = prompt('Enter the index of the author you wish to delete:');
        if (index > -1 && index < this.authors.length) {
            this.authors.splice(index, 1);
        }

    }

    createTitle() {
        let title = prompt ('Enter new Title:');
        let genre = prompt ('Enter genre for new Title:'); 
        this.selectedAuthor.books.push(new Book(title, genre));
    }

    deleteTitle() {
        let index = prompt ('Enter the index of new title you wish to delete:');
        if (index > -1 && index < this.selectedAuthor.books.length) {
            this.selectedAuthor.books.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();