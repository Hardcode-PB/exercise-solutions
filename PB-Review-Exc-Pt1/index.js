// ### CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
//  ex:
// reverseString('hello') === 'olleh';
function reverseString(orig) {
    return orig.split('').reverse().join('');
}
console.log('-------------- CHALLENGE 1 --------------');
console.log(reverseString('hello') === 'olleh');
console.log(reverseString('helloooooo') === 'olleh');

// #### CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex:
// isPalindrome('racecar') === true;
// isPalindrome('hello') == false;
function isPalindrome(orig) {
    // vergleiche, ob reversed orig === orig
    return orig.split('').reverse().join('') === orig;

    // Für findige Füchse:
    return reverseString(orig) === orig;
}
console.log('-------------- CHALLENGE 2 --------------');
console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));

// ### CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex:
// reverseInt(521) === 125;
function reverseInt(origInt) {
    // Wandle Zahl in String um
    let intString = String(origInt);

    // Drehe String um
    let reversedIntString = reverseString(intString);
    
    // Wandle umgedrehten String in Zahl um und gebe zurück
    return Number(reversedIntString);
}
console.log('-------------- CHALLENGE 3 --------------');
console.log(reverseInt(521));

// ### CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
//  ex:
// capitalizeLetters('i love javascript') === 'I Love Javascript';
function capitalizeLetters(origSentence) {
    // Trenne string an Leerzeichen in Array auf (also in Wörter)
    let words = origSentence.split(' ');

    // Erstelle mit .map ein neues Array, in dem der jeweils erste Buchstabe
    // jedes Worts mit einem großen Buchstaben beginnt
    let capitalizedWords = words.map( word => {
        return word.charAt(0).toUpperCase() + word.substring(1);
    });

    // Setze aus Array von Wörtern wieder ein String, 
    // der die Wörter durch Leerzeichen trennt, zusammen 
    // und gebe diesen zurück
    return capitalizedWords.join(' ');
    
}
console.log('-------------- CHALLENGE 4 --------------');
console.log(capitalizeLetters('i love javascript'));

// ### CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex:
// maxCharacter('javascript') == 'a';
function maxCharacter(sample) {
    // finde den Buchstaben, der in Sample am häufigsten vorkommt
    // und gib diesen als Rückgabewert zurück

    // Trenne sample in Array von Buchstaben auf
    let characters = sample.split('');

    // Setze erst einmal ersten Buchstaben als häufigsten Buchstaben
    let resultCharacter = characters[0];

    // Setze Aufkommen des häufigsten Buchstaben erst einmal auf 1
    let resultOccurence = 1;

    // Durchlaufe alle Buchstaben
    characters.forEach(outterChar => {

        // Setze Zähler des derzeitigen Buchstaben (outterChar) auf 0
        let charOccurence = 0;

        // Durchlaufe nun alle Buchstaben
        characters.forEach(innerChar => {
            // Wenn outterChar gleich dem inneren Buchstaben (innerChar)
            if (outterChar === innerChar) {
                // Zähle Aufkommen des untersuchten Buchstaben (outterChar)
                // um 1 hoch
                charOccurence += 1;
            }
        });

        // Wenn gezähltes Aufkommen des untersuchten Buchstaben (outterChar)
        // höher ist als bisher angenommer häufigster Buchstabe (resultCharacter)
        if (charOccurence > resultOccurence) {
            // Setze untersuchten Buchstaben (outterChar) als häufigsten Buchstaben (resultCharacter)
            resultCharacter = outterChar;

            // Setze Aufkommen des untersuchten Buchstaben (outterChar)
            // als höchstes Aufkommen (resultOccurence)
            resultOccurence = charOccurence;
        }
    });

    // Gebe den am häufigsten aufkommenden Buchstaben als Rückgabewert zurück
    return resultCharacter;
}

// Noch elegantere Lösung mit einer Art Map bzw. Tabelle
function maxCharacter(sample) {
    // ein Objekt als Tabelle für die Buchstaben und ihr Aufkommen
    const charMap = {};
    
    // eine Zwischenergebnisvariable für das höchste Aufkommen
    let maxNum = 0;

    // eine Zwischenergebnisvariable für den Bustaben mit dem höchsten Aufkommen
    let maxChar = '';

    // Zerteile den String (str) in ein Array von Buchstaben
    // und durchlaufe dieses Array
    sample.split('').forEach((char) => {
        // Wenn Buchstabe in Tabellenobjekt (charMap) bereits als Key vorhanden
        if (charMap[char]) {
            // Erhöhe den hinterlegten Wert des Aufkommens um 1
            charMap[char]++;

        } else {
            // Wenn nicht vorhanden,
            // lege Buchstaben als neuen Key an und hinterlege 1 als Wert des Aufkommens
            charMap[char] = 1;
        }
    });

    // Durchlaufe alle Wertepaare in Objekttabelle (charMap)
    for (let char in charMap) {
        // Wenn derzeitiger hinterlegter Wert des Aufkommens
        // größer als Wert in Zwischenergebnisvariable
        if (charMap[char] > maxNum) {
            // Ersetze Zwischenergebnis des Aufkommens um den Wert des Aufkommens
            // des derzeitigen Wertepaars
            maxNum = charMap[char];

            // Ersetze Zwischenergebnis des Buchstaben mit dem höchsten Aufkommen
            // mit dem Key (also Buchstaben) des derzeitigen Wertepaars
            maxChar = char;
        }
    }

    // Gebe als letztes Zwischenergebnisvariable für Buchstaben
    // mit höchstem Aufkommen als Rückgabewert zurück
    return maxChar;
  }
