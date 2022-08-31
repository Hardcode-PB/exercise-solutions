/* 
    1. Addition. Schreibe ein Programm, um die Zahlen 1 bis 20 zu addieren.
*/
let result = 0;

for (let currentValue = 1; currentValue <= 20; currentValue++) {
    console.log(`Rechnung: ${result} + ${currentValue} = ${result+currentValue}`);
    // result = result + currentValue;
    /* 
        Kurzschreibweise fuer die Addition eines Wertes zu dem bereits existierenden
        und der gleichzeitigen Zuweisung auf denselbigen
    */
    result += currentValue;
}

/* 
    2. Es befinden sich i Bierflaschen an der Wand. 
    Schreibe ein Programm, das ausgibt: 
    "Es befindet sich 1 Flasche Bier an der Wand." 
    "Es befinden sich 2 Bierflaschen an der Wand", bis es fünf Flaschen sind.
*/
for (let i = 1; i <= 5; i++) {
    // Wenn i (echt) groesser als 1, dann gebe den Satz im Plural (Mehrzahl) aus
    if ( i > 1 ) {
        console.log(`Es befinden sich ${i} Bierflaschen an der Wand.`);

    } else {
        // Nur eine Flasche, also Ausgabe des Satzes in Singular Form
        console.log(`Es befindet sich ${i} Flasche Bier an der Wand.`);
    }

    // Umgekehrte Logik -> Fuehrt zum selben Ergebnis
    /* if ( i === 1 ) {
        // Nur eine Flasche, also Ausgabe des Satzes in Singular Form
        console.log(`Es befindet sich ${i} Flasche Bier an der Wand.`);

    } else {
        // Wenn i (echt) groesser als 1, dann gebe den Satz im Plural (Mehrzahl) aus
        console.log(`Es befinden sich ${i} Bierflaschen an der Wand.`);
    } */
}


/* 
    3. Der ungerade/gerade Reporter. Schreibe ein Programm, das von 0 bis 20 iteriert. 
    Bei jedem Durchlauf prüft es, ob die aktuelle Zahl gerade oder ungerade ist, 
    und meldet das auf dem Bildschirm (z.B. "2 ist gerade").
*/
for (let checkNumber = 0; checkNumber <= 20; checkNumber++) {
    // checkNumber MODULO 2 === 0 -> gerade zahl
    if ( (checkNumber > 0) && (checkNumber % 2 === 0) ) {
        console.log(`${checkNumber} ist gerade`);

    } else if (checkNumber > 0) {
        console.log(`${checkNumber} ist ungerade`);

    } else {
        console.log(`${checkNumber} ist weder gerade noch ungerade`);
    }
}


/* 
    4. Multiplikationstabellen. 
    Schreibe ein Programm, das von 0 bis 10 iteriert. 
    Bei jedem Durchlauf der for-Schleife multipliziert es die Zahl
    mit 9 und protokolliert das Ergebnis (z. B. "2 * 9 = 18"). 

    * Bonus: Verwende eine verschachtelte for-Schleife, 
    * um die Tabellen für jeden Multiplikator von 
    * 1 bis 10 anzuzeigen (insgesamt 100 Ergebnisse). 
*/
for (let factor = 0; factor <= 10; factor++) {
    const STATIC_FACTOR = 9;
    // let result = factor * STATIC_FACTOR;
    // console.log(`${factor} * ${STATIC_FACTOR} = ${result}`);

    // Kuerzere Loesung:
    console.log(`${factor} * ${STATIC_FACTOR} = ${factor * STATIC_FACTOR}`);
}

console.log('BONUS Aufgabe:');

for (let outterFactor = 1; outterFactor <= 10; outterFactor++ ) {
    console.log('Multiplikationsliste fuer Zahl ' + outterFactor);

    // Innere Schleife, 
    // die bei jedem Durchlauf der aeusseren Schleife ein mal komplett durchlaeuft
    for (let innerFactor = 1; innerFactor <= 10; innerFactor++) {
        console.log(`${outterFactor} * ${innerFactor} = ${outterFactor * innerFactor}`);
    }
}


