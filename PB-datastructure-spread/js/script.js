// 1.
console.log('1. Kombinieren von Arrays:');
/* 
    - Erstelle zwei Arrays, z.B. euroCountries und asianCountries. 
        Füge asianCountries am Ende des Arrays euroCountries hinzu.
    - Erstelle erneut zwei Arrays. 
        Speichere alle Elemente der beiden Arrays in einer anderen Variablen.
*/
let euroCountries = ['Frankreich', 'Deutschland', 'Polen', 'Schweiz'];
let asianCountries = ['China', 'Japan', 'Vietnam', 'Korea'];

// euroCountries = [...euroCountries, ...asianCountries];
// Per .push Funktion dem euroCountries-Array die aufgeteilten Einzelelemente
// von asianCountries an euroCountries-Array angehängt
euroCountries.push(...asianCountries);
console.log(euroCountries);

let oneToFive = [1,2,3,4,5];
let sixToTen = [6,7,8,9,10];
// Per Spread Operator beide Arrays aufgeteilt 
// und als Elemente dem neuen Array hinzugefügt
let oneToTen = [...oneToFive, ...sixToTen];
console.log(oneToTen);
console.log(oneToFive);
console.log(sixToTen);


// 2.
console.log('2. Kopieren von Arrays:');
/* 
    Kopiere ein Array mit dem Spread-Operator. 
    Speichere das kopierte Array in einer anderen Variablen.
*/
let einArray = ['Hi', 'Bye', 'Juhai', 'Thai', 'Ei'];
let copiedArray = [...einArray];


// 3.
console.log('Die größte Zahl finden:');
/* 
    Erstelle eine Funktion, um die größte Zahl in einem Array zu finden.
*/
let numberArray = [1,6,2,10,4];

function greatestNumber(numbers) {
    // Übergebe Math.max() das Array 'numbers' in 'ausgebreiteter' Form (Spread-Syntax)
    return Math.max(...numbers);
}

console.log(greatestNumber(numberArray));

// 4.
console.log('Die kleinste Zahl finden:');
/* 
    Erstelle eine Funktion, um die kleinste Zahl in einem Array zu finden.
*/

function leastNumber(numbers) {
    // Übergebe Math.min() das Array 'numbers' in 'ausgebreiteter' Form (Spread-Syntax)
    return Math.min(...numbers);
}

console.log(leastNumber(numberArray));


// 5.
console.log('5. Klonen und Zusammenführen:');
/* 
    Gegeben sind zwei Objekte:
        const person = {name: "John"};
        const job = {role: "Teacher"};
*/
const PERSON = {name: "John"};
const JOB = {role: "Teacher"};

// 5.1 Klone das Person-Objekt.
const PERSON_CLONE = {...PERSON};

console.log(PERSON);
console.log(PERSON_CLONE);

// Beweis, dass geklont
PERSON_CLONE.name = 'Joe';
console.log(PERSON);
console.log(PERSON_CLONE);

/* 
    5.2 Verschmelze diese beiden Objekte zu einem Objekt: "employee". 
    Verwende dazu den Spread-Operator.
*/
const EMPLOYEE = {...PERSON, ...JOB};
console.log(EMPLOYEE);

/* 
    5.3 Ändere dann die Werte der Eigenschaften im Objekt "employee".
*/
// Beweis, dass employee eine völlig eigene Verschmelzung ist
EMPLOYEE.name = 'Micky';
EMPLOYEE.role = 'Construction Worker'
console.log(EMPLOYEE);
console.log(PERSON);
console.log(JOB);


// Bonus: 6.
console.log('Bonus: 6. Ist der Durchschnitt eine ganze Zahl?');
/* 
    Erstelle eine Funktion, die 4 ganze Zahlen als Parameter nimmt 
    und true oder false zurückgibt, je nachdem, 
    ob der Durchschnitt aller Argumente eine ganze Zahl ist oder nicht.

    Beispiele
        isWhole(1, 2, 3, 4) ➞ false
        isWhole(9, 2, 2, 5) ➞ false

    Die Knackwurst:
    Wenn du eine Funktion erstellt hast, 
    übergibst du ein Array als Argument, das vier Elemente enthält 
    - prüfe, ob diese Methode immer noch das richtige Ergebnis ausgibt!
*/
function isWhole(numberOne, numberTwo, numberThree, numberFour) {
    let sum = numberOne + numberTwo + numberThree + numberFour;
    let average = sum / 4;

    Math.sum();

    return Number.isInteger(average);
}

console.log(isWhole(1, 2, 3, 4));
console.log(isWhole(9, 2, 2, 5));
console.log(isWhole(2, 2, 2, 2));

let nums = [1, 2, 3, 4];
// Verteile die Array-Elemte auf die vier formalen Parameter mit dem Spread-Operator
console.log( isWhole(...nums) );