

// Ex.A
console.log('Ex. A:');
// Create a variable 'test' that contains a string
// Erstelle eine Variable 'test', die einen String beinhaltet
let test = '';


// Ex.B
console.log('Ex. B:');
// Create a variable 'sum' that contains the result of the sum between 10 and 20
// Erstelle eine Varialbe 'sum', die die Summe von 10 und 20 beinhaltet (10 + 20)
//let sum = 10 + 20; // 30
let sum = 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20; // 165
console.log(sum);

// Ex.C 
console.log('Ex. C:');
// Create a variable 'random' that contains a random number 
// between 0 and 20 (should be randomly created at each execution)
// Erstelle eine Variable 'random', die eine Zufallszahl zwischen 0 und 20 beinhaltet
// (sie sollte bei jedem Durchlauf zufällig erstellt werden)
let random = Math.floor(Math.random() * 21);
console.log(random);

// Ex.D
console.log('Ex.D:');
// Create a variable 'Me' containing an object with the current information: 
//      Firstname = Your Firstname, Surname = Your Surname, Age = Your Age
// Erstelle eine Variable 'Me', die ein Objekt mit der folgenden Information beinhaltet:
//      Firstname = Dein Vorname, Surname = Dein Nachname, Age = Dein Alter
let me = {
    firstname: 'Alexander',
    surname: 'Babel',
    age: 28
};
console.log(me);

// Ex.E
console.log('Ex.E:');
// Programmatically remove the Age from the previously created object 'Me'
// Entferne programmatisch das Alter vom zuvor erstellten Objekt 'me'
// Entferne Wert des Alters
me.age = null;
console.log(me);

// Entferne gesamte Eigenschaft 'age'
delete me.age;
console.log(me);

// Objektfelder lassen sowohl hinzufügen als auch entfernen
/* let person = {
    firstname: 'Peter',
    surname: 'Pan',
    age: 13,
    lieblingsfarben: ['Grau', 'Blau', 'Rosa']
};

person.fullName = person.firstname + ' ' + person.surname;
console.log(person);
delete person.firstname;
delete person.surname;
console.log(person); */

// Ex.F 
console.log('Ex.F:');
// Programmatically add to the object Me an array "skills" 
// that contains the programming languages that you know
// Füge dem Objekt 'Me' programmatisch einen Array mit Namen 'skills',
// welcher die dir bekannten Programmiersprachen enthält, hinzu.
me.skills = ['Pascal', 'Java', 'C', 'Javascript', 'Python', 'HTML', 'CSS'];
console.log(me);

// Ex.G 
console.log('Ex.G:');
// Programmatically remove the last skill from the array "skills" inside of the "me" object
// Entferne programmatisch die letzte Fähigkeit aus dem Array 'skills' im Objekt 'me'
let removedSkill = me.skills.pop();
console.log(`Habe Fähigkeit ${removedSkill} aus dem Skills-Array entfernt:`);

// mit array.splice lassen sich Elemente aus einem Array per Indexangabe entfernen.
// Syntax: arrayName.splice(INDEX, ANZAHL_ZU_LÖSCHENDE_ELEMENTE)
removedSkill = me.skills.splice(2, 1);
console.log(`Habe Fähigkeit ${removedSkill} aus dem Skills-Array entfernt:`);
console.log(me);
//me.skills.pop() macht dasselbe wie me.skills.splice(me.skills.length-1)



// ----------------------- FUNCTIONS --------------------------------
console.log('Functions');
// Ex.1
console.log('Ex.1:');
// Write the function 'Dice' that randomize an integer number between 1 and 6
// Schreibe eine Funktion 'Dice', die zufällig eine Ganzzahl zwischen 1 und 6 ausgibt.
function dice() {
    let die = Math.floor(Math.random() * 6) + 1;
    console.log(die);
    return die;
}
dice();


// Ex.2 
console.log('Ex.2:');
// Write the function 'whoIsBigger' that receives 2 numbers 
// and returns the bigger of the 2.
// Schreibe eine Funktion 'whoIsBigger', die zwei Zahlen entgegennimmt
// und die größere der beiden zurückgibt.
function whoIsBigger(num1, num2) {
    // Wenn num1 echt größer als num2 ist, wird num1 zurückgegeben
    if (num1 > num2) return num1;
    // In allen anderen Fällen wird num2 zurückgegeben
    else return num2;

    // Alternativ als ternärer Operator
    return (num1 > num2) ? num1 : num2;
}

console.log(whoIsBigger(2, 0));


