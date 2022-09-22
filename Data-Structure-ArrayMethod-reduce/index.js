
//Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
//1

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];


function groupById(array) {
  // Gebe das Ergebnis von .reduce auf dem uebergebenen Array zurueck
  // .reduce kriegt als Initialwert ein leeres Objekt, das als Rueckgabeobjekt dient
  return array.reduce( (acc, curr) => {
    // Fuege dem Rueckgabeobjekt den neuen Schluessel (curr.id) 
    // und den entsprechenden Wert (das curr-Objekt) hinzu
    acc[curr.id] = curr;

    // Gebe das Rueckgabeobjekt als Rueckgabewert der Callback-Funktion zurueck
    return acc;
  }, {} );
}

function groupById2(array) {
  // Erstelle leeres Rueckgabeobjekt
  let acc = {};

  // Durchlaufe das users-array
  array.forEach(curr => {
    // Fuege dem Rueckgabeobjekt den neuen Schluessel (curr.id) 
    // und den entsprechenden Wert (das curr-Objekt) hinzu
    acc[curr.id] = curr;
  });

  // Gebe das Rueckgabeobjekt als Rueckgabewert zurueck
  return acc;
}

let usersById = groupById(users)
console.log(usersById)

console.log( groupById2(users) );

/* expected output: 

{
  john: { id: 'john', name: 'John Smith', age: 20 },
  ann: { id: 'ann', name: 'Ann Smith', age: 24 },
  pete: { id: 'pete', name: 'Pete Peterson', age: 31 }
}
  
*/



/* 
  Etwas sinnvolleres Beispiel fuer .reduce:
  Extrahiere aus einem User-Objekt die Email-Adressen zu einem Komma-getrennten String
*/

let userObjects = [
  {
    username: 'Kalle94',
    email: 'kalle94@mail.com'
  },
  {
    username: 'VodkaSusi93',
    email: 'susi@mail.com'
  },
  {
    username: 'killerkat',
    email: 'killer@mail.com'
  }
];


function createMailToString(userObjects) {
  return userObjects.reduce( (acc, currentUser) => {
    return acc + currentUser.email + ',';
  }, '' );
}

function createMailToStringOneLiner(userObjects) {
  return userObjects.reduce( (acc, currentUser) => acc + currentUser.email + ',', '' );
}

console.log( createMailToString(userObjects) );