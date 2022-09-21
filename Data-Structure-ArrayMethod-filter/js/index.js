//Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
//1

function filterRange(arr, a, b) {
  // Gebe Rueckgabewert von Array.filter zurueck
  // als Filter-Funktion eine Arrow-Function, die einen Bool'schen Wert zurueck gibt,
  // ob elem zwischen a und b liegen 
  return arr.filter(elem => (a <= elem && elem <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (matching values)

console.log(arr); // 5,3,8,1 (not modified)

//Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
//2
function filterRangeInPlace(arr, a, b) {
  // Durchlaufe alle Elemente
  let index = 0;
  while (index < arr.length) {
    // Aktuelles Element zwischenspeichern
    let elem = arr[index];
    // Wenn Element ausserhalb der gesuchten Range, entferne es aus dem Array.
    if (elem < a || elem > b) arr.splice(index, 1);
    // Sonst zaehle Zaehlvariable hoch
    else index++;
  }
}

let array = [5, 3, 8, 1];

filterRangeInPlace(array, 1, 4); // removed the numbers except from 1 to 4

console.log(array); // [3, 1]