console.log('-------------- CHALLENGE 5 --------------');
console.log(maxCharacter('javascript'));
console.log(maxCharacter('Hans Peter Eckert'));


// ### CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. 
// For multiples of 3, instead of the number, print "Fizz", 
// for multiples of 5 print "Buzz". 
// For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
    for (let index = 1; index <= 100; index++) {
        // Ausgabevariable
        let printOut = '';

        // Wenn durch 3 teilbar, hänge 'Fizz' an Ausgabevariable an
        if (index % 3 === 0) printOut += 'Fizz';
        // Wenn durch 5 teilbar, hänge 'Buzz' an Ausgabevariable an
        if (index % 5 === 0) printOut += 'Buzz';

        // Wenn Ausgabevariable noch leer, 
        // ersetze leeren String durch derzeitigen Index
        if (printOut.length === 0) printOut = index;

        // Gebe Ausgabevariable aus
        console.log(printOut);
    }
}
console.log('-------------- CHALLENGE 6 --------------');
fizzBuzz();

// ### CHALLENGE 7: LONGEST WORD
// Return the longest word of a string
// SOLUTION 1 - Return a single longest word
// SOLUTION 2 - Return an array and include multiple words if they have the same length
// SOLUTION 3 - Only return an array if multiple words, otherwise return a string
// ex:
// longestWord('Hi there, my name is Brad') === 'there,';
// longestWord('My name is Brad') === ['name', 'brad'];
// longestWord('Brad') === 'brad';
function longestWord(sentence) {
    // Zerteile übergebenen String in Array aus Wörtern
    let words = sentence.split(' ');

    // Ergebnisvariable für Array der längsten Wörter
    let longestWords = [];

    // Durchlaufe alle Wörter im Wörterarray
    words.forEach(word => {
        // Wenn Array längster Wörter leer 
        // oder aktuelles Wort genauso lang wie Wörter im Array der längsten Wörter
        if ((longestWords.length === 0) || (word.length === longestWords[0].length))
            // Füge Wort zu Array der längsten Wörter hinzu
            longestWords.push(word);

        // Wenn allerdings aktuelles Wort länger als Wörter im Array der längsten Wörter
        // Ersetze Array der längsten Wörter durch neues 
        // in dem sich nur das aktuelle Wort befindet
        else if (word.length > longestWords[0].length) 
            longestWords = [word];
    });

    // Falls mehrere längste Wörter, gebe ganzes Array zurück,
    // Sonst nur das eine längste als String
    return (longestWords.length > 1) ? longestWords : longestWords[0];
}
console.log('-------------- CHALLENGE 7 --------------');
console.log(longestWord('Hi there, my name is Brad'));
console.log(longestWord('My name is Brad'));
console.log(longestWord('Brad'));


// ### CHALLENGE 8: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex:
// chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3], [4, 5, 6], [7]];
// chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2], [3, 4], [5, 6], [7]];
console.log('-------------- CHALLENGE 8 --------------');
function chunkArray(sample, chunkLength) {
    // Ergebnisarray für die Chunks (Stücke)
    let resultArray = [];

    // For-Schleife, um über die Indizes des sample-Arrays zu laufen
    for (let index = 0; index < sample.length; index += chunkLength) {
        // Erstelle mit .slice einen chunk des sample-Arrays mit
        // der übergebenen chunkLength
        let chunk = sample.slice(index, index+chunkLength);

        // Füge neu-erstellten chunk zu Ergebnisarray hinzu
        resultArray.push(chunk);
    }

    // Gebe Ergebnisarray als Rückgabewert zurück
    return resultArray;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2));
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 4));

// ### CHALLENGE 9: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex:
// [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
console.log('-------------- CHALLENGE 9 --------------');
function flattenArray(twoDimArray) {
    // Eindimensionales Ergebnisarray
    // let oneDimArray = [];

    // Durchlaufe übergebenes zweidimensonales Array
    // twoDimArray.forEach( innerArray => {
           // Durchlaufe inneres Array
    //     innerArray.forEach( innerArrElem => {
               // füge Werte zu eindimensionalem Ergebnisarray hinzu
    //         oneDimArray.push(innerArrElem);
    //     });
    // });

    // return oneDimArray;

    // Super-Hack mit .flat und Unendlich als Komplexitätstiefe
    return twoDimArray.flat(Infinity);
}
console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]));


