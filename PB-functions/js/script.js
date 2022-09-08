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

    if (word === null) {
        return 0;
    }


    //? Lösung mit word in Array zerteilen:
    // word aufteilen in seine Buchstaben als Array
    /* let letterArray = word.split('');

    // Schleife zum Durchlaufen von letterArray, 
    // um jeden Buchstaben von word zu betrachten
    for (let i = 0; i < letterArray.length; i++) {
        // Prüfe, ob betrachteter Buchstabe gleich dem gesuchten 'letter' ist
        if (letterArray[i] === letter) {
            // Falls ja, zähle Zählvariable 'sumOfLetter' um einen hoch (+1)
            sumOfLetter += 1;
        }
    } */


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
console.log(countOccurrences('bumblebee', 'e')); // -> erwartetes Ergebnis 3
console.log(countOccurrences('bumblebee', 'z')); // -> erwartetes Ergebnis 0
console.log(countOccurrences('bumblebee', null)); // -> erwartetes Ergebnis 3


console.log('Aufgabe 6:');
/* 
    6. X hoch Y. 
    Erstelle eine Funktion, welche zwei Zahlen als Argument übergeben bekommt 
    (z.B. x und y). 
    Die Funktion soll dann die Zahl 1 (x) mit der Potenz von Zahl 2 (y) 
    berechnen und das Ergebnis ausgeben -> X^Y.
    
    Beispiel:
        calcBaseToExponent(3, 2) -> 3² = 3*3 = 9
        calcBaseToExponent(2, 2) -> 2² = 2*2 = 4
        calcBaseToExponent(2, 3) -> 2³ = 2*2*2 = 8
*/
function calcBaseToExponent(base, exponent) {
    // Nutzung der Math Bibliothek mit Math.pow(basis, exponent)
    return Math.pow(base, exponent);

    // Nutzung des Exponenten Operators
    // return base**exponent;
}

console.log( calcBaseToExponent(3, 2) );
console.log( calcBaseToExponent(2, 2) );
console.log( calcBaseToExponent(2, 3) );


console.log('Aufgabe 7:');
/* 
    7. Hundejahre. 
    Erstelle eine Funktion, welche berechnet, wie alt ein Hund (oder sonst jemand) 
    in "Hundejahren" ist. Dabei ist die Rechnung: 1 (Menschen-) Jahr = 7 Hundejahre.
    Die Funktion soll also eine Zahl (Menschen-Jahr) als Argument nehmen, 
    das Hundejahr berechnen und dieses zurückgeben - bestenfalls in einem String, 
    als Satz (Siehe Beispiel)
    
    Beispiel:
        dogAge(4) ➞ "Your doggo is 28 years old in dog years!"
*/
function dogAge(humanYears) {
    return humanYears*7;
}

console.log( dogAge(4) );
console.log( dogAge(28) );


console.log('Aufgabe 8:');
/* 
    8. Ein Lebenslanger Vorrat... 
    Folgende Situation: Du hast einen Lebensvorrat deines Lieblingssnacks gewonnen! 
    Dafür muss die Lebensmittelfirma aber erstmal wissen, wie dieser "Lebensvorrat" 
    für dich errechnet wird.
    Da du weißt, wie man Funktionen schreibt, hilfst du der Firma bei diesem Problem aus.
    Schreibe also eine Funktion, welche zwei Argumente (Zahlen) übergeben bekommt: 
        - dein momentanes Alter
        - dein Täglicher Bedarf für den Snack.
    Gehe bei deinen Berechnungen davon aus, dass du 100 Jahre alt wirst.
    Die Funktion soll dann einen Satz, wie unten im Beispiel, 
    mit dem errechneten lebenslangen Vorrat zurückgeben:

    Beispiel:
        calcLifetimeSupply(25, 2) ➞ "Die Snack Firma wird dich mit 54,788 Stück von deinem Lieblingssnack beliefern. Der Vorrat sollte bis zu deinem 100. Lebensjahr reichen. Happy snacking!"
        calcLifetimeSupply(40, 3) ➞ "Die Snack Firma wird dich mit 65,745 Stück von deinem Lieblingssnack beliefern. Der Vorrat sollte bis zu deinem 100. Lebensjahr reichen. Happy snacking!"
*/
// Rechnung für Anzahl Snacks
// Alter
// Anzahl Snacks am Tag
// Gesamtsumme der Snacks bis zum 100. Lebensjahr
// 100 Jahre - Alter = Restjahre
// Restjahre * 365.25 = Resttage
// Resttage * SnacksAmTag = Gesamtanzahl_Snacks
function calcLifetimeSupply(age, unitsPerDay) {
    const LIFE_LIMIT = 100;
    const DAYS_PER_YEAR = 365.25;

    let remainingYears = LIFE_LIMIT - age;
    let remainingDays = remainingYears * DAYS_PER_YEAR;

    let totalSnacks = remainingDays * unitsPerDay;

    return `Die Snack Firma wird dich mit ${totalSnacks} Stück von deinem Lieblingssnack beliefern. Der Vorrat sollte bis zu deinem ${LIFE_LIMIT}. Lebensjahr reichen. Happy snacking!`;
}


