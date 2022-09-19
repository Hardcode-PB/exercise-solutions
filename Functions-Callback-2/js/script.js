
// Funktion, die Quadrat der als Parameter uebergebenen Zahl zurueck gibt.
function square(number) {
    return Math.pow(number, 2);

    // Alternativ
    // return number**2;
}

/* 
    Funktion, die Array von Zahlen sowie Verweis auf Rechenfunktion entgegen nimmt.
    Sie liefert ein Array mit Rechenergebnissen fuer jede Zahl im uebergebenen Array.
*/
function squaredNumbers(numbers, calcFn) {
    // Ergebnisarray fuer Rechenergebnisse
    let squares = [];

    // Durchlaufe alle uebergebenen Zahlen
    for (let i = 0; i < numbers.length; i++) {
        // Berechne mithilfe der uebergebenen Rechfunktion fuer die aktuelle Zahl 
        // ein Ergebnis und fuege dieses dem Ergebnisarray hinzu
        squares.push(calcFn(numbers[i]));
    }

    // Gebe befuelltes Ergebnisarray als Rueckgabewert zurueck
    return squares;
}

let squares = squaredNumbers([1,2,3,4,5,6], square); // return [1,4,9,16,25,36]
console.log(squares);


// Verkuerzte Loesung mit Array.map
function squareNumbers(numbers, calcFn) {
    return numbers.map(calcFn);
}

console.log( squareNumbers([1,2,3,4,5,6], square) );