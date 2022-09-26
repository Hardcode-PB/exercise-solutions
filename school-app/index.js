let nextClassId = 4;
let nextStudentId = 5;

const school = [
    {
      id: 1,
      name: "FbW1",
      students: [
        {
          id: 1,
          name: "Alex",
          email: "alex@yahoo.com",
          city: "Berlin",
        },
        {
          id: 2,
          name: "Max",
          email: "max@yahoo.com",
          city: "Hamburg",
        },
      ],
    },
  
    {
      id: 2,
      name: "FbW2",
      students: [
        {
          id: 3,
          name: "Jon",
          email: "jon@yahoo.com",
          city: "Berlin",
        },
        {
          id: 4,
          name: "Pilar",
          email: "pilar@yahoo.com",
          city: "Berlin",
        },
      ],
    },

    {
      id: 3,
      name: "FbW3",
      students: [],
    },
];

/* ------------ DATA FUNCTIONS --------------- */

/* 
  Funktion zum Anlegen neuer Schulklassen
*/
function createClass(newClassParams) {
  // Extrahiere Namen der neuen Schulklasse aus dem Parameter Objekt
  let className = newClassParams.name;

  // Erstelle neues Schulklassenobjekt
  let newClass = {
    id: nextClassId,
    name: className,
    students: []
  };

  // Haenge neues Schulklassenobjekt an Schulklassenarray an
  school.push(newClass);

  // Zaehle eindeutige ID fuer Schulklassen um einen hoch
  nextClassId += 1;
}

/* 
  Hilfsfunktion zum Erstellen mehrerer Schulklassen gleichzeitig
*/
function createMultipleClasses(newClassesParams) {
  newClassesParams.names.forEach(className => {
    createClass({name: className});
  });
}

/* 
  Funktion zum Anlegen neuer Studenten in bestimmter Klasse
*/
function createStudent(newStudentParams) {
  // Extrahiere relevante Daten aus Parameter Objekt in einzelne lokale Variablen
  let classId = newStudentParams.classId;
  // ? Kleiner Trick: Destructuring Assignment
  let {name, email, city} = newStudentParams;

  // Neues Studenten Objekt erstellen
  let newStudent = {
    id: nextStudentId,
    name: name,
    email: email,
    city: city
  };

  // Finde Schulklassenobjekt anhand der Klassen ID
  let classIndex = school.findIndex( currentClass => currentClass.id === classId );

  // Fuege neuen Studenten dem Studentenarray der entsprechenden Klasse hinzu
  school[classIndex].students.push(newStudent);

  // Zaehle globalen Studenten ID Zaehler um 1 hoch
  nextStudentId += 1;
}


/* 
  Funktion zum Entfernen von Klassen anhand der Klassen ID
*/
function removeClass(removeClassParams) {
  // Extrahiere Klassen ID aus Parameter Objekt in lokale Variable
  let classId = removeClassParams.id;

  // Finde Schulklassenobjekt anhand der Klassen ID
  let classIndex = school.findIndex( currentClass => currentClass.id === classId );

  // Entferne gefundene Klasse aus School Array
  school.splice(classIndex, 1);
}

/* 
  Funktion zum Entfernen von Studenten anhand der Klassen ID und der Studenten ID
*/
function removeStudent(removeStudentParams) {
  // Extrahiere Klassen ID und Studenten ID aus Parameter Objekt in lokale Variablen
  let {classId, studentId} = removeStudentParams;

  // Finde Schulklassenobjekt anhand der Klassen ID
  let classObj = school.find( currentClass => currentClass.id === classId );

  // Finde Index des Studentenobjekts anhand der Studenten ID
  let studentIndex = classObj.students.findIndex( currentStudent => currentStudent.id === studentId );

  // Entferne Studentenobjekt aus der entsprechenden Klasse
  classObj.students.splice(studentIndex, 1);
}


