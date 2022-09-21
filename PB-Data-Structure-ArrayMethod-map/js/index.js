// Write the function camelize(str) that changes dash-separated words like “my-short-string” 
// into camel-cased “myShortString”.
/* 
  Schreibe die Funktion 'camelize(str)', die Bindestrich-getrennte Woerter in camelCase umwandelt.
  bsp.: my-short-string -> myShortString
*/

//1
function camelize(str) {
  // Teile String in Array aus Woerten auf
  let words = str.split('-');

  // Durchlaufe Array von Woerten und weise .map Ergebnis auf neues Array zu
  let resultWords = words.map(function(word, index) {
    // Fuege jedes Wort zu neuem Array hinzu
      // Wenn nicht erstes Wort -> Fuege mit grossen Anfangsbuchstaben ein
      // sonst -> fuege einfach das Wort ein
    return (index > 0) ? (word.charAt(0).toUpperCase() + word.slice(1)) : word;
  });

  // Gebe String, der aus Array zusammengesetzt wird als Rueckgabewert zurueck
  return resultWords.join('');
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));



// We have an array with user-objects
// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
/* 
  Wir haben ein Array mit User-Objekten.
  Schreibe den Code, um ein neues Array mit Objekten zu erzeugen,
  wobei die Objekte im neuen Array folgendermassen aussehen:
  {
    fullName: der zusammengesetzte Name aus name und surname,
    id: die bereits vorhandene ID
  }
*/
//2

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

// Erstelle mit .map ein neues Array, das genauso lang ist wie das users-Array 
// und weise es auf usersMapped zu
let usersMapped = users.map(function(user) {
  // Jeder Wert im Ergebnis-Array ist ein neues Objekt
  // mit der Property fullName, die aus name und surname vom jeweiligen user-Objekt besteht
  // und der Property id, die dieselbe wie im jeweiligen originalen user-Objekt ist
  return {
    fullName: user.name + ' ' + user.surname,
    id: user.id
  };
});

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith
console.log(usersMapped);