// Ex.3
console.log('Ex.3:');
/*
Write the function 'splitMe' that receives a String 
and returns an array with every word in that string.
Schreibe die Funktion 'splitMe', die einen String entgegennimmt
und ein Array zurückgibt, das jedes Wort dieses Strings als Element enthält.
    Example:
    ```
    function splitMe('I love coding') {
        return ['I', 'love', 'coding'];
    }
    ```
*/

function splitMe(splittableString) {
    return splittableString.split(' ');
}

console.log(splitMe('I love coding'));
console.log(splitMe('Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio tempora qui deleniti repellendus explicabo eligendi mollitia laborum quis, pariatur culpa, totam, quas animi dicta molestias facere. Voluptas inventore molestiae soluta!'));

// So wäre es unter der Haube
/* function splittiySplit(splittableString) {
    const SEPARATOR = ' ';
    let result = [];
    let lastSplitIndex = 0;

    for (let char = 0; char < splittableString.length; char++) {
        if (splittableString.charAt(char) === SEPARATOR) {
            result.push(splittableString.substring(lastSplitIndex, char));
            lastSplitIndex = char+1;
        }
    }

    result.push(splittableString.substring(lastSplitIndex, splittableString.length));

    return result;
}

console.log(splittiySplit('I love coding')); */


// Ex.4
console.log('Ex.4:');
// Write the function 'deleteOne' that receives a string and a boolean. 
// If the boolean is true, it should return the string without the first letter, 
// otherwise it should remove the last one.
// Schreibe die Funktion 'deleteOne', welche einen String und ein Boolean entgegennimmt.
// Wenn der bool'sche Wert 'true' ist, soll sie den übergebenen String 
// ohne dessen ersten Buchstaben zurückgeben.
// Ansonsten, soll sie den letzten Buchstaben entfernen.

// deleteOne('Peter Pan', true); -> 'eter Pan'
// deleteOne('Peter Pan', false); -> 'Peter Pa'

function deleteOne(probe, deleteFirst) {
    // Wir nutzen die String.substring-Funktion, um einen Teil des Strings herauszuschneiden
    /* if (deleteFirst) {
        return probe.substring(1);
        // return probe.substring(1, probe.length);

    } else {
        return probe.substring(0, probe.length-1);
    } */

    // Ganz kurz als ternärer Operator
    return deleteFirst ? probe.substring(1) : probe.substring(0, probe.length-1);
}

console.log(deleteOne('Peter Pan', true));
console.log(deleteOne('Peter Pan', false));


// Ex.5
console.log('Ex.5:');
// Write the function 'onlyLetters' that receives a string, 
// removes all the numbers and returns it.
// Schreibe die Funktion 'onlyLetters', die einen String übergeben bekommt,
// alle darin enthaltenen Zahlen entfernt und den bereinigten String zurück gibt.
// onlyLetters('Kalle hat 12 Kaninchen.') -> 'Kalle hat Kaninchen'
function onlyLetters(probe) {
    let words = probe.split(' ');
    let result = [];

    // durchsuche aufgesplittenen String nach Zahlen und füge nur Substrings,
    // die keine Zahl sind zum Ergebnis hinzu
    for (let i = 0; i < words.length; i++) {
        if ( isNaN(words[i]) ) {
            result.push(words[i]);
        }
    }

    return result.join(' ');

    // Lösung mit regulärem Ausdruck (Regular Expression), der alle Ziffern
    // durch NICHTS ersetzt
    // return probe.replace(/[0-9]/g, '');
}


console.log(onlyLetters('Kalle hat 12 Kaninchen.'));
console.log(onlyLetters('Kalle hat 12 Kaninchen, 7 Fische, 33 Hühner und 123123123 Milben im Bett.'));


// Ex.6 
console.log('Ex.6:');
// Write the function 'isThisAnEmail' that receives a string
// and returns true if the string is a valid email.
// Schreibe die Funktion 'isThisAnEmail', die einen String entgegennimmt
// und TRUE zurück gibt, wenn der String eine gültige Email-Adresse ist.
function isThisAnEmail(mailAddress) {
    let hasAtChar = mailAddress.includes('@');
    let hasDotChar = mailAddress.includes('.');

    let hasImportantChars = hasAtChar && hasDotChar;

    let atCharIndex = mailAddress.indexOf('@');
    let lastDotCharIndex = mailAddress.lastIndexOf('.');
    
    let hasRightPosition = atCharIndex !== 0 && atCharIndex !== mailAddress.length-1;
    hasRightPosition = hasRightPosition && lastDotCharIndex !== 0 && lastDotCharIndex !== mailAddress.length-1;

    hasRightPosition = hasRightPosition && (atCharIndex < lastDotCharIndex);

    return hasImportantChars && hasRightPosition;

    //return /\S+@\S+\.\S+/.test(mailAddress);

}

