
console.log('The Greater Numbers:');
/* 
    1. The Greater Numbers. 
    Create a function which accepts two arguments: 
        - the first argument being an array of numbers, 
        - and the second argument being a number. 

    The function should return the elements of the array 
    which are greater than the second argument.

    Schreibe eine Funktion, die zwei Parameter entgegen nimmt:
        - ein Zahlenarray als erstes Parameter, 
        - und eine Zahl als zweites Parameter. 

    Die Funktion soll die Elemente des Arrays als Rückgabewert zurückgeben,
    die größer als die Zahl aus dem zweiten Parameter sind.


    Bsp.:
        findGreatest([3, 4, 5], 4) ➞ 5
        findGreatest([10, 20, 30], 12) ➞ 20, 30
        findGreatest([0, 10, 3], 4) ➞ 10
*/
function findGreatest(array, number) {
    // Ergebnisvariable als Array
    let greatest = [];

    // Durchlaufe alle Zahlen in array
    for (let i = 0; i < array.length; i++) {
        // Wenn aktuelle Zahl größer number
        if ( array[i] > number ) {
            // Füge aktuelle Zahl für Ergebnisarray hinzu
            greatest.push( array[i] );
        }
    }

    // Wenn Ergebnisarray leer ist
    if (greatest.length === 0) {
        // Füge number zu Ergebnisarray hinzu
        greatest.push(number);
    }

    // Gebe Ergebnisarray 'greatest' als Rückgabewert zurück
    return greatest;
}

console.log( findGreatest([3, 4, 5], 5) );
console.log( findGreatest([10, 20, 30], 12) );
console.log( findGreatest([0, 10, 3], 4) );


console.log('For the longest word:');
/* 
    2. For the longest word. 
    Create a function to find the longest word in a given string.

    Schreibe eine Funktion, um das Längste Wort innerhalb eines 
    als Parameter übergebenen Strings zu finden.

    Sie soll das längste gefunden Wort als Rückgabewert zurückgeben.

    Bsp.: longestWord("this is a web development course") ➞ "development"
*/
function findLongestWord(string) {
    // Teile übergebenen String an den Leerzeichen in ein Array aus Wörtern auf
    let splittedArray = string.split(' ');
    // Deklariere Ergebnisvariable und initialisiere sie mit einem leeren String
    let longestWord = '';

    // Durchlaufe Array mit Wörtern
    for (let i = 0; i < splittedArray.length; i++) {

        // Wenn aktuelles Wort im Array länger ist als bisheriges längstes Wort
        if (splittedArray[i].length > longestWord.length) {
            // Weise aktuelles Wort der Ergebnisvariable zu
            longestWord = splittedArray[i];
        }
    }

    // Gebe Ergebnisvariable als Rückgabewert zurück
    return longestWord;
}

console.log( findLongestWord("this is a web development course") );



console.log('Reverse:');
/* 
    3. Reverse. 
    Create a function to reverse a number.

    Schreibe eine Funktion, die eine als Parameter übergebene Zahl umdreht
    und diese diese umgedrehte Zahl als Rückgabewert zurück gibt.

    Bsp.: reverse(34532) ➞ 23543
*/
function reverse(number) {
    // erstelle Hilfsvariable und initialisiere sie mit
    // array, das per .split aus der String-Representation von number erstellt wurde
    let numberToArray = String(number).split('');

    // numberToArray wird komplett umgedreht
    numberToArray.reverse();

    // per .join aus verdrehtem array ein String erstellen
    let arrayToString = numberToArray.join('');

    // Gebe nach Zahl konvertierten Wert von arrayToString als Rückgabewert zurück
    return parseInt(arrayToString);
}

console.log( reverse(34532) );