console.log( calcLifetimeSupply(25, 2) );
console.log( calcLifetimeSupply(40, 3) );


console.log('Aufgabe 8(Bonus):');
/* 
    Bonus (8):
    Lass die Funktion noch ein drittes Argument entgegennehmen, nämlich das Maximalalter (für den Fall, dass der Firma 100 Jahre zu viel sind...)
    Gestallte die Funktion so, dass der Wert für den täglichen Bedarf auch eine Kommazahl sein darf, mit der gerechnet wird. Runde das Endergebnis dann auf, bzw. ab.
    
    Beispiel:
        calcLifetimeSupply(32, 0.58, 65) ➞ "Die Snack Firma wird dich mit 6,991 Stück von deinem Lieblingssnack beliefern. Der Vorrat sollte bis zu deinem 65. Lebensjahr reichen. Happy snacking!"
*/
function calcLifetimeSupplyWithCustomLifeSpan(age, unitsPerDay, lifeLimit) {
    const DAYS_PER_YEAR = 365.25;

    let remainingYears = lifeLimit - age;
    let remainingDays = remainingYears * DAYS_PER_YEAR;

    let totalSnacks = Math.round( remainingDays * unitsPerDay );

    return `Die Snack Firma wird dich mit ${totalSnacks} Stück von deinem Lieblingssnack beliefern. Der Vorrat sollte bis zu deinem ${lifeLimit}. Lebensjahr reichen. Happy snacking!`;
}

console.log( calcLifetimeSupplyWithCustomLifeSpan(32, 0.58, 65) );
console.log( calcLifetimeSupplyWithCustomLifeSpan(12, 5, 112) );


console.log('Aufgabe 9:');
/* 
    9. Wo ist Waldo? 
    Erstelle eine Funktion, welche einen String als Argument übergeben bekommt. 
    Die Funktion soll Waldo in dem String finden. Mit anderen Worten: Sie soll überprüfen, ob das Wort 'Waldo' in dem übergebenen String enthalten ist. 
    Falls ja, gibt sie true zurück, 
    falls nicht: false.

    Tipp: Beachte, anhand der Beispiele unten, wie mit Groß-, und Kleinschreibweise umgegangen werden soll (Stichwort: Case sensitivity).
    
    Beispiel:
        isWaldoHere("is there a wal here?") ➞ false
        isWaldoHere("I found you Waldo!") ➞ true
        isWaldoHere("Wait, don't you mean Wally?") ➞ false
        isWaldoHere("waldo is here") ➞ true
*/
function isWaldoHere(searchWaldo) {
    // Sofern Suchbegriff klein geschrieben ist, kann man auch nur den eingehenden
    // String toLowerCase machen.
    // const SEARCH_TERM_WALDO = 'waldo';
    // return searchWaldo.toLowerCase().includes(SEARCH_TERM_WALDO);

    // Deckt alle Case Sensitivity Probleme ab, auch wenn etwas inperfomanter
    const SEARCH_TERM_WALDO = 'Waldo';
    return searchWaldo.toUpperCase().includes(SEARCH_TERM_WALDO.toUpperCase());
}

console.log( isWaldoHere("is there a wal here?") );
console.log( isWaldoHere("I found you Waldo!") );
console.log( isWaldoHere("Wait, don't you mean Wally?") );
console.log( isWaldoHere("waldo is here") );


console.log('Aufgabe 10:');
/* 
    10. Torte (bescheuerte Aufgabe...). 
    Erstelle eine Funktion, welche ermittelt, ob Tortenstücke fair unter einer Anzahl von X Leuten verteilt wurde (fair = jede Person soll gleich viele Stücke erhalten).
    Dafür nimmt die Funktion 3 Argumente (alles Zahlen) entgegen:
    - Anzahl an vorhandenen Tortenstücken
    - Anzahl der Personen
    - Anzahl an Stücken pro Person.
    
    Ist die Verteilung fair verlaufen, soll die Funktion true wiedergeben, falls nicht: false

    Beispiel:
        isEqualSlices(11, 5, 3) ➞ false // 5 Personen x 3 Stück für jeden = 15 slices > übergeben wurden jedoch 11 Stück Torte
        isEqualSlices(8, 3, 2) ➞ true
        isEqualSlices(8, 3, 3) ➞ false
        isEqualSlices(24, 12, 2) ➞ true
*/
function isEqualSlices(totalPiePieces, amountPeople, piecesPerPerson) {
    return (amountPeople * piecesPerPerson) <= totalPiePieces;
}

