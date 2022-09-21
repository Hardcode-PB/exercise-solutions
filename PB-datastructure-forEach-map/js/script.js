console.log('Aufgabe 1 (doubleValues):');
/* 
    **1.** 
    Write a function called 'doubleValues' which accepts an array 
    and returns a new array with all the values in the array passed to the function doubled.

    Schreibe eine Funktion 'doubleValues', die ein Array als Parameter entgegen nimmt
    und ein neues Array als Rueckgabewert zurueck gibt, 
    in welchem alle Werte des uebergebenen Arrays verdoppelt sind.

    Examples:
        doubleValues([1,2,3]) // [2,4,6]
        doubleValues([5,1,2,3,10]) // [10,2,4,6,20]
*/
function doubleValues(values) {
    // Gebe Rueckgabewert von .map zurueck
    return values.map(function(number) {
        // Gebe fuer jeden Wert den verdoppelten Wert zurueck
        return number * 2;
    });

    // Oder mit statischer Funktion Array.from
    return Array.from(values, function(number) {
        return number * 2;
    });
}
console.log( doubleValues([1,2,3]) );
console.log( doubleValues([5,1,2,3,10]) );
console.log( doubleValues([]) );

console.log('-----------------------------------------------------------------');
console.log('Aufgabe 2 (onlyEvenValues):');
/* 
    **2.** 
    Write a function called 'onlyEvenValues' which accepts an array 
    and returns a new array with only the even values in the array passed to the function.

    Schreibe Funktion 'onlyEvenValues', die ein Array als Parameter entgegennimmt
    und ein neues Array als Rueckgabewert zurueckgibt,
    in welchem sich nur die geraden Zahlen aus dem uebergebenen Array befinden.

    Examples:
        onlyEvenValues([1,2,3]) // [2]
        onlyEvenValues([5,1,2,3,10]) // [2,10]
*/
function onlyEvenValues(numbers) {
    // Ergebnisarray als lokale Variable anlegen
    let result = [];
    // Mit forEach ueber jedes Element von number rueberlaufen
    numbers.forEach(function(number) {
        // Wenn aktuelle Zahl gerade ist
        if (number % 2 === 0) {
            // Fuege Zahl zu Ergebnisarray hinzu
            result.push(number);
        }
    });

    // Gebe Ergebnisarray als Rueckgabewert zurueck
    return result;

    // Oder in ganz kurz mit Array-Methode .filter
    return numbers.filter(function(number) {
        return number % 2 === 0;
    });
}

console.log( onlyEvenValues([1,2,3]) );
console.log( onlyEvenValues([5,1,2,3,10]) );



console.log('-----------------------------------------------------------------');
console.log('Aufgabe 3 (showFirstAndLast):');
/* 
    **3.** 
    Write a function called 'showFirstAndLast' which accepts an array of strings 
    and returns a new array with only the first and last character of each string.

    Schreibe Funktion 'showFirstAndLast', die ein Array aus Strings als Parameter entgegennimmt
    und ein neues Array als Rueckgabewert zurueckgibt,
    in dem sich jeweils nur der erste- und letzte Buchstabe des Strings 
    aus dem uebergebenen Array befinden.

    Examples:
        showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
        showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
*/
function showFirstAndLast(words) {
    // .map eignet perfekt dafuer
    return words.map(function(word) {
        return word.charAt(0) + word.charAt(word.length-1);
    });


    // .forEach loest die Aufgabe auch, erfordert allerdings ein explizit angelegtes Array,
    // das explizit befuellt werden muss
    let result = [];
    words.forEach(function(word) {
        let firstAndLast = word.charAt(0) + word.charAt(word.length-1);
        result.push( firstAndLast );
    });
    return result;
}

console.log( showFirstAndLast(['colt', 'matt', 'tim', 'udemy']) );
console.log( showFirstAndLast(['hi', 'goodbye', 'smile']) );
console.log( showFirstAndLast([]) );


