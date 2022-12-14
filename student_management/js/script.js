/* 
    Aufgabe 1:
    Schreibe ein Funktion printStudent(name, age, city, study) zur Ausgabe eines Studenten.
    Die Funktion soll einen String wie im folgenden Beispiel 
    als Rückgabewert (return) anhand der übergebenen Parameter zurückgeben:
    printStudent('Peter', 12, 'Nimmerland', 'Traumlehre'); // -> 'Peter ist 12 Jahre alt, kommt aus Nimmerland und studiert zurzeit Traumlehre.'
*/
// Schreibe deinen Code hier
function printStudent(name, age, city, study) {
    return `${name} ist ${age} Jahre alt, kommt aus ${city} und studiert zurzeit ${study}.`;
}

// Test
try {
    let passed = printStudent('Peter', 12, 'Nimmerland', 'Traumlehre') === 'Peter ist 12 Jahre alt, kommt aus Nimmerland und studiert zurzeit Traumlehre.';
    console.log(`Aufgabe 1: %c${passed ? 'Richtig' : 'Falsch'}`, `color: ${passed ? 'green' : 'red'}`);
} catch (error) {
    console.log('%cAufgabe 1 Fehlt!', 'color: red');
}


/* 
    Aufgabe 2:
    Erstelle ein Objekt namens 'student', das folgende Felder beinhaltet: name, age, city, study.
    Die Werte der Felder kannst du frei wählen.
*/
// Schreibe deinen Code hier
let student = {
    name: 'Marie',
    age: 23,
    city: 'Hannover',
    study: 'Chemie'
};

// Test
try {
    let passed = Object.hasOwn(student, 'name');
    passed = passed && Object.hasOwn(student, 'age');
    passed = passed && Object.hasOwn(student, 'city');
    passed = passed && Object.hasOwn(student, 'study');
    console.log(`Aufgabe 2: %c${passed ? 'Richtig' : 'Falsch'}`, `color: ${passed ? 'green' : 'red'}`);
} catch (error) {
    console.log('%cAufgabe 2 Fehlt!', 'color: red');
}


/* 
    Aufgabe 3:
    Füge dem oben erstellten Objekt 'student' die Methode 'printOut' hinzu, 
    die einen String wie printStudent() aus Aufgabe 1 zurück gibt.
    Bsp.: 
    student.printOut(); // ---> 'Peter ist 12 Jahre alt, kommt aus Nimmerland und studiert zurzeit Traumlehre.';

    Die Werte, die dabei ausgegeben werden, sollen aus dem Objekt selbst kommen.
*/
// Schreibe deinen Code hier
student.printOut = function() {
    return `${this.name} ist ${this.age} Jahre alt, kommt aus ${this.city} und studiert zurzeit ${this.study}.`;
};


// Test
try {
    let passed = Object.hasOwn(student, 'printOut');
    passed = passed && student.printOut() === `${student.name} ist ${student.age} Jahre alt, kommt aus ${student.city} und studiert zurzeit ${student.study}.`;
    console.log(`Aufgabe 3: %c${passed ? 'Richtig' : 'Falsch'}`, `color: ${passed ? 'green' : 'red'}`);
} catch (error) {
    console.log('%cAufgabe 3 Fehlt!', 'color: red');
}



/* 
    Aufgabe 4:
    Konstruiere nach dem Vorbild des 'student' Objekts aus Aufgabe 2 eine Klasse 'Student'.
    Füge auch die Methode aus Aufgabe 3 zu dieser Klasse hinzu.
*/
// Schreibe deinen Code hier

// Klassendefinition
class Student {
    // Konstruktordefinition für das Erstellen neuer Instanzen
    constructor(name, age, city, study) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.study = study;
    }

    // Methodendefinition für die Instanzmethode 'printOut'
    printOut() {
        return `${this.name} ist ${this.age} Jahre alt, kommt aus ${this.city} und studiert zurzeit ${this.study}.`;
    }

    editName(newName) {
        this.name = newName;
    }
}

// Test
try {
    let peter = new Student('Peter', 12, 'Nimmerland', 'Traumlehre');
    let passed = peter instanceof Student;
    passed = passed && (typeof peter.printOut === 'function');
    passed = passed && peter.printOut() === `${peter.name} ist ${peter.age} Jahre alt, kommt aus ${peter.city} und studiert zurzeit ${peter.study}.`;
    console.log(`Aufgabe 4: %c${passed ? 'Richtig' : 'Falsch'}`, `color: ${passed ? 'green' : 'red'}`);
} catch (error) {
    console.log('%cAufgabe 4 Fehlt!', 'color: red');
}


