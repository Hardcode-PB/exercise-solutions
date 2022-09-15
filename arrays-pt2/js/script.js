
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



console.log('Dictionary:');
/* 
    7. Dictionary. 
    Create a function that takes an initial string and an array of words, 
    and returns a filtered array of the words that start with 
    the same letters as the initial string.

    Notes:
        If none of the words match, return an empty array.
        Keep the filtered array in the same relative order as the original array of words.
    


    Schreibe eine Funktion, die zwei Parameter entgegen nimmt:
        - einen String als Wortbeginn
        - ein Array mit Wörtern
    Die Funktion soll prüfen, welche der im übergebenen Array enthaltenen Wörter 
    mit dem übergebenen String beginnen und diese Liste von Wörtern in Form eines Arrays
    als Rückgabewert zurück geben.

    Anmerkungen:
        Wenn keines der Wörter passt, gebe einen leeren Array als Rückgabewert zurück.
        Das Rückgabearray sollte dieselbe Reihenfolge behalten wie das übergebene Originalarray.
    
    Examples:
        dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]
        dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]
        dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []
    */
function dictionary(wordBeginn, words) {
    // Ergebnisvariable als leeres Array
    let result = [];

    // Durchlaufe alle Wörter des übergebenen Arrays 'words'
    for (let index = 0; index < words.length; index++) {
        // Zwischenvariable für aktuelles Wort in normalisierter Form
        let item = words[index].toLowerCase();

        // Prüfe, ob aktuelles mit wordBeginn (in normalisierter Form) beginnt
        if ( item.startsWith(wordBeginn.toLowerCase()) ) {
            // Füge aktuelles Wort zu Ergebnisarray hinzu
            result.push(item);
        }
    }

    // Gebe Ergebnisarray als Rückgabewert zurück
    return result;
}

console.log( dictionary("bu", ["button", "breakfast", "border", 'BUTTON']) );
console.log( dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) );
console.log( dictionary("beau", ["pastry", "delicious", "name", "boring"]) );


console.log('Even Number Generator:');
/* 
    8. Even Number Generator. 
    Create a function that finds all even numbers from 1 to the given number.

    Notes:
        If there are no even numbers, return an empty array.
        Do not include 0.


    Schreibe eine Funktion, die alle geraden Zahlen ab 1 bis zur als Parameter übergebenen
    Zahl bestimmt und in ein Ergebnisarray schreibt.
    Dieses Ergebnisarray soll als Rückgabewert zurück gegeben werden.

    Anmerkungen:
        - Wenn es in dem Bereich keine geraden Zahlen gibt, soll ein leeres Array
        zurück gegeben werden.
        - Die Zahl 0 soll dabei ausgeschlossen werden.


    Examples:
        evenNums(8) ➞ [2, 4, 6, 8]
        evenNums(9) ➞ [2, 4, 6, 8]
        evenNums(4) ➞ [2, 4]
        evenNums(2) ➞ [2] 
*/
function evenNums(upperBorder) {
    // Ergebnisvariable als Array
    let evenNumbers = [];

    // Durchlaufe Zahlenraum zwischen 2 und übergebener Obergrenze 'upperBorder' in 2er Schritten
    for (let number = 2; number <= upperBorder; number += 2) {
        // Füge jede Zahl zum Array hinzu
        evenNumbers.push(number);
    }

    // Gebe Ergebnisarray als Rückgabewert zurück
    return evenNumbers;
}
console.log( evenNums(8) );
console.log( evenNums(9) );
console.log( evenNums(4) );
console.log( evenNums(2) );
console.log( evenNums(1) );


console.log('Bonus: Alphabetical Order:');
/* 
    Bonus: Alphabetical Order. 
    Create a function to sort a string into alphabetical order. 
    NB: assume numbers, symbols and punctuation are not included in the string.

    Schreibe eine Funktion, die einen String als Parameter übergeben bekommt.
    Die Funktion, die Buchstaben innerhalb des String in alphabetischer Reihenfolge sortieren.
    Dieser sortierte String soll als Rückgabewert zurück gegeben werden.

    Anmerkung:
        Gehe davon aus, dass Zahlen, Symbole und Satzzeichen in dem String nicht vorhanden sind.

    Bsp.: alphaOrder("webdev") ➞ "bdeevw"
*/
// Eigene alphabetische Vergleichsfunktion, 
// die den Unterschied von Groß- und Kleinbuchstaben ignoriert.
function compareAlphabeticallyCaseInsensitive(a, b) {
    // Wenn normalisierter Buchstabe im Parameter 'a' kleiner als
    // normalisierter Buchstabe im Parameter 'b'
    if (a.toLowerCase() < b.toLowerCase()) 
        // Gebe -1 als Rückgabewert zurück
        return -1;

    // Wenn normalisierter Buchstabe im Parameter 'a' gleich
    // dem normalisierten Buchstaben im Parameter 'b'
    else if (a.toLowerCase() === b.toLowerCase()) 
        // Gebe 0 als Rückgabewert zurück
        return 0;

    // Wenn normalisierter Buchstabe im Parameter 'a' größer als
    // normalisierter Buchstabe im Parameter 'b'
    else 
        // Gebe 1 als Rückgabewert zurück
        return 1;
}

function alphaOrder(word) {
    /* 
        Übergebener String wird normalisiert in ein Buchstabenarray gesplittet,
        dieses Buchstabenarray wird mit .sort() alphabetisch sortiert
        und letztlich mit .join() wieder in einen String umgewandelt,
        der dann zurückgegeben wird.
    */
    return word.toLowerCase().split('').sort().join('');

    /* 
        Übergebener String wird in ein Buchstabenarray gesplittet,
        dieses Buchstabenarray wird mit .sort() alphabetisch sortiert,
        wobei .sort() die eigens definierte Vergleichsfunktion 'compareAlphabeticallyCaseInsensitive'
        als Parameter bekommt.
        Letztlich wird das sortierte Array von Bustaben mit .join() wieder in ein String
        umgewandelt und als Rückgabewert zurück gegeben.
    */
    return word.split('').sort(compareAlphabeticallyCaseInsensitive).join('');
}


console.log( alphaOrder("webdev") );
console.log( alphaOrder("WebDev") );