console.log( isEqualSlices(11, 5, 3) );
console.log( isEqualSlices(8, 3, 2) );
console.log( isEqualSlices(8, 3, 3) );
console.log( isEqualSlices(24, 12, 2) );

// REchnung geht raus...

console.log('Aufgabe 11:');
/* 
    11. XO. 
    Erstelle eine Funktion, mit einem String als Parameter. 
    Sie soll überprüfen, ob die Anzahl des Buchstaben 'x' in dem übergebenen String die gleiche ist wie die Anzahl des Buchstaben 'o' in dem übergebenen String.
    Die Funktion soll einen Bool zurück geben -> 
    - gleiche Anzahl: true; 
    - ungleiche Anzahl:false
    Wenn weder ein x, noch ein o in dem String enthalten ist, soll auch true zurückgegeben werden.
    Groß-, und Kleinschreibweise (case sensivitiy) sollten dabei egal sein (siehe Beispiel)

    Beispiel:
        isEqualNumXandO("ooxx") ➞ true
        isEqualNumXandO("xooxx") ➞ false
        isEqualNumXandO("ooxXm") ➞ true (case insensitive)
        isEqualNumXandO("zpzpzpp") ➞ true (returns true, weil weder x, noch o enthalten sind)
        isEqualNumXandO("zzoo") ➞ false
*/
function isEqualNumXandO(probe) {
    // Zählvariablen für Xs und Os
    let amountOfO = 0;
    let amountOfX = 0;

    // Durchlaufe den ganzen String probe
    for (let i = 0; i < probe.length; i++) {
        // Wenn derzeitiger Buchstabe ein x ist
        if (probe.toLowerCase().charAt(i) === 'x') 
            amountOfX++; // erhöhe Anzahl x

            // Wenn derzeitiger Buchstabe ein o ist
        else if (probe.toLowerCase().charAt(i) === 'o') 
            amountOfO++; // erhöhe Anzahl o
    }

    // Prüfe, ob Anzahlen gleich sind und returne dementsprechend
    /* 
    if (amountOfO === amountOfX) {
        return true;
    } else {
        return false;
    } 
    */

    // Oder in kurz:
    return amountOfO === amountOfX;
}

console.log( isEqualNumXandO("ooxx") );
console.log( isEqualNumXandO("xooxx") );
console.log( isEqualNumXandO("ooxXm") );
console.log( isEqualNumXandO("zpzpzpp") );
console.log( isEqualNumXandO("zzoo") );


console.log('Aufgabe 12:');
/* 
    12. Primzahl? 
    Erstelle eine Funktion, mit einer Zahl als Parameter, welche überprüft, ob die übergebene Zahl eine Primzahl ist. 
    - Falls ja, return true, 
    - falls nein, return false.

    Hinweis: Eine Primzahl kann nur durch sich selbst und durch die Zahl 1 geteilt werden. Zur Veranschaulichung, hier die ersten 10 Primzahlen: 2, 3, 5, 7, 11, 13, 17, 19, 23 und 29.

    Beispiel:
        isPrime(7) ➞ true
        isPrime(9) ➞ false
        isPrime(10) ➞ false
*/
function isPrime(probe) {
    // Laut Definition sind 1 und 0 keine Primzahlen,
    // braucht man nicht untersuchen!
    if (probe <= 1) {
        return false;
    }

    // Rückgabewert
    let isPrime = true;

    // Quadratwurzel von untersuchter Zahl als Laufgrenze der Schleife
    let sqrtOfProbe = Math.sqrt(probe);
    
    // Laufvariable als möglicher Teiler
    let divisor = 2;

    // Schleife, die läuft während kein Teiler gefunden wurde
    // und Laufgrenze nicht erreicht wurde
    while (isPrime && (divisor <= sqrtOfProbe)) {
        // Prüfe auf möglichen Teiler
        isPrime = (probe % divisor !== 0);

        // Zähle Laufvariable hoch
        divisor++;
    }

    /*
    for (let divisor = 2; divisor < probe; divisor++) {
        if (probe % divisor === 0) {
            isPrime = false;
            break;
        }
    }
    */

    return isPrime;
}


console.log( isPrime(7) );
console.log( isPrime(9) );
console.log( isPrime(10) );