// Vergesst ab hier das ursprüngliche Objekt 'student'.
/* 
    Aufgabe 5:
    Füge der neuen Klasse Student eine Methode 'editName' zum Bearbeiten des Namen hinzu.
    Die Methode bekommt den neuen Namen als Parameter übergeben und ersetzt diesen in der jeweiligen Instanz.
    Bsp.:
    let student = new Student('Peter', 12, 'Nimmerland', 'Fliegen');
    console.log(student.name); // ---> 'Peter'
    student.editName('Markus');
    console.log(student.name); // ---> 'Markus'
*/
// Schreibe deinen Code hier
// Siehe Aufgabe 4
Student.prototype.editName = function(newName) {
    this.name = newName;
}


// Test
try {
    let actuallyMarkus = new Student('Peter', 12, 'Nimmerland', 'Traumlehre');
    let passed = actuallyMarkus instanceof Student;
    passed = passed && (typeof actuallyMarkus.editName === 'function');
    actuallyMarkus.editName('Markus');
    passed = passed && (actuallyMarkus.name === 'Markus');
    console.log(`Aufgabe 5: %c${passed ? 'Richtig' : 'Falsch'}`, `color: ${passed ? 'green' : 'red'}`);
} catch (error) {
    console.log('%cAufgabe 5 Fehlt!', 'color: red');
}



/* 
    Aufgabe 6:
    Konstruiere eine Klasse 'Course', die in den Konstruktor 
    einen Namen, eine Stadt und einen Studiengang entgegen nimmt.
    Außerdem soll die Klasse einen Array mit Studenten Instanzen namens 'students' halten.
    Um Studenten hinzuzufügen, soll eine Methode 'addStudent(student)' hinzugefügt werden.
    Bsp.:
    let course = new Course('FbW01', 'Hamburg', 'BWL');
    console.log(course.students); // ---> []
    course.addStudent(student);
    console.log(course.students); // ---> [Student]
*/
// Schreibe deinen Code hier
class Course {
    // Felder mit Standardwerten in jeder Instanz
    students = [];
    isActive = true;

    // privates Feld
    #privateField = false;

    constructor(name, city, study) {
        // Felder mit veränderlichen Werten abhängig vom Konstruktor-Aufruf
        this.name = name;
        this.city = city;
        this.study = study;
    }

    addStudent(newStudent) {
        // Füge zum Instanzfeld 'students' (welches ein Array ist)
        // die übergebene Instanz von 'Student' hinzu.
        this.students.push(newStudent);
    }
}
let myCourse = new Course('FbW1', 'Hamburg', 'Informatik');
console.log(myCourse.students);
let heinrich = new Student('Heinrich', 36, 'Berlin', 'VWL');
myCourse.addStudent(heinrich);
console.log(myCourse.students);


// Test
try {
    let course = new Course('FbW01', 'Hamburg', 'BWL');
    let passed = course instanceof Course;
    passed = passed && (typeof course.addStudent === 'function');
    let student = new Student('Peter', 12, 'Nimmerland', 'BWL');
    course.addStudent(student);
    passed = passed && (course.students[0] === student);
    console.log(`Aufgabe 6: %c${passed ? 'Richtig' : 'Falsch'}`, `color: ${passed ? 'green' : 'red'}`);
} catch (error) {
    console.log('%cAufgabe 6 Fehlt!', 'color: red');
}



/* 
    Aufgabe 7:
    Füge der Klasse 'Course' eine Methode 'printStudents()' hinzu.
    Die Methode soll ein Array mit allen in dem Kurs enthaltenen Studentennamen in etwas veränderter Form wiedergeben.
    Zu dem Namen jedes Studenten soll noch per Unterstrich (_) der Studiengang angehängt werden.
    Bsp.:
    course.printStudents(); // ---> ['Peter_Traumlehre', 'Thomas_BWL', 'Marie_Chemie']
*/
// Schreibe deinen Code hier
// Siehe Aufgabe 6. --> da mit eingefügt

// Alternativ über den Prototypen:
Course.prototype.printStudents = function() {
    return this.students.map( student => {
        return `${student.name}_${student.study}`;
    });
};
myCourse.addStudent(new Student('Wilma', 40, 'Lüdenscheidt', 'Physik'));
myCourse.addStudent(new Student('Barneby', 55, 'London', 'Jura'));
console.log(myCourse.printStudents());


