# JS Object

**Vervollständige den Code in `solution.js`**

## 1. remove

Schreiben Sie eine Funktion namens "remove", die die angegebenen Elemente entfernt und ein neues Objekt ohne die angegebenen Eigenschaften zurückgibt.

### Erwartetes Ergebnis:

```javascript
const object1 = { apples: 10, oranges: 15, peach: 5 };
console.log(remove(object1, "apples", "peach")); // { oranges: 15 }
```

## 2. makeArray

Schreiben Sie eine Funktion namens "makeArray", die ein tiefes Array wie [[key, value]] aus einem gegebenen Objekt zurückgibt.

### Erwartetes Ergebnis:

```javascript
const object2 = { apples: 10, oranges: 15 };
console.log(makeArray(object2)); // [['apples', 10], ['oranges', 15]]
```

## 3. isNotEmpty

Schreiben Sie eine Funktion namens "isNotEmpty", die eine oberflächliche Prüfung durchführt, um sicherzustellen, dass das Objekt nicht leer ist.

### Erwartetes Ergebnis:

```javascript
const object3 = { apples: 10, oranges: 0 };
const object30 = { apples: 0, oranges: 0 };
console.log(isNotEmpty(object3)); // true
console.log(isNotEmpty(object30)); // false
```

## 4. isEqual

Schreiben Sie eine Funktion mit dem Namen "isEqual", die eine oberflächliche Prüfung vornimmt, um festzustellen, ob zwei Objekte gleich sind.

### Erwartetes Ergebnis:

Wahr, wenn die Objekte identisch sind, falsch, wenn die Objekte unterschiedlich sind.

```javascript
const object4 = { apples: 10, oranges: 15 };
const object40 = { apples: 10, oranges: 15 };
const object41 = { apples: 10, oranges: 0 };
console.log(isEqual(object4, object40)); // true
console.log(isEqual(object4, object41)); // false
```

## 5. intersection

Schreiben Sie eine Funktion namens "intersection", die eine flache Schnittmenge von Objekten findet.

### Erwartetes Ergebnis:

```javascript
const data5 = { apples: 3, oranges: 4 };
const data51 = { mangos: 5, oranges: 2 };
console.log(intersection(data5, data51)); // [ 'oranges' ]
```

#### Bonus

Prüfen Sie auf Gleichheit von Schlüssel und Wert.

#### Erwartetes Ergebnis:

```javascript
const data52 = { apples: 3, oranges: 2 };
const data53 = { mangos: 5, oranges: 2 };
const data54 = { mangos: 5, oranges: 3 };
console.log(intersection(data52, data53)); // { oranges: 2 }
console.log(intersection(data53, data54)); // { mangos: 5 }
```

## 6. invoke

Schreiben Sie eine Funktion namens "invoke", die eine Array-Methode auf einem bestimmten Objektpfad mit den angegebenen Argumenten aufruft.

### Erwartetes Ergebnis:

```javascript
const data6 = { a: { b: ["apple", "orange", "peach"] } };
console.log(invoke(data6, "a.b", "splice", [1, 2])); // [ 'orange', 'peach' ]
```

## 7. isDeepEmpty

Schreiben Sie eine Funktion mit dem Namen "isDeepEmpty", die eine Tiefenprüfung durchführt, um festzustellen, ob ein Objekt auf allen Ebenen leer ist. Wenn das Objekt leer ist, sollte die Funktion true zurückgeben, andernfalls false.

**Leere Werte:** {}, [], '', null, NaN, undefined

### Erwartetes Ergebnis:

```javascript
const data7 = { a: { b: undefined } };
const data70 = { a: [{ c: null }, { d: [] }] };
const data71 = { a: [{ c: null }, { d: [0] }] };
console.log(isDeepEmpty(data7)); // true
console.log(isDeepEmpty(data70)); // true
console.log(isDeepEmpty(data71)); // false
```
