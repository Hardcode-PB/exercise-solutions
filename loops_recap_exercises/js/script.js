

// 1:.
console.log('Aufgabe 1:');
// Gegeben ist das folgende Array:
const ARR = [
    [1, 2, 1, 24],  // Reihe 0
    [8, 11, 9, 4],  // Reihe 1
    [7, 0, 7, 27],  // Reihe 2
    [7, 4, 28, 14], // Reihe 3
    [3, 10, 26, 7]  // Reihe 4
];
// In der Browserkonsole soll die Ausgabe folgendermaßen aussehen:
/* 
    Reihe 0 
        1 
        2 
        1
        24
    Reihe 1
        8 
        11 
        9
        4
    Reihe 2
        ...
    (Und so weiter)
*/
// Äußere Schleife für das komplette Durchlaufen der Reihen
for (let reihe = 0; reihe < ARR.length; reihe++) {
    // Reihennummer ausgeben
    console.log(`Reihe ${reihe}`);

    // Array in der Reihe zwischenspeichern
    reihenArray = ARR[reihe];

    // Innere Schleife für das komplette Durchlaufen der Spalten in der Reihe
    for (let spalte = 0; spalte < reihenArray.length; spalte++) {
        // Wert an Spalte im Reihenarray ausgeben
        console.log('\t' + reihenArray[spalte]);
    }
}


// 2.
console.log('Aufgabe 2 (Zahlendreieck):');
// Schreibt eine verschachtelte For-Schleife, die ein solches Zahlendreieck ausgibt:
/* 
    1 
    1 2 
    1 2 3 
    1 2 3 4 
    1 2 3 4 5 
    1 2 3 4 5 6 
    1 2 3 4 5 6 7 
    1 2 3 4 5 6 7 8
*/
// Durchlaufe die Anzahl der Zeilen
for (let zeile = 1; zeile <= 8; zeile++) {
    // String Variable für die Ausgabe der Spaltennummern
    let zeilenString = '';

    // Durchlaufe alle Spalten von 1 bis Zeilennummer
    for (let spalte = 1; spalte <= zeile; spalte++) {
        // Hänge Spaltennummer an den Zeilenstring an
        zeilenString += `${spalte} `;
    }

    // Ausgabe der Spaltennummern
    console.log(zeilenString);
}



// 3.
console.log('Aufgabe 3 (FizzBuzz):');
/*
    a)
        Lass mit Hilfe einer Schleife ein Array erstellen, welche die Zahlen 1 - 100 enthält (Hinweis: es zählt NICHT das Array per Hand zu erstellen (let fizzBuzzArr = [1, 2, 3, 4, 5, ...])
*/

let fizzBuzzArr = [];
for (let index = 1; index <= 100; index++) {
    fizzBuzzArr.push(index);
}

/*
    b)
        Nun soll dieses Array nach den Regeln des FizzFuzz-Spiels verändert werden. Tausche dafür bestimmte Zahlen in dem Array nach den folgenden Regeln aus:

        - Zahlen, welche durch 3 teilbar sind, sollen mit "Fizz" ersetzt werden
        - Zahlen, welche durch 5 teilbar sind, sollen mit "Buzz" ersetzt werden
        - Zahlen, welche durch 3 und 5 teilbar sind, sollen mit "FizzBuzz" ersetzt werden
    
        Gebe zum Schluss das eben veränderte Array aus. Es reicht, dieses direkt in das console.log() zu geben.
    
        Eine Schleife zum ausgeben ist nicht nötig.
    
        Die Ausgabe sollte dann folgendermaßen aussehen:
        [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", ...]
*/
// Durchlaufe fizzBuzzArr komplett in 1er Schritten
for (let index = 0; index < fizzBuzzArr.length; index++) {
    // Speichere aktuelle Zahl für Prüfung zwischen
    let number = fizzBuzzArr[index];
    
    // Wenn Zahl restlos durch 3 teilbar ist -> ersetze Stelle im Array durch den String 'Fizz'
    if ( number % 3 === 0 ) fizzBuzzArr[index] = 'Fizz';
    // Wenn Zahl restlos durch 5 teilbar ist -> ersetze Stelle im Array durch den String 'Buzz'
    if ( number % 5 === 0 ) fizzBuzzArr[index] = 'Buzz';

    // Wenn Zahl restlos durch 3 und 5 teilbar ist -> ersetze Stelle im Array durch den String 'FizzBuzz'
    if ( (number % 3 === 0) && (number % 5 === 0) ) fizzBuzzArr[index] = 'FizzBuzz';
}

// Gebe mutiertes Array fizzBuzzArr aus
console.log(fizzBuzzArr);