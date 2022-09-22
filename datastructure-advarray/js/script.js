/* -------- Map, Filter, Reduce -------- */

console.log('Aufgabe 1:');
/* 
#### 1. Get total orders
Return the total amount of orders.
Gebe die Gesamtanzahl der orders zurueck
*/
const orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
];
function getTotalOrder(orders) {
    // Gebe das Ergebnis von .reduce auf dem uebergebenen Array zurueck
    // die uebergebene Callback-Function summiert die Zahlen aus dem amount-Feld auf
    // ! WICHTIG: Es sollte ein Initialwert von 0 gegeben werden, damit klar ist, 
    // ! dass auf eine Zahl aufaddiert wird.
    return orders.reduce( (acc, currOrder) => acc + currOrder.amount, 0 );
}
console.log( getTotalOrder(orders) );



console.log('-------------------------------------------');
console.log('Aufgabe 2:');
/* 
#### 2. Increment by 1
Create a function that increments each element 
in the 'arrayOfNumbers' by 1. 
Return the a new array of modified elements.

Schreibe eine Funktion, die jedes Element in 'arrayOfNumbers' um 1 hochzaehlt.
Die Funktion sollte ein neues Array mit den modifizierten Werten als Rueckgabewert zurueck liefern.
*/
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
function incNumbers(numbers) {
    // Gebe das Ergebnisarray von .map zurueck
    // uebergebe .map ein Callback, das das jeweilige Element + 1 zurueck gibt
    return numbers.map( elem => elem+1 );
}
console.log( incNumbers(arrayOfNumbers) );


console.log('-------------------------------------------');
console.log('Aufgabe 3:');
/* 
#### 3. Filter Evens
Create a function called 'filterEvens' that filters an array 
and only returns even numbers. 
The function should take an array of numbers as an argument, and should not use a loop.

Schreibe eine Funktion 'filterEvens', die ein uebergebenes Array von Zahlen so filtert,
dass das neue Ergebnisarray nur die gerade Zahlen beinhaltet.
Dieses Ergebnisarray soll als Rueckgabewert zurueckgegeben werden.

? Examples:
    filterEvens([1,2,3,11,12,13]); //returns [2,12]
    filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]
*/
function filterEvens(numbers) {
    return numbers.filter( elem => elem % 2 === 0 );
}
console.log( filterEvens([1,2,3,11,12,13]) );
console.log( filterEvens([22,2,31,110,6,13]) );
console.log( filterEvens([1,3,5,7]) );
console.log( filterEvens([]) );



console.log('-------------------------------------------');
console.log('Aufgabe 4:');
/* 
#### 4. Filter Friends
Given an array, create a function which filters an array based on a search query.

Schreibe Funktion, die ein als Parameter uebergebenes Array 
nach einem als Parameter uebergebenen Suchstring filtert.
Die filtrierte Array-Kopie soll als Rueckgabewert zurueckgegeben werden.

? Examples
    const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
    console.log(filterFriends(friends, 'ka')); // ["Rika"];
    console.log(filterFriends(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];
*/
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
let fRiEnDS = ['rIKa', 'jENnA', 'BLeDa', 'oLIvEr', 'ITaMaR'];
function filterFriends(friends, query) {
    let result = friends.filter( friend => friend.toLowerCase().includes(query.toLowerCase()) );
    return result.map( elem => elem.charAt(0).toUpperCase() + elem.substring(1).toLowerCase() );
}
console.log( filterFriends(friends, 'ka') );
console.log( filterFriends(friends, 'e') );
console.log( filterFriends(friends, 'z') );
console.log( filterFriends(friends, 'E') );
console.log( filterFriends(fRiEnDS, 'E') );


console.log('-------------------------------------------');
console.log('Aufgabe 5:');
/* 
#### 5. Sum Up
Write a function called 'sum' that uses the reduce method to sum up an array of numbers.

Schreibe eine Funktion 'sum', die die reduce-Methode von Array nutzt, 
um ein uebergebenes Array von Zahlen aufzusummieren.
Diese Summe sollte zurueckgegeben werden.

? Examples:
sum([1,2,3,4,5]); //returns 15
sum([6,7,7]); //returns 20
*/
function sum(numbers) {
    // Gebe den Rueckgabewert von reduce zurueck
    // reduce erhaelt ein Callback, das schlicht das alter Ergebnis auf das neue aufsummiert
    return numbers.reduce( (prev, curr) => prev+curr, 0 );
}
console.log( sum([1,2,3,4,5]) );
console.log( sum([6,7,7]) );
// Wird reduce kein Initialwert gegeben, versucht es das erste Element des Arrays 
// als solchen zu nutzen, was bei einem leeren Array zum Absturz fuehrt
// ? Quickfix: Eine 0 als Initialwert mit angeben
console.log( sum([]) );




console.log('-------------------------------------------');
console.log('Aufgabe 6:');
/* 
#### 6. Square Root
Given an array of numbers, find the square root of each element in the array.

Schreibe eine Funktion, die ein Array von Zahlen uebergeben bekommt
und ein neues Array mit jeweils den Quadratwurzeln jedes Elements zurueck liefert.
*/
function getSquareRoots(numbers) {
    return numbers.map( number => Math.sqrt(number) );
}
console.log( getSquareRoots([9, 16, 25]) );
console.log( getSquareRoots([2]) );
console.log( getSquareRoots([]) );


