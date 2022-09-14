
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