/* 
  Funktion zum Editieren (Bearbeiten) eines Studenten anhand von Klassen ID und Studenten ID.
  Nur Felder, sie sich aendern sollen, werden mit uebergeben.
*/
function editStudent(editStudentParams) {
  // Extrahiere Klassen ID und Studenten ID aus Parameter Objekt in lokale Variablen
  let {classId, studentId} = editStudentParams;

  // Finde Schulklassenobjekt anhand der Klassen ID
  let classObj = school.find( currentClass => currentClass.id === classId );

  // Finde Studentenobjekts anhand der Studenten ID
  let studentObj = classObj.students.find( currentStudent => currentStudent.id === studentId );

  // Durchlaufe alle Felder des uebergebenen Objekts
  Object.keys(editStudentParams).forEach(key => {
    // Wenn aktuelles Feld auch in gefundenem Studentenobjekt vorhanden ist
    if ( Object.hasOwn(studentObj, key) ) {
      // Ueberschreibe Wert dieses Feld im Studentenobjekt mit dem Wert des uebergebenen Objekts
      studentObj[key] = editStudentParams[key];
    }
  });
}


/* -------------------------------------------------------------------------- */
/* 
  Die Ausgabe Funktion
*/
function renderSchoolTemplate() {
  // Die Gesamtzahlen fuer die Ausgabe ermitteln
  // Gesamtanzahl Schulklasse ist die Laenge des Schularrays
  let totalClasses = school.length;
  // Die Gesamtanzahl der Studenten muss errechnet werden 
  // indem aus jeder Schulklasse jeweils alle Studenten aufsummiert werden
  let totalStudents = school.reduce((studentSum, currentClass) => {
    // Gebe Akkumulator/Zwischensumme (studentSum) 
    // aufaddiert mit der jeweiligen Anzahl der Studenten in der Klasse zurueck
    return studentSum += currentClass.students.length;
  }, 0);


  // Erstelle iterativ die String Repraesentation der Schule bestehend aus den Klassen und ihren Studenten
  let schoolTemplate = school.reduce((templateStr, currentClass) => {
    // String fuer allgemeine Klasseninfo
    let classString = `${currentClass.name} - (class ID: ${currentClass.id}):\n`;

    // Erstellen der Studenten Strings mit iterativem Verfahren (reduce)
    let studentsString = currentClass.students.reduce((studentsStr, currentStudent, studentIndex) => {
      // String fuer einzelnen Studenten
      let currentStudentString = `\t${studentIndex+1} - ${currentStudent.name}, ${currentStudent.email}, ${currentStudent.city} - (student ID: ${currentStudent.id}).\n`;

      // Gebe bisherige Strings der Studenten plus den neuen zurueck
      return studentsStr + currentStudentString;
    }, '');

    // Wenn derzeitige Klasse keine Studenten hat
    if (currentClass.students.length < 1) {
      // Setze Ersatzstring
      studentsString += '\tThe class is empty\n';
    }

    // Trenner
    studentsString += '***************************\n';

    // Gebe Stringrepraesentation der bisherigen Klassen sowie jeweilige Klasse und deren Studenten zurueck
    return templateStr + classString + studentsString;
  }, 'School Classes:\n------------------\n');

  // Haenge Zeile mit Gesamtzahlen an
  let totalNumbers = `\tTotal classes ${totalClasses}, total students ${totalStudents}`;
  schoolTemplate += totalNumbers;

  // Gebe die fertige Stringrepraesentation der gesamten Schule in die Konsole aus
  console.log(schoolTemplate);
}



/* -------------------------------------------------------------------------- */
console.log('Ausgangssituation:');
renderSchoolTemplate();

console.log('\nFuege neue Klasse FbW4 hinzu:');
createClass({name: 'FbW4'});
renderSchoolTemplate();

console.log('\nFuege zwei neue Klassen FbW5 und FbW6 hinzu:');
createMultipleClasses({
  names: [
    'FbW5',
    'FbW6'
  ]
});
renderSchoolTemplate();

console.log('\nFuege neuen Studenten Peter der Klasse FbW3 hinzu:');
createStudent({
  classId: 3,
  name: 'Peter',
  email: 'peter@pan.de',
  city: 'Lummerland'
});
renderSchoolTemplate();


console.log('\nEntferne Klasse FbW6 mit der ID 6:');
removeClass({id: 6});
renderSchoolTemplate();



console.log('\nEntferne Studenten Alex mit ID 1 aus Klasse FbW1 mit ID 1:');
removeStudent({
  classId: 1,
  studentId: 1
});
renderSchoolTemplate();


console.log('\nAendere E-Mail und Stadt des Studenten Max mit der ID 2 in Klasse FbW1 mit ID 1:');
editStudent({
  classId: 1,
  studentId: 2,
  email: 'maxi@gmail.com',
  city: 'Leipzig'
});
renderSchoolTemplate();