// ### CHALLENGE 10: ANAGRAM
// Return true if anagram and false if not
// ex. isAnagram('elbow', 'below') === true
// ex. isAnagram('Dormitory', ''dirty room##'') --> false
console.log('-------------- CHALLENGE 10 --------------');
function isAnagram(orig, anagram) {
    // Vergleiche String-Repräsentationen der sortierten Buchstaben-Arrays der Wörter
    // und gebe Ergebnis als Rückgabewert zurück
    return orig.split('').sort().join('') === anagram.split('').sort().join('');
}
console.log(isAnagram('mama', 'papa'));
console.log(isAnagram('elbow', 'below'));


// ### CHALLENGE 11: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers
// ex:
// addAll(2, 5, 6, 7) === 20;
console.log('-------------- CHALLENGE 11 --------------');
function addAll(...numbers) {
    // ganz klassisch mit einer for-schleife über arguments
    // und einer Zwischenvariable
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;


    // Etwas moderner mit einem spread-Parameter:
    
    // Nutze .reduce, um über alle Elemente von numbers zu laufen 
    // und diese aufzuaddieren
    // mit Initialwert 0
    return numbers.reduce( (acc, number) => {
        // Addiere Zwischenergebnis mit aktueller Zahl auf
        return acc += number;
    }, 0);
}
console.log(addAll(1,2,3,4,5,6,7,8));
console.log(addAll(2, 5, 6, 7));
console.log(addAll(2));
console.log(addAll());


// ### CHALLENGE 12: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. 
// A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex.
// sumAllPrimes(10) === 17;
console.log('-------------- CHALLENGE 12 --------------');
function sumAllPrimes(limit) {
    // innere Funktion (Closure) zum Ermitteln, ob eine Zahl eine Primzahl ist
    function isPrime(number) {
        // Durchlaufe alle Zahlen von 2 bis number-1
        for (let div = 2; div < number; div++) {
            // Wenn aktuelle Zahl restloser Teiler von number ist,
            // gebe false zurück, denn Zahl kann dann keine Primzahl mehr sein
            if (number % div === 0) return false;
        }

        // Wenn bis hierhin kein Teiler gefunden wurde,
        // ist Zahl eine Primzahl, gib true zurück
        return true;
    }

    // Ergebnisvariable für Summe aller Primzahlen
    let primeSum = 0

    // Durchlaufe alle Zahlen von 2 bis limit-1
    for (let prime = 2; prime < limit; prime++) {
        // Wenn aktuelle Zahl (prime) eine Primzahl ist,
        // addiere sie zur Summe (primeSum) hinzu
        if (isPrime(prime)) {
            primeSum += prime;
        }
    }

    return primeSum;
}
console.log(sumAllPrimes(10));


// ### CHALENGE 13: SEEK AND DESTROY
// Remove from the array whatever is in the following arguments. 
// Return the leftover numbers in an array
// ex:
// seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello'];
console.log('-------------- CHALLENGE 13 --------------');
function seekAndDestroy(arr, ...deletables) {
    // Erstelle mit .filter ein gefiltertes Array von arr
    let filteredArray = arr.filter( item => {
        // Gebe zurück, ob sich derzeitiges item NICHT in dem Array 
        // der zu löschenden Elemente (deletables) befindet
        return !deletables.includes(item);
    });

    return filteredArray;

    // in ultra kurz:
    return arr.filter( item => !deletables.includes(item) );
}
console.log(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6));



// ### CHALLENGE 14: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex:
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116];
console.log('-------------- CHALLENGE 13 --------------');
function evenOddSums(numbers) {
    // Super modern mit reduce, aber ineffizienter
    let sumEven = numbers.reduce( (sumEvenNums, currNum) => {
        return ((currNum % 2 === 0) && Number.isInteger(currNum)) ? sumEvenNums+currNum : sumEvenNums
    }, 0);
    let sumOdd = numbers.reduce( (sumOddNums, currNum) => {
        return ((currNum % 2 !== 0) && Number.isInteger(currNum)) ? sumOddNums+currNum : sumOddNums
    }, 0);

    return [sumEven, sumOdd];




    // Etwas simpler und effizienter wegen weniger Durchläufen:

    // Ergebnisvariablen für Summe der geraden und Summe der ungeraden Zahlen
    let sumEvenNums = 0;
    let sumOddNums = 0;

    // Durchlaufe alle Zahlen des übergebenen Arrays (numbers)
    numbers.forEach( number => {
        // Wenn ganze Zahl (NICHT Komma-Zahl)
        if (Number.isInteger(number)) {
            // Wenn restlos durch 2 teilbar (gerade zahl)
            // addiere zu Summe der geraden Zahlen (sumEvenNums) auf
            if (number % 2 === 0) sumEvenNums += number;

            // Ansonsten addiere zu Summe der ungerade Zahlen (sumOddNums) auf
            else sumOddNums += number;
        }
    });

    // Gebe neues Array mit beiden Summen als items als Rückgabewert zurück
    return [sumEvenNums, sumOddNums];
}
console.log(evenOddSums([50, 60, 60, 45, 71]));
console.log(evenOddSums([1,2,3,4,5,6,7,8]));
console.log(evenOddSums([0,0, 1, 12, 7.5]));