// Test
try {
    let course = new Course('FbW01', 'Hamburg', 'BWL');
    let passed = course instanceof Course;
    passed = passed && (typeof course.printStudents === 'function');
    let peter = new Student('Peter', 12, 'Nimmerland', 'Traumlehre');
    let thomas = new Student('Thomas', 26, 'Hannover', 'BWL');
    let marie = new Student('Marie', 18, 'Berlin', 'Chemie');
    course.addStudent(peter);
    course.addStudent(thomas);
    course.addStudent(marie);
    passed = passed && (course.printStudents().join('') === ['Peter_Traumlehre', 'Thomas_BWL', 'Marie_Chemie'].join(''));
    
    console.log(`Aufgabe 7: %c${passed ? 'Richtig' : 'Falsch'}`, `color: ${passed ? 'green' : 'red'}`);
} catch (error) {
    console.log('%cAufgabe 7 Fehlt!', 'color: red');
}


/* 
    Aufgabe 8:
    Füge der Klasse Student eine Methode zum Hinzufügen einer Matrikelnummer hinzu.
    Die Methode soll 'addStudentNumber' heißen und als Parameter einen String,
    der die Matrikelnummer darstellt, übergeben bekommen.
    Die Matrikelnummer soll vor Hinzufügen noch auf folgende Regeln validiert werden:
        - Nur Ziffern
        - Müssen genau 8 Stellen sein
        - Keine Ziffern darf doppelt hintereinander auftreten
    Die Methode soll true zurückgeben, wenn die Matrikelnummer erfolgreich hinzugefügt wurde
    und false, falls es an der Validierung gescheitert ist.
    Bsp.:
    let bestStudentEver = new Student('Sebastian', 30, 'Würzburg', 'Maschinenbau');
    console.log(bestStudentEver.addStudentNumber('01234567')); // ---> true
    console.log(bestStudentEver.studentNumber); // ---> '01234567'
    console.log(bestStudentEver.addStudentNumber('101AB')); // --> false
*/
// Schreibe deinen Code hier
Student.prototype.addStudentNumber = function(studentNumber) {
    // Prüfe, ob Anzahl der Zeichen in der Matrikelnummer genau 8 ist
    if (studentNumber.length !== 8) return false;

    // Prüfe, ob Matrikelnummer is Zahl umwandelbar ist (also nur Ziffern)
    if (isNaN(studentNumber)) return false;

    // Trenne den String der Matrikelnummer in Array einzelner Zeichen auf
    let chars = studentNumber.split('');

    // Vergleichsvariable für das vorherige Zeichen
    let predecessor = chars[0];

    // Indikator für doppelte-aufeinanderfolgende
    let hasConsecutives = false;

    // Laufindex für While-Schleife
    let index = 1;

    // Durchlaufe alle Zeichen solange keine doppelt-aufeinanderfolgenden gefunden wurden
    while (index < chars.length && hasConsecutives === false) {
        // Speichere aktuelles Zeichen in Variable zwischen
        let currentCharacter = chars[index];

        // Weise Indikator Ergebnis der Vergleichs auf Gleichheit zu
        hasConsecutives = (currentCharacter === predecessor);

        // Setze aktuelles Zeichen als Vergleichszeichen für nächsten Durchlauf
        predecessor = currentCharacter;

        // Erhöhe den Laufindex um 1
        index++;
    }



    /* // Durchlaufe alle Zeichen ab der 2. Stelle
    for (let index = 1; index < chars.length; index++) {
        // Speichere aktuelles Zeichen in Variable zwischen
        let currentCharacter = chars[index];

        // Wenn aktuelles Zeichen gleich dem vorherigen
        if (currentCharacter === predecessor) {
            // Setze Indikator auf true
            hasConsecutives = true;

            // Brich Schleife ab
            break;
        }

        // Setze aktuelles Zeichen als Vergleichszeichen für nächsten Durchlauf
        predecessor = currentCharacter;
    } */

    // Gebe false zurück, wenn doppelte aufeinanderfolgende gefunden wurden
    if (hasConsecutives) return false;

    // Alle Kontrollen erfolgreich -> Füge Matrikelnummer hinzu
    this.studentNumber = studentNumber;

    // Gebe true als Erfolgsindikator zurück
    return true;
}


// Test
try {
    let sebastian = new Student('Sebastian', 30, 'Würzburg', 'Maschinenbau');
    let passed = (sebastian.addStudentNumber('AB') === false);
    passed = passed && (sebastian.studentNumber === undefined);
    passed = passed && (sebastian.addStudentNumber('010') === false);
    passed = passed && (sebastian.studentNumber === undefined);
    passed = passed && (sebastian.addStudentNumber('00123456') === false);
    passed = passed && (sebastian.studentNumber === undefined);
    passed = passed && (sebastian.addStudentNumber('12345678') === true);
    passed = passed && (sebastian.studentNumber === '12345678');
    
    console.log(`Aufgabe 8: %c${passed ? 'Richtig' : 'Falsch'}`, `color: ${passed ? 'green' : 'red'}`);
} catch (error) {
    console.log('%cAufgabe 8 Fehlt!', 'color: red');
}