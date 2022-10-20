# JS Object

**Complete the code in `solution.js`**

## 1. remove

Write a function named 'remove' that removes the given items and returns a new object without the provided properties.

### Expected Result:

```javascript
const object1 = { apples: 10, oranges: 15, peach: 5 };
console.log(remove(object1, "apples", "peach")); // { oranges: 15 }
```

## 2. makeArray

Write a function named 'makeArray' that returns a deep array like [[key, value]], from a given object.

### Expected Result:

```javascript
const object2 = { apples: 10, oranges: 15 };
console.log(makeArray(object2)); // [['apples', 10], ['oranges', 15]]
```

## 3. isNotEmpty

Write a function named 'isNotEmpty' that makes a shallow check to make sure the object is not empty.

### Expected Result:

```javascript
const object3 = { apples: 10, oranges: 0 };
const object30 = { apples: 0, oranges: 0 };
console.log(isNotEmpty(object3)); // true
console.log(isNotEmpty(object30)); // false
```

## 4. isEqual

Write a function named 'isEqual' that makes a shallow check to see if two objects are equal.

### Expected Result:

True if objects are identical, false if objects are different

```javascript
const object4 = { apples: 10, oranges: 15 };
const object40 = { apples: 10, oranges: 15 };
const object41 = { apples: 10, oranges: 0 };
console.log(isEqual(object4, object40)); // true
console.log(isEqual(object4, object41)); // false
```

## 5. intersection

Write a function named 'intersection' that finds a shallow intersection of objects.

### Expected Result:

```javascript
const data5 = { apples: 3, oranges: 4 };
const data51 = { mangos: 5, oranges: 2 };
console.log(intersection(data5, data51)); // [ 'oranges' ]
```

#### Bonus

Check for both key and value equality

#### Expected Result:

```javascript
const data52 = { apples: 3, oranges: 2 };
const data53 = { mangos: 5, oranges: 2 };
const data54 = { mangos: 5, oranges: 3 };
console.log(intersection(data52, data53)); // { oranges: 2 }
console.log(intersection(data53, data54)); // { mangos: 5 }
```

## 6. invoke

Write a function named 'invoke' that invokes an array method on a specific object path with the given arguments.

### Expected Result:

```javascript
const data6 = { a: { b: ["apple", "orange", "peach"] } };
console.log(invoke(data6, "a.b", "splice", [1, 2])); // [ 'orange', 'peach' ]
```

## 7. isDeepEmpty

Write a function named 'isDeepEmpty' that makes a deep check to see if an object is empty at all levels. If the object is empty, the function should return true or else return false.

**Empty values:** {}, [], '', null, NaN, undefined

### Expected Result:

```javascript
const data7 = { a: { b: undefined } };
const data70 = { a: [{ c: null }, { d: [] }] };
const data71 = { a: [{ c: null }, { d: [0] }] };
console.log(isDeepEmpty(data7)); // true
console.log(isDeepEmpty(data70)); // true
console.log(isDeepEmpty(data71)); // false
```