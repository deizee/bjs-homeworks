//======================= Задача 1 =======================
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null
    }

    fix() {
        this.state *= 1.5;
    }

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState; 
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

//const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

// console.log(sherlock.releaseDate); //2019
// console.log(sherlock.state); //100
// sherlock.fix();
// console.log(sherlock.state); //100

//const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);

// console.log(picknick.author); //"Аркадий и Борис Стругацкие"
// picknick.state = 10;
// console.log(picknick.state); //10
// picknick.fix();
// console.log(picknick.state); //15


//======================= Задача 2 =======================
class Library{
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
            console.log(`Книга "${book.name}" автора ${book.author} успешно добавлена в нашу библиотеку`);
        } else {
            console.log(`Извините, но мы не можем принять книгу "${book.name}" автора ${book.author}, т.к. ее состояние не удовлетворяет требованиям библиотеки`);
        }
    }

    findBookBy(type, value) {
        const book = this.books.find(book => book[type] === value);
        
        if (book) {
            return book;
        } else {
            return null;
        }
    }

    giveBookByName(bookName) {
        const needBook = this.findBookBy('name', bookName);
        this.books = this.books.filter(book => book.name !== bookName);

        if (needBook) {
            return needBook;
        } else {
            return null;
        }
    }
}

// const library = new Library("Библиотека имени Ленина");

// library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
// library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
// library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
// library.addBook(new Magazine("Мурзилка", 1924, 60));

// console.log(library.findBookBy("name", "Властелин колец")); //null
// console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

// console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
// library.giveBookByName("Машина времени");
// console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

// const sherlock = new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
// sherlock.state = 20;
// library.addBook(sherlock);
// sherlock.fix();
// sherlock.fix();
// library.addBook(sherlock);


//======================= Задача 3 =======================
class StudentLog {
    constructor(name) {
        this.name = name;
        this.subjects = {}
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (!this.subjects[subject]) {
            this.subjects[subject] = [];
            console.log(`В список предметов добавился новый предмет: ${subject}`);
        }
        if (grade >=1 && grade <= 5) {
            this.subjects[subject].push(grade);
        } else {
            console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
        }

        return this.subjects[subject].length;     //текущее количество оценок
    }

    getAverageBySubject(subject) {
        if (this.subjects[subject]) {
            const numberOfMarks = this.subjects[subject].length;
            let sumOfMarks = 0;

            if (numberOfMarks === 0) return 0;

            let arrayOfMarks = this.subjects[subject];

            sumOfMarks = arrayOfMarks.reduce(((prev, cur) => prev += cur), 0);

            return sumOfMarks / numberOfMarks;
        } else {
            console.log(`Вы пытаетесь высчитать стреднюю оценку по предмету (${subject}), которого нет в списке`);
            return 0;
        }
    }

    getTotalAverage() {
        let arrayOfAllMarks = [];

        for (let subject in this.subjects) {
            arrayOfAllMarks = arrayOfAllMarks.concat(this.subjects[subject]);
        }

        if (arrayOfAllMarks.length === 0) {
            return 0;
        } else {
            return arrayOfAllMarks.reduce(((prev, cur) => prev += cur), 0) / arrayOfAllMarks.length;
        }
    }
}


// const log = new StudentLog('Олег Никифоров');

// console.log(log.addGrade(3, 'algebra'));       
// console.log(log.addGrade('отлично!', 'math')); 
                                                
// console.log(log.addGrade(4, 'algebra'));      
// console.log(log.addGrade(5, 'geometry')); 
// console.log(log.addGrade(25, 'geometry'));
                                                
// log.addGrade(2, 'algebra');
// log.addGrade(4, 'algebra');
// log.addGrade(5, 'geometry');
// log.addGrade(4, 'geometry');
// log.addGrade(4, 'music');

// console.log(log.getAverageBySubject('geometry'));
// console.log(log.getAverageBySubject('algebra'));
// console.log(log.getAverageBySubject('math'));

// console.log(log);

// console.log(log.getTotalAverage());

// console.log(log.getAverageBySubject('english'));