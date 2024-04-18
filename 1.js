"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
    #books;
    checkDublicate(books) {
        const setBooks = new Set(books);

        if (books.length === setBooks.size) {
            return true;
        } else {
            return false;
        }
        
    }
    constructor(books) {
        if (!this.checkDublicate(books)) {
            throw new Error('В списке книг есть дубликаты')
        }
        this.#books = books;
    }
    
    get allBooks() {
        for (const book of this.#books) {
            console.log(book);
        }
    }
    addBook(title) {
        if (this.hasBook(title)) {
            throw new Error('Такая книга уже есть в списке');
        }
        this.#books.push(title);
    }
    removeBook(title) {
        if (!this.hasBook(title)) {
            throw new Error('Такой книги в списке нет');
        }
        for (let i = 0; i < this.#books.length; i++) {
            if (this.#books[i] === title) {
                this.#books.splice(i, 1);
            }
            
        }
    }
    hasBook(title) {
        for (const book of this.#books) {
            if (book === title) {
                return true;
            } 
        }
        return false;
    }
}

const booksArray = ['Мастер и Маргарита', 'Гарри Поттер и филосовский камень', 'Азазель'];
const library1 = new Library(booksArray);
console.log(library1);
console.log(library1.hasBook('Азазель'));
console.log(library1.hasBook('Ганбит'));
library1.allBooks;
// Add book
library1.addBook('Преступление и наказние');
console.log(library1);
//remove book
library1.removeBook('Преступление и наказние');
library1.allBooks;
//library1.removeBook('Преступление и наказние');