console.log('-----------------------------------------------------------------');
console.log('Aufgabe 4 (addKeyAndValue):');
/* 
    **4.** 
    Write a function called 'addKeyAndValue' which accepts an array of objects, a key, and a value 
    and then returns the array passed to the function with the new key and value added for each object.

    Schreibe eine Funktion 'addKeyAndValue', die ein Array von Objekten, einen Schluessel (key)
    und einen Wert (value) als Parameter uebergeben bekommt.
    Die Funktion soll jedem Objekt im uebergebenen Array den Schluessel und den Wert hinzufuegen
    und dieses bearbeitete Array als Rueckgabewert zurueckgeben.

    Examples:
        addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 

        -> [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
*/
function addKeyAndValue(objects, key, value) {
    // Durchlaufe das uebergebene Array
    objects.forEach(function(object) {
        // Fuege jedem Objekt im uebergebenen Array das Feld, dessen Name sich im Parameter 'key' befindet hinzu
        // und weise diesem neuen Feld den Wert, der im Parameter 'value' ist, zu.
        object[key] = value;
    });
    // Gebe uebergebenes und jetzt bearbeitetes Array als Rueckgabewert zurueck
    return objects;

    // Durchlaufe uebergebenes Array und erstelle neues Ergebnisarray
    return objects.map(function(object) {
        // Fuege dem Ergebnisarray jeweils eine Kopie der Objekte mit hinzugefuegtem Feld 
        // und dessen Wert hinzu
        return {...object, [key]: value};
    });
}

let objects = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
console.log( addKeyAndValue(objects, 'title', 'instructor') );


console.log('-----------------------------------------------------------------');
console.log('Aufgabe 5 (vowelCount):');
/* 
    **5.** 
    Write a function called 'vowelCount' which accepts a string 
    and returns an object with the keys as the vowel 
    and the values as the number of times the vowel appears in the string. 
    This function should be case insensitive so that both lowercase and uppercase letters 
    should be counted.

    Schreibe eine Funktion 'vowelCount', die einen String als Parameter uebergeben bekommt
    und ein Objekt als Rueckgabewert zurueck gibt
    in dem die Vokale im String als keys (Feldnamen) 
    und die Anzahl des jeweiligen Vokals in dem String als value (Feldwert)
    hinterlegt sind.
    Die Funktion sollte case-insensitive sein, also Gross- und Kleinschreibung ignorieren.

    Examples:
        vowelCount('Elie')  // {e:2,i:1};
        vowelCount('Tim')   // {i:1};
        vowelCount('Matt')  // {a:1})
        vowelCount('hmmm')  // {};
        vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(someString) {
    // konstantes Array mit allen Vokalen
    const VOWELS = ['a', 'e', 'i', 'o', 'u', 'ä', 'ö', 'ü'];

    // Ergebnisobjekt
    let vowels = {};

    // mit forEach durch den normalisierten und per .split in Array geteilten String
    someString.toLowerCase().split('').forEach(function(character) {
        // Wenn Buchstabe in Vokalarray vohanden ist
        if (VOWELS.includes(character)) {
            // Zuweisung des Buchstaben im Objekt mit Ternaerem Operator: 
            // falls Buchstabe als Key im Ergebnisobjekt bereits vorhanden -> Erhoehe Value um 1
            // ansonsten -> Weise Wert 1 zu.
            // vowels[character] = (Object.hasOwn(vowels, character)) ? vowels[character] + 1 : 1;

            // ODER in etwas aufgedroeselter
            // falls Buchstabe als Key im Ergebnisobjekt bereits vorhanden
            if (Object.hasOwn(vowels, character)) {
                // Erhoehe Wert des Keys um 1
                vowels[character] = vowels[character] + 1;

            } else {
                // Fuege Key im Ergebnisobjekt hinzu und setze Wert auf 1
                vowels[character] = 1;
            }
        }
    });

    // Gebe Ergebnisobjekt als Rueckgabewert zurueck
    return vowels;
}

console.log( vowelCount('Elie') );
console.log( vowelCount('Tim') );
console.log( vowelCount('Matt') );
console.log( vowelCount('hmmm') );
console.log( vowelCount('I Am awesome and so are you') );



// Ein Objekt mit der Property (dem Feld) 'peter'
let object = {
    peter: 'pan'
};

// Object.hasOwn(object, property) prueft, ob property in object als Feld vorhanden ist
console.log( Object.hasOwn(object, 'peter') );  // true
console.log( Object.hasOwn(object, 'thomas') ); // false
