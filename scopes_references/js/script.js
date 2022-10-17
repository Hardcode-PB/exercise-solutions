/* 
    Lege folgende globale Variablen an:
    - name, die einen String beinhaltet
    - alter, die eine Zahl beinhaltet
    - isTaltented, die einen Wahrheitswert beinhaltet (boolean)
*/
let name = 'Peter';
let alter = 12;
let isTalented = true;

console.log('Aufgabe 1:');
/*
    1.
    Schreibe eine Funktion 'printName', die einen Parameter 'name' entgegen nimmt 
    und diesen in die Konsole ausgibt.
    Einen Rückgabewert braucht diese Funktion nicht.
    
    Probiere diese Funktion jetzt in folgenden Variationen aus:
    - printName(name), also indem du ihr die globale Variable 'name' übergibst
    - printName('Heinrich')
    
    Der Parameter der Funktion heißt genauso wie die globale Variable 'name'.
    Frage:  Greift die Ausgabe in der Funktion nun auf die globale Variable 'name' zu
            oder den Parameter 'name' der Funktion?
    Beantworte dies als Kommentar, evtl. sogar mit einer Begründung.
*/
// Die globale Variable 'name' wird in der Funktion ignoriert,
// denn im lokalen Gueltigkeitbereich/Scope der Funktion befindet sich
// ebenfalls ein Bezeichner mit dem Namen 'name'.
function printName(name) {
    console.log(name);
}
printName(name);
printName('Heinrich');

console.log('Aufgabe 2:');
/*
    2.
    Schreibe eine Funktion 'printAge', die keinen Parameter erhält.
    Lege in der Funktion eine Variable 'alter' an.
    Lasse dann 'alter' in die Konsole ausgeben.
    Einen Rückgabewert braucht diese Funktion nicht.

    Was fällt dir beim Ausführen der Funktion auf?
    Wird nun die lokale Variable 'alter' oder die globale Variable 'alter' genutzt?
    Füge deine Beobachtung und eine Erklärung als Kommentar ein.
*/
// Die globale Variable 'alter' wird in der Funktion ignoriert,
// denn im lokalen Gueltigkeitbereich/Scope der Funktion befindet sich
// ebenfalls ein Bezeichner mit dem Namen 'alter'.
function printAge() {
    // lokale Deklaration einer Variable 'alter'
    let alter = 13;
    console.log(alter);
}
printAge();


console.log('Aufgabe 3:');
/*
    3.
    Schreibe eine Funktion 'printNameAndAge', die zwei Parameter 'name' und 'alter'
    entgegen nimmt.
    Ändere in der Funktion die Werte der Parameter 'name' und 'alter' und gib sie in die Konsole aus.
    Einen Rückgabewert braucht diese Funktion nicht.

    Gebe dir die beiden globalen Variablen 'name' und 'alter' vor dem Ausführen der Funktion
    in die Konsole aus, führe dann die Funktion printNameAndAge(name, alter) aus,
    indem du ihnen die globalen Variablen 'name' und 'alter' als Parameter übergibst.
    Gebe dir anschließend wieder die beiden globalen Variablen 'name' und 'alter' in die Konsole aus.

    Welchen Einfluss hatten die Wertänderungen für 'name' und 'alter' innerhalb der Funktion
    auf die beiden globalen Variablen 'name' und 'alter'?
    Erkläre als Kommentar.
*/
// Die Wertaenderungen der Bezeichner 'name' und 'alter' innerhalb der Funktion
// haben KEINEN Einfluss auf die globalen Variablen 'name' und 'alter',
// auch wenn man diese als Aufrufparameter uebergibt, 
// denn primitive Datentypen (in diesem Fall String) werden als Wertekopie uebergeben
// STICHWORT: Werteparameter (Copy-By-Value)
function printNameAndAge(name, alter) {
    console.log('name: ' + name);
    console.log('alter: ' + alter);

    // Wert-Neuzuweisung im lokalen Gueltigkeitsbereich/Scope
    name = 'Marie';
    alter = 20;

    console.log('name: ' + name);
    console.log('alter: ' + alter);
}

// console.log('name: ' + name);
// console.log('alter: ' + alter);

printNameAndAge(name, alter);

console.log('name: ' + name);
console.log('alter: ' + alter);


console.log('Aufgabe 4:');
/*
    4.
    Schreibe eine Funktion 'getPersonObject', die drei Parameter 'name', 'alter' und 'isTalented' entgegen nimmt.
    Die Funktion soll ein Objekt aus mit den drei Feldern 'name', 'alter' und 'isTaltented' als Rückgabewert zurückgeben.
    Als Werte für die drei Felder/Properties des Objekts sollen die übergebenen Parameter eingesetzt werden.

    Führe die Funktion aus und weise ihren Rückgabewert auf eine neue globale Variable 'person' zu.
    Überprüfe per Ausgabe in die Konsole, ob das Objekt richtig zusammen gestellt ist.
*/
function getPersonObject(name, alter, isTalented) {
    return {
        name: name,
        alter: alter,
        isTalented: isTalented
    };
}

let person = getPersonObject(name, alter, isTalented);
console.log(person);


console.log('Aufgabe 5:');
/*
    5.
    Schreibe eine Funktion 'getModifiedPersonObject', die einen Parameter 'personObject' entgegen nimmt.
    Die Funktion soll als Rückgabewert das übergebene Objekt mit einem zusätzlichen Feld 'beruf' zurückgeben.

    Führe die Funktion aus und prüfe ihren Rückgabewert per Ausgabe in die Konsole.
    Prüfe anschließend die globale Variable 'person' unverändert geblieben ist.

        -> Wurde das Objekt in der globalen Variable 'person' verändert, passe die Funktion so an, 
        dass sie eine modifizierte Kopie des übergebenen Objekts zurück gibt.

    Erkläre warum hier eine Kopie des übergebenen Parameters angelegt werden muss im Kommentar.
*/
// Da es sich beim uebergebenen Parameter 'personObject' um ein Parameter des Typs 'object' handelt,
// wird bei der uebergabe der globalen Variable 'person' nicht nur eine Wertekopie uebergeben,
// sondern eine Referenz auf das in der Variable 'person' gespeicherte Objekt.
// Damit Veraenderungen am uebergebenen Objekt keinen Einfluss auf das Original haben,
// muessen diese Aenderungen an einer Kopie durchgefuehrt werden.
// STICHWORT: Referenzparameter / Copy-By-Reference
function getModifiedPersonObject(personObject) {
    // Lege lokale Kopie des uebergebenen Objekts an
    let personObjectCopy = {...personObject};

    // Bearbeite lokale Kopie
    personObjectCopy.beruf = 'Schueler';
    
    // Gebe bearbeitete lokale Kopie als Rueckgabewert zurueck
    return personObjectCopy;
}
console.log( getModifiedPersonObject(person) );
console.log(person);