/* 
    5. Fizz Buzz Schreibe ein Programm, das die ganzen Zahlen von 1 bis 100 durchläuft. 
    Aber für Vielfache von drei gibst du statt der Zahl "Fizz" 
    und für Vielfache von fünf "Buzz" aus. 
    Für Zahlen, die sowohl ein Vielfaches von drei als auch von fünf sind, 
    drucke "FizzBuzz".
*/
for (let index = 1; index <= 100; index++) {

    // Fuege index direkt zum Ergebnis hinzu
    // let result = index + ' ';
    let result = `${index} `;
    
    // Fuege, falls durch 3 teilbar 'Fizz' zum Ergebnis hinzu
    if (index % 3 === 0) result += 'Fizz';
    
    // Fuege, falls durch 5 teilbar 'Buzz' zum Ergebnis hinzu
    if (index % 5 === 0) result += 'Buzz';

    // Gib Ergebnis aus
    console.log(result);


    // ? Einfachste Loesung
    // Pruefe, ob sowohl durch 3 als auch durch 5 teilbar
    // ! WICHTIG: Der zusammengesetzte Fall sollte als erstes geprueft werden
    /* if ( (index % 3 === 0) && (index % 5 === 0) ) {
        console.log(index + ' FizzBuzz');

    } else if ( index % 3 === 0 ) { // Pruefe alternativ, ob durch drei teilbar
        console.log(index + ' Fizz');

    } else if ( index % 5 === 0 ) { // Pruefe alternativ, ob durch fuenf teilbar
        console.log(index + ' Buzz');

    } else {
        console.log(index); // Wenn nichts gilt, gib einfach index aus
    } */
}





/* 
    6. Summe der Vielfachen Schreibe ein Programm, 
    um die Vielfachen von 3 und 5 unter 1000 zu addieren.
*/
let sum = 0;
for (let vielfache = 1; vielfache <= 1000; vielfache++) {
    const IS_THREE_MULTIPLIER = (vielfache % 3 === 0);
    const IS_FIVE_MULTIPLIER = (vielfache % 5 === 0);

    /* // Wenn Vielfaches von 3 UND/ODER Vielfaches von 5, dann aufsummieren
    if ( IS_THREE_MULTIPLIER || IS_FIVE_MULTIPLIER ) {        
        console.log(`Rechnung: ${sum} + ${vielfache} = ${sum + vielfache}`);

        sum += vielfache;
    } */


    // Wenn Vielfaches von 3 UND AUCH Vielfaches von 5, dann aufsummieren
    if ( IS_THREE_MULTIPLIER && IS_FIVE_MULTIPLIER ) {
        console.log(`Rechnung: ${sum} + ${vielfache} = ${sum + vielfache}`);

        sum += vielfache;
    }
}



/* 
    7. Schreibe Programme, die die folgenden Ergebnisse liefern:
        7.1: 100 200 300 400 500 600 700 800 900 1000
        7.2: 0 2 4 6 8 10
        7.3: 3 6 9 12 15
        7.4: 9 8 7 6 5 4 3 2 1 0
        7.5: 1 1 1 2 2 2 3 3 3 4 4 4
        7.6: 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
*/

// 7.1
console.log('\n7.1');

// Variable fuer Ausgabestring
let hundredSteps = '';

// Schleife von 100 bis 1000 in 100er Schritten
for (let index = 100; index <= 1000; index += 100) {
    // Haenge indexWert an Ausgabestring an
    // hundreds += index + ' ';
    hundredSteps += `${index} `;
}
// Gebe fertigen getrimmten Ausgabestring aus
// ? string.trim() entfernt ueberstehende Spaces am Anfang und Ende
console.log(hundredSteps.trim());


// 7.2
console.log('\n7.2');

// Variable fuer Ausgabestring
let twoSteps = '';