console.log('Vowels (Vokale)');
/* 
    4. AEIOU: Vowels. 
    Create a function that takes a string in its parameters 
    and counts the number of vowels 
    (i.e. in English, "a, e, i, o, u") in the string.

    Schreibe eine Funktion, die einen String als Parameter übergeben bekommt
    und die Anzahl der Vokale (A, E, I, O, U, Ä, Ö, Ü) bestimmt.

    Die Anzahl der Vokale in dem übergebenen String soll als Rückgabewert zurück gegeben werden.

    Bsp.: findVowels("this is a string") ➞ 4
*/
function vokaleZaehlen(string) {
    // String mit gesuchten Vokalen
    let vokaleList = 'aeiouäöü';

    // Ergebnisvariable für Anzahl Vokale
    let vZaehler = 0;

    // Durchlaufe übergebenen String Buchstabe für Buchstabe
    for (let x = 0; x < string.length; x++) {
        // Zwischenvariable für kleingemachten aktuellen Buchstaben
        let currentChar = string[x].toLowerCase();

        // Wenn aktueller Buchstabe in Vokalliste enthalten
        // if (vokaleList.includes(currentChar)) {
                // Ergebnisvariable um 1 hochzählen
        //     vZaehler += 1;
        // }

        // Wenn Index von aktuellem Buchstaben innerhalb von
        // Vokalliste nicht -1 (ist also vorhanden)
        if (vokaleList.indexOf(currentChar) !== -1) {
            // Ergebnisvariable um 1 hochzählen
            vZaehler += 1;
        }
    }


    // Gebe Ergebnisvariable mit Anzahl Vokalen als Rückgabewert zurück
    return vZaehler;
}

console.log( vokaleZaehlen('this is a string') ); // 4
console.log( vokaleZaehlen('Manch ein Jüngerer meint er wäre überaus begabt.') ); // 17




console.log('Missing Numbers:');
/* 
    5. Missing Number. 
    Create a function that takes an array of all integers between 1 and 10 
    (excluding one) and returns the missing integer.

    Schreibe eine Funktion, die einen Array von den Zahlen von 1 bis 10 beinhaltet
    wobei eine der Zahlen weggelassen ist.
    Die Funktion soll die Zahl, die in dieser Zahlenreihe fehlt,
    als Rückgabewert zurückgeben.

    Examples:
        missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
        missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
        missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
*/
function missingNums(numberArray) {
    // Ergebnisvariable für fehlende Zahl zwischen 1 und 10 im numberArray
    let missingNumber = 0;

    // Durchlaufe alle Zahlen von 1 bis 10
    for (let i = 1; i <= 10; i++) {
        // Wenn derzeitiger Index i in übergebenem Array nicht vorhanden
        // -> fehlende Zahl gefunden
        if (!numberArray.includes(i)) {
            // Weise i als gefundene fehlende Zahl auf Ergebnisvariable zu
            missingNumber = i;

            // Alternativ bei Fund direkt Rückgabe von i
            // Funktion beendet sich an dieser Stelle dann
            // return i;
        }
    }

    // Gebe Ergebnisvariable als Rückgabewert zurück
    return missingNumber;
}

console.log( missingNums([1, 2, 3, 4, 6, 7, 8, 9, 10]) );   // gesucht: 5
console.log( missingNums([7, 2, 3, 6, 5, 9, 1, 4, 8]) );    // gesucht: 10
console.log( missingNums([10, 5, 1, 2, 4, 6, 8, 3, 9]) );   // gesucht: 7


console.log('Cubed:');
/* 
    6. Cubed. 
    Create a function that takes in an array of numbers 
    and returns the sum of its cubes.

    Schreibe eine Funktion, die als Parameter ein Zahlenarray übergeben bekommt
    und die Summe der dritten Potenzen der Zahlen im Zahlenarray
    als RÜCKGABEWERT zurück gibt.

    Examples:
        sumOfCubes([1, 5, 9]) ➞ 855 // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
        sumOfCubes([2]) ➞ 8
        sumOfCubes([]) ➞ 0
*/
function summeDerPotenz(zahlen) {
    // Ergebnisvariable, in der die Summe aufaddiert wird
    let summe = 0;

    // Durchlaufe alle Zahlen im übergebenen Zahlenarray 'zahlen'
    for (let index = 0; index < zahlen.length; index++) {
        // Addiere zu Summe die dritte Potenz der aktuellen Zahl hinzu
        // summe += zahlen[index]**3;
        summe += Math.pow(zahlen[index], 3);
    }

    // Gebe Ergebnisvariable 'summe' als Rückgabewert zurück
    return summe;
}

console.log( summeDerPotenz([1, 5, 9]) );
console.log( summeDerPotenz([2]) );
console.log( summeDerPotenz([]) );
