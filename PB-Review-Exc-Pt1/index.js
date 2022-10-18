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

// ### CHALLENGE 9: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex:
// [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

// ### CHALLENGE 10: ANAGRAM
// Return true if anagram and false if not
// ex. isAnagram('elbow', 'below') === true
// ex. isAnagram('Dormitory', ''dirty room##'') --> false

// ### CHALLENGE 11: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers
// ex:
// addAll(2, 5, 6, 7) === 20;

// ### CHALLENGE 12: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex.
// sumAllPrimes(10) === 17;

// ### CHALENGE 13: SEEK AND DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex:
// seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello'];

// ### CHALLENGE 14: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex:
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116];