// Schleife von 0 bis 10 in 2er Schritten
for (let index = 0; index <= 10; index += 2) {
    // Haenge indexWert an Ausgabestring an
    // twoSteps += index + ' ';
    twoSteps += `${index} `;
}
// Gebe fertigen getrimmten Ausgabestring aus
// ? string.trim() entfernt ueberstehende Spaces am Anfang und Ende
console.log(twoSteps.trim());


// 7.3
console.log('\n7.3');

// Variable fuer Ausgabestring
let threeSteps = '';

// Schleife von 3 bis 15 in 3er Schritten
for (let index = 3; index <= 15; index += 3) {
    // Haenge indexWert an Ausgabestring an
    // threeSteps += index + ' ';
    threeSteps += `${index} `;
}
// Gebe fertigen getrimmten Ausgabestring aus
// ? string.trim() entfernt ueberstehende Spaces am Anfang und Ende
console.log(threeSteps.trim());


// 7.4
console.log('\n7.4');

// Variable fuer Ausgabestring
let oneStepsBackwards = '';

// Schleife von 9 bis 0 rueckwaerts in 1er Schritten
for (let index = 9; index >= 0; index--) {
    // Haenge indexWert an Ausgabestring an
    // oneStepsBackwards += index + ' ';
    oneStepsBackwards += `${index} `;
}
// Gebe fertigen getrimmten Ausgabestring aus
// ? string.trim() entfernt ueberstehende Spaces am Anfang und Ende
console.log(oneStepsBackwards.trim());


// 7.5
console.log('\n7.5');

// Variable fuer Ausgabestring
let oneStepsThreeTimes = '';

/* console.time();
// 1 1 1 2 2 2 3 3 3 4 4 4
for (let i = 111; i <= 444; i += 111) {
    oneStepsThreeTimes += `${i}`.split('').join(' ') + ' ';
}
console.log(oneStepsThreeTimes.trim());
console.timeEnd(); */

oneStepsThreeTimes = ''

// Starte Zeitmessung der Ausfuehrung
console.time();
// Schleife von 1 bis einschliesslich 4 in 1er Schritten
for (let outterIndex = 1; outterIndex <= 4; outterIndex++) {
    // Schleife von 0 bis einschliesslich 2 in 1er Schritten
    for (let innerIndex = 0; innerIndex <= 2; innerIndex++) {
        // Haenge aeusseren indexWert an Ausgabestring an
        // oneStepsThreeTimes += outterIndex + ' ';
        oneStepsThreeTimes += `${outterIndex} `;
    }
}
// Gebe fertigen getrimmten Ausgabestring aus
// ? string.trim() entfernt ueberstehende Spaces am Anfang und Ende
console.log(oneStepsThreeTimes.trim());
// Beende Zeitmessung der Ausfuehrung und gebe die gemessene Zeit aus
console.timeEnd();


// 7.6
console.log('\n7.6');

// Variable fuer Ausgabestring
let oneStepsFourTimes = '';

// Schleife von 1 bis einschliesslich 4 in 1er Schritten
for (let outterIndex = 1; outterIndex <= 3; outterIndex++) {
    // Schleife von 0 bis einschliesslich 2 in 1er Schritten
    for (let innerIndex = 0; innerIndex <= 4; innerIndex++) {
        // Haenge aeusseren indexWert an Ausgabestring an
        // oneStepsThreeTimes += outterIndex + ' ';
        oneStepsFourTimes += `${innerIndex} `;
    }
}
// Gebe fertigen getrimmten Ausgabestring aus
// ? string.trim() entfernt ueberstehende Spaces am Anfang und Ende
console.log(oneStepsFourTimes.trim());


// 8.
console.log('\n8.');







//-----------------------------------------------------------------------
// Anatomie einer 2-Fach verschachtelten For-Schleife
// Man denke an ein Raster mit 5 Zeilen und 6 Spalten
/* for (let zeilenNummer = 1; zeilenNummer <= 5; zeilenNummer++) {
    console.log('Zeilennummer: ' + zeilenNummer);

    for (let spaltenNummer = 1; spaltenNummer <= 6; spaltenNummer++) {
        console.log('\tSpaltennummer: ' + spaltenNummer);
    }
} */