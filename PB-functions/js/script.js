console.log('Aufgabe 1:');
/* 
    1. Add Up
    Schreibe eine Funktion, die eine Ganzzahl als Argument/Parameter entgegen nimmt. 
    Summiere alle Ganzzahlen von 1 bis zu der übergebenen Zahl auf.
    Beispiel: Wenn der Parameter beim Aufruf 4 ist, 
    sollte die Funktion 10 zurückgeben, weil 1 + 2 + 3 + 4 = 10

    Examples:
        sumIntFrom1ToN(4) ➞ 10
        sumIntFrom1ToN(13) ➞ 91
        sumIntFrom1ToN(600) ➞ 180300
*/
function sumIntFrom1ToN(limit) {
    let sum = 0;

    for (let currentNumber = 1; currentNumber <= limit; currentNumber++) {
        sum = sum + currentNumber;
        // Kurzschreibeweise
        // sum += currentNumber;
    }

    return sum;
}

let sumToFour = sumIntFrom1ToN(4);
console.log(sumToFour);
console.log(sumIntFrom1ToN(13));
console.log(sumIntFrom1ToN(600));


console.log('Aufgabe 2:');
/* 
    2. Cubed
    Schreibe eine Funktion, die drei Werte als Parameter bekommt 
    und die Summe ihrer dritten Potenzen zurück gibt.
    Dritte Potenz bedeutet "Zahl hoch 3" = Zahl * Zahl * Zahl
    Syntax für Potenz in JS: basis**exponent
    
    Beispiele:
        sumOfCubes(1, 5, 9) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
        sumOfCubes(2) ➞ 8
        sumOfCubes() ➞ 0
*/
function sumOfCubes(first, second, third) {
    let firstToTheThird = 0;
    if ( !isNaN(first) ) {
        // firstToTheThird = first**3;
        // Potenz statt basis**exponent mit der Math.pow(basis, exponent) Funktion
        firstToTheThird = Math.pow(first, 3);
    }

    // Kürzer mit ternärem Operator
    // let firstToTheThird = isNaN(first) ? 0 : first**3;
    let secondToTheThird = isNaN(second) ? 0 : second**3;
    let thirdToTheThird = isNaN(third) ? 0 : third**3;

    return firstToTheThird + secondToTheThird + thirdToTheThird;
}

console.log(sumOfCubes(1, 5, 9));
console.log(sumOfCubes(2));
console.log(sumOfCubes());


console.log('Aufgabe 3:');
/* 
    3. String Check: Erstelle eine Funktion, welche zwei Strings entgegen nimmt. 
    Zurückgeben soll die Funktion einen Bool (true/false), 
    je nachdem, ob der zweite String mit den Buchstaben des ersten Strings beginnt.

    Examples:
        isStrStartOfWord("bu", "button") ➞ true
        isStrStartOfWord("tri", "triplet") ➞ true
        isStrStartOfWord("beau", "pastry") ➞ false
*/
function isStrStartOfWord(prefix, word) {
    let index = word.indexOf(prefix);
    return index === 0;

    // In kurz:
    // return word.indexOf(prefix) === 0;
}

console.log(isStrStartOfWord("bu", "button"));
console.log(isStrStartOfWord("tri", "triplet"));
console.log(isStrStartOfWord("beau", "pastry"));
console.log(isStrStartOfWord('cu', 'button'));


console.log('Aufgabe 4:');
/* 
    4. Kleiner, oder gleich Null? 
    Erstelle eine Funktion, welche eine Zahl als Argument/Parameter übergeben bekommt. 
    Wenn diese Zahl kleiner oder gleich 0 ist, 
    dann soll die Funktion true zurückgeben. 
    Andernfalls false.

    Examples:
        isLEQZero(3) ➞ false
        isLEQZero(0) ➞ true
        isLEQZero(-4) ➞ true
        isLEQZero(10) ➞ false
*/
/* let number = 10;
let isLessThanEqual = number <= 0;
console.log(isLessThanEqual); */

function isLEQZero(number) {   
    // Ohne Typprüfung 
    return number <= 0;

    // wenn nur Argumente vom Typ 'number' ausgewertet werden sollen:
    // return (typeof number === 'number') && (number <= 0); //!
}

console.log(isLEQZero(3));      // false
console.log(isLEQZero(0));      // true
console.log(isLEQZero(-4));     // true
console.log(isLEQZero(10));     // false
console.log(isLEQZero(false));  // ohne Typprüfung: true | mit Typprüfung: false
console.log(isLEQZero());       // false


console.log('Aufgabe 5:');
/* 
    5. Zähle das Vorkommen. 
    Erstelle eine Funktion, welche zwei Strings als Argument übergeben bekommt 
    -> word: ein Wort oder Satz, 
        letter: ein Buchstabe. 
    Die Funktion soll zählen, wie oft ein Buchstabe (letter) 
    in einem Wort (word)  vorkommt und dann die Anzahl zurückgeben.
    
    Example:
    countOccurrences("this is a string", "i") ➞ 3
*/
function countOccurrences(word, letter) {
    // Zählvariable für die Summe
    let sumOfLetter = 0;


    //? Lösung mit word in Array zerteilen:
    // word aufteilen in seine Buchstaben als Array
    let letterArray = word.split('');

    // Schleife zum Durchlaufen von letterArray, 
    // um jeden Buchstaben von word zu betrachten
    for (let i = 0; i < letterArray.length; i++) {
        // Prüfe, ob betrachteter Buchstabe gleich dem gesuchten 'letter' ist
        if (letterArray[i] === letter) {
            // Falls ja, zähle Zählvariable 'sumOfLetter' um einen hoch (+1)
            sumOfLetter += 1;
        }
    }


    // ? Lösung ohne word in ein Array zu zerteilen:
    // Schleife zum Durchlaufen von letterArray, 
    // um jeden Buchstaben von word zu betrachten
    
    for (let i = 0; i < word.length; i++) {
        // Prüfe, ob betrachteter Buchstabe gleich dem gesuchten 'letter' ist
        if (word.charAt(i) === letter) {
            // Falls ja, zähle Zählvariable 'sumOfLetter' um einen hoch (+1)
            sumOfLetter += 1;
        }
    } 
   

    // Gebe gezählte Summe zurück
    return sumOfLetter;
}

console.log(countOccurrences('bumblebee', 'b')); // -> erwartetes Ergebnis 3