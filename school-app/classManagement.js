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

  // Wenn Schulklasse mit diesen Parametern nicht bereits existiert
  if (!classExists(newClassParams)) {
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
  
  } else {
    console.log(`Eine Klasse mit dem Namen ${newClassParams.name} existiert bereits.`);
  }
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
  // Wenn Student nicht bereits existiert, erstelle neuen Student und fuege ein
  if (!studentExists(newStudentParams)) {
    // Extrahiere relevante Daten aus Parameter Objekt in einzelne lokale Variablen
    let classId = newStudentParams.classId;
    // ? Kleiner Trick: Destructuring Assignment
    let {name, email, city} = newStudentParams;

    // Finde Schulklassenobjekt anhand der Klassen ID
    let classIndex = school.findIndex( currentClass => currentClass.id === classId );

    // Wenn Schulklassenobjekts mit angegebener ID vorhanden
    if (classIndex > -1) {
      // Neues Studenten Objekt erstellen
      let newStudent = {
        id: nextStudentId,
        name: name,
        email: email,
        city: city
      };

      // Fuege neuen Studenten dem Studentenarray der entsprechenden Klasse hinzu
      school[classIndex].students.push( newStudent );

      // Zaehle globalen Studenten ID Zaehler um 1 hoch
      nextStudentId += 1;
    
    } else {
      console.log(`%cDer Klassenraum mit der ID ${newStudentParams.classId} existiert nicht.\nStudent wurde nicht angelegt.`, 'color: red');
    }
  
  } else {
    console.log(`Ein/e Student/in mit dem Namen ${newStudentParams.name} und der E-Mail-Adresse ${newStudentParams.email} existiert bereits.`);
  }
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

/* 

*/
function moveStudent(moveStudentParams) {
  // Extrahiere derzeitige Klassen ID, neue Klassen ID und Studenten ID aus Parameter Objekt in lokale Variablen
  let {currentClassId, newClassId, studentId} = moveStudentParams;

  // Finde Schulklassenobjekt derzeitiger Klasse anhand der Klassen ID
  let currentClassIndex = school.findIndex( currentClass => currentClass.id === currentClassId );

  // Finde Index des Studentenobjekts in derzeitiger Klasse anhand der Studenten ID
  let studentIndex = school[currentClassIndex].students.findIndex( currentStudent => currentStudent.id === studentId );

  // Finde Schulklassenobjekt neuer Klasse anhand der Klassen ID
  let newClassIndex = school.findIndex( currentClass => currentClass.id === newClassId );

  // Speichere Referenz auf Studentenobjekt in lokaler Variable zwischen
  let studentObj = school[currentClassIndex].students[studentIndex];

  // Kopiere Studentenobjektreferenz in StudentenArray der neuen Klasse
  school[newClassIndex].students.push(studentObj);

  // Loesche Studentenobjektreferenz in StudentenArray der alten Klasse
  school[currentClassIndex].students.splice(studentIndex, 1);
}

/* Hilfsfunktion zur Dublettenpruefung von KlassenObjekten anhand des Klassennamen */
function classExists(newClassParams) {
  // Array.some bricht beim ersten gefundenen Element, das das Praedikat erfuellt, ab.
  return school.some(classObj => classObj.name === newClassParams.name);

  // Alternativ liesse sich das auch ueber eine Indexpruefung erreichen
  // let existingClassIndex = school.findIndex(classObj => classObj.name === newClassParams.name);
  // return existingClassIndex > -1;
}


/* Hilfsfunktion zur Dublettenpruefung von StudentenObjekten anhand des Studentennamens und der E-Mail Adresse */
function studentExists(newStudentParams) {
  // Durchlaufe alle Klassen
  return school.some(classObj => {
    // Durchlaufe alle Studenten der jeweiligen Klasse
    return classObj.students.some(studentObj => {
      // Wenn Student selben Namen und selbe Mail-Adresse hat wie in Parametern -> return true
      return (studentObj.name === newStudentParams.name) && (studentObj.email === newStudentParams.email);
    });
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
/*
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


console.log('\nVerschiebe Student Peter mit der ID 5 aus Klasse FbW3 mit ID 3 nach FbW1 mit ID 1:');
moveStudent({
  currentClassId: 3,
  newClassId: 1,
  studentId: 5
});
renderSchoolTemplate();


console.log('\nVersuche Klasse mit bereits existierendem Namen zu erstellen:');
createClass({
  name: 'FbW1'
});
renderSchoolTemplate();


console.log('\nVersuche Student/in mit bereits existierende Namen und Mail-Adresse zu erstellen:');
createStudent({
  classId: 1,
  name: 'Petrus',
  email: 'peter@pan.de',
  city: 'Jerusalem'
});
renderSchoolTemplate();

*/