console.log(isThisAnEmail('peter@pan.de')); // true
console.log(isThisAnEmail('a@b.de')); // true

console.log(isThisAnEmail('a.babel@bde')); // false


// Ex.7
console.log('Ex.7:');
// Write the function 'whatDayIsIt' that should return the day of the week.
// Schreibe die Funktion 'whatDayIsIt', die zurück gibt, welcher Tag der Woche es ist.
function whatDayIsIt() {
    // Array mit Namen der Wochentage in der von Javascript propagierten Reihenfolge (Woche beginnt am Sonntag)
    const DAY_NAMES_OF_WEEK = [
        'Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'
    ];

    // Neues Datumsobjekt. Ohne Parameter = Jetzt!
    let date = new Date();

    // Numerischer Index des Wochentages mit Date.getDay() und als Index im Array der Wochentagsnamen
    let dayNameOfWeek = DAY_NAMES_OF_WEEK[date.getDay()];

    return `Heute ist ${dayNameOfWeek}`;
}

console.log(whatDayIsIt());


// Ex.8
console.log('Ex.8:');
// Write the function 'rollTheDices' that receives a numeric input 
// and returns an object that contains both the sum of the value of the dices and the dices itself.
// This function should use the Dice function defined in Ex1.
/* 
    Schreibe die Funktion 'rollTheDices', die einen numerischen Input erhält und ein Objekt zurück gibt,
    das sowohl die Summe der beiden Würfel enthält als auch die einzelnen Würfel.
    Diese Funktion sollte die 'dice' Funktion aus Aufgabe 1 nutzen.
*/
/*
Example: 
```js
    RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }
```
*/
function rollTheDices(dices) {
    //Rückgabeobjekt zur Speicherung und Aufsummierung der Augenzahlen 
    let diceRound = {
        sum: 0,
        values: [],
    };

    // For-Schleife um die Anzahl der Würfe zu simmulieren
    for (let index = 0; index < dices; index++) { 
        // Im values Array werden die Würfelaufrufe mit dazugehörigen Augenzahlen gespeichert
        diceRound.values.push(dice());
        // In sum werden alle Augenzahlen aus Value summiert 
        diceRound.sum += diceRound.values[index]; 
    }

    return diceRound;
}
console.log(rollTheDices(4));


//--------------------- JS Arrays // Objects ------------------------
console.log('JS ARRAYS // OBJECTS');

// ------------------------ HELPER ---------------------------------
const movies = [
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Lords of Dogtown",
      Year: "2005",
      imdbID: "tt0355702",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings",
      Year: "1978",
      imdbID: "tt0077869",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1990",
      imdbID: "tt0100054",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
      Title: "The Lords of Salem",
      Year: "2012",
      imdbID: "tt1731697",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      imdbID: "tt0087365",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1963",
      imdbID: "tt0057261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
];

// Ex.11
console.log('Ex.11:');
/* 
    Write the function 'deleteProp' that receives an object and a string, 
    and returns the object after deleting the property with that given name.
    Schreibe die Funktion 'deleteProp', die ein Objekt und einen String übergeben bekommt.
    In dem Objekt soll die Eigenschaft (property) mit dem Namen, der der Funktion übergeben wurde,
    gelöscht werden.
    Die Funktion soll das Objekt nach dieser Löschaktion zurückgeben.
*/
function deleteProp(obj, propToDelete) {
    // Variabler Zugriff auf Objektfelder
    // Syntax: objekt[NAME_DES_FELDES]
    delete obj[propToDelete];

    return obj;
}

const obj = {
    peter: 'pan',
    alter: 13,
    groesse: 160
};

let cleanedObj = deleteProp(obj, 0);

console.log(cleanedObj);


// Ex.12 
console.log('Ex.12:');
// Write the function 'oldestMovie' that finds the oldest movie in the array.
// Schreibe die Funktion 'oldestMovie', die den ältesten Film im 'movie'-Array findet.

function oldestMovie() {
    // Speichere ersten Film als Vergleichsreferenz in Ergebnisvariable
    let oldestMovie = movies[0];

    // Durchlaufe alle Filme ab dem zweiten Film
    for (let index = 1; index < movies.length; index++) {

        // Wenn derzeit untersuchter Film älter ist als gespeicherter Film,
        // überschreibe gespeichterten Film in Ergebnisvariable
        if (movies[index].Year < oldestMovie.Year)
            oldestMovie = movies[index];
    }

    return oldestMovie;
}

console.log(oldestMovie());