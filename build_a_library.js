class Media{
    constructor(title){
        this._title = title;
        this._isCheckOut = false;
        this._ratings = [];
    }

    get getTitle(){
        return this._title;
    }
    get getIsCheckedOut(){
        return this._isCheckOut;
    }
    get getRatings(){
        return this._ratings;
    }

    toggleCheckOutStatus(){
        this._isCheckOut = !this._isCheckOut
    }

    getAverageRating(){
        let sum = this._ratings.reduce((x,y) => x + y);
        return sum/(this._ratings.length);
    }

    addRating(rating){
        this._ratings.push(rating);
    }

    set setIsCheckedOut(value){
        this._isCheckOut = value;
    }
}


class Book extends Media{
    constructor(author, title, pages){
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get getAuthor(){
        return this._author;
    }
    get getPages(){
        return this._pages;
    }
}

class Movie extends Media{
    constructor(director, title, runTime){
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get getDirector(){
        return this._director;
    }
    get getRunTime(){
        return this._runTime;
    }
}

const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.getIsCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.getIsCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());