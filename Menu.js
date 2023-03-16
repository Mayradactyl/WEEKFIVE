class Books {
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
        this.author = [];
    }

    addAuthor(author) {
        if (author instanceof Books) {
            this.authors.push(author);
        } else {
          throw new Error (`You can only search by genres. Input not a genre: ${author}`);
        }
    }

    describe() {
        return `${this.author} has ${this.books.length} books.`;
    }
}

class Menu {
    constructor(){
      this.authors = [] ;
      this.selectedBook = null;
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
        
        Alert('Ciao!');
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

showAuthorMenuOption(authorInfo) {
    return prompt(`
        0) back
        1) create Author
        2) delete Author
        -----------------------

        ${authorInfo}
    `);
}





    dispalyAuthors(){
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

    viewAuthors(){
        let index = prompt('Enter the index of the Author you wish to view:');
        if (index > -1 && index < this.authors.length) {
            this.selectedAuthor = this.authors[index];
            let description = 'Author Name: ' + this.selectedAuthor.name + '\n';

            for (let i = 0; i < this.selectedAuthor.books.length;  i++) {
              description += i = ') ' +this.selectedAuthor.books[i].name + ' - ' + this.selectedAuthor.books[i].genres + '\n';
            }

            let selection = this.showTeamMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createdTitle();
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
        this.selectedBook.authors.push(new Title(author, genre));
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