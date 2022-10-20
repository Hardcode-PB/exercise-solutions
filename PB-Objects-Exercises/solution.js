// 1. remove
const object1 = { apples: 10, oranges: 15, peaches: 5 };
//write your code here
function remove(object, ...keys) {
    // Durchlaufe alle keys, die übergeben wurden
    keys.forEach( key => {
        // Lösche jedes der Schlüssel-Wert-Paare (key-value-pairs) 
        // aus dem übergebenen Objekt
        delete object[key];
    });

    // Gebe bereinigtes Objekt zurück
    return object;
}
console.log(remove(object1, "apples", "peaches")); // { oranges: 15 }


// 2. makeArray
const object2 = { apples: 10, oranges: 15 };
//write your code here
function makeArray(object) {
    // Ergebnisarray für die Rückgabe
    let resultArray = [];

    // Hole Array mit Namen der Schlüssel aus dem übergebenen Objekt
    let keys = Object.keys(object);

    // Durchlaufe alle Namen der Schlüssel
    keys.forEach(key => {
        // Hole den dem Schlüssel zugehörigen Wert aus dem übergebenen Objekt
        let value = object[key];

        // Erstelle Array als Schlüssel-Wert-Paar
        let keyValuePair = [key, value];

        // Füge neu-erzeugtes Schlüssel-Wert-Paar zu Ergebnisarray hinzu
        resultArray.push(keyValuePair);
    });

    // Gebe Array der Schlüssel-Wert-Paare als Rückgabewert zurück
    return resultArray;
}
console.log(makeArray(object2)); // [['apples', 10], ['oranges', 15]]


// 3. isNotEmpty
const object3 = { apples: 10, oranges: 0 };
const object30 = { apples: 0, oranges: 0 };
//write your code here
function isNotEmpty(object) {
    // Hole die Werte aus dem übergebenen Objekt
    let values = Object.values(object);
    
    // Errechne Summe der values mit .reduce
    let sum = values.reduce( (acc, currentValue) => {
        return acc += currentValue;
    }, 0);

    // Gebe zurück, ob Summe größer 0 ist
    return (sum > 0);

    // Wenn sum > 0 -> true
    // Wenn sum === 0 -> false
    // Umwandlung einer Zahl zu einem Boolean
    return Boolean(sum);
}
console.log(isNotEmpty(object3)); // true
console.log(isNotEmpty(object30)); // false

// 4. isEqual
const object4 = { apples: 10, oranges: 15 };
const object40 = { apples: 10, oranges: 15 };
const object41 = { apples: 10, oranges: 0 };
const object42 = { apples: 10 };
const object43 = { peaches: 10, bananas: 15 };
//write your code here
function isEqual(objectA, objectB) {
    // Hole Schlüssel von objectA
    let keysA = Object.keys(objectA);

    // Hole Schlüssel von objectB
    let keysB = Object.keys(objectB);

    // Wenn Anzahl der Schlüssel bei beiden Objekten unterschiedlich -> return false
    if ( keysA.length !== keysB.length ) return false;

    // Indikator für Gleichheit der Schlüssel
    let keysEqual = true;

    // Durchlaufe alle Schlüssel von objectA
    keysA.forEach(keyA => {
        // Wenn derzeitiger Schlüssel von objectA
        // in objectB nicht vorhanden ist,
        // setze GLeichheitsindikator auf false
        if ( !keysB.includes(keyA) ) keysEqual = false;
    });

    // Wenn Gleichheit der Schlüssel nicht gegeben, brich ab -> return false
    if ( !keysEqual ) return false;


    // Indikator für Gleichheit der Werte
    let valuesEqual = true;

    // Durchlaufe alle Schlüssel von objectA
    keysA.forEach(key => {
        // Hole Wert aus objectA zu dem derzeitigen key
        let valueA = objectA[key];
        // Hole Wert aus objectB zu dem derzeitigen key
        let valueB = objectB[key];

        // Wenn werte von A und B ungleich sind,
        // setze Gleichheitsindikator auf false
        if (valueA !== valueB) valuesEqual = false;
    });

    // Gebe den Indikator der Gleichheit der Werte als Rückgabewert zurück
    return valuesEqual;
}
console.log(isEqual(object4, object40)); // true
console.log(isEqual(object4, object41)); // false
console.log(isEqual(object4, object42)); // false
console.log(isEqual(object4, object43)); // false

// 5. intersection
const data5 = { apples: 3, oranges: 4 };
const data51 = { mangos: 5, oranges: 2 };
//write your code here
console.log(intersection(data5, data51)); // [ 'oranges' ]

// 6. invoke
const data6 = { a: { b: ["apple", "orange", "peach"] } };
//write your code here
console.log(invoke(data6, "a.b", "splice", [1, 2])); // [ 'orange', 'peach' ]

// 7. isDeepEmpty
const data7 = { a: { b: undefined } }; // true
const data70 = { a: [{ c: null }, { d: [] }] }; // true
const data71 = { a: [{ c: null }, { d: [0] }] }; // false
//write your code here
console.log(isDeepEmpty(data7)); // true
console.log(isDeepEmpty(data70)); // true
console.log(isDeepEmpty(data71)); // false
