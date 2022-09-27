// renderSchoolTemplate();

let classRoomContainer = document.querySelector('.class-rooms-container');

// ------------------------------ Elementreferenzen ------------------------------
let createClassRoomBtn = document.querySelector('#create-class-room-btn');
let createStudentBtn = document.querySelector('#create-student-btn');
let editStudentBtn = document.querySelector('#edit-student-btn');
let moveStudentBtn = document.querySelector('#move-student-btn');

// --------------------------------------------------------------------------


function renderSchoolSystem() {
    //! HACK: Dadurch werden alle Kind-Elemente mit NICHTS ersetzt also sozusagen entfernt.
    classRoomContainer.replaceChildren();

    school.forEach( classRoom => {
        // Erstelle Klassenraum div
        let classRoomDiv = document.createElement('div');
        classRoomDiv.classList.add('class-room');

        // Erstelle div fuer Loesch-Button des Klassenraums
        let deleteBtn = document.createElement('div');
        deleteBtn.classList.add('delete-entity-btn');
        deleteBtn.innerHTML = '&#128465;';

        // Haenge dem neuen Button einen Handler an
        deleteBtn.addEventListener('click', evt => {
            // Entferne Klassenraum mit entsprechender ID
            removeClass({id: classRoom.id});
            // Lasse Klassenverzeichnis neu in der GUI erstellen
            renderSchoolSystem();
        });

        // Haenge Button dem Klassenraum Div an
        classRoomDiv.appendChild(deleteBtn);

        // Erstelle Klassenraum Ueberschrift
        let classRoomHeading = document.createElement('h3');
        classRoomHeading.innerText = `${classRoom.name} - ID ${classRoom.id} - ${classRoom.students.length} students`;
        
        // Fuege Ueberschrift in Klassenraum div ein
        classRoomDiv.appendChild(classRoomHeading);

        // Durchlaufe alle Studenten und erstelle student-Divs
        let studentDivs = classRoom.students.map(student => {
            // Erstelle neue div fuer den aktuellen Studenten
            let studentDiv = document.createElement('div');
            studentDiv.classList.add('student');

            // Erstelle div fuer Loesch-Button des Studenten
            let deleteBtn = document.createElement('div');
            deleteBtn.classList.add('delete-entity-btn');
            deleteBtn.innerHTML = '&#128465;';

            // Haenge dem neuen Button einen Handler an
            deleteBtn.addEventListener('click', evt => {
                // Entferne Student mit entsprechender ID aus Klassenraum mit entsprechender ID
                removeStudent({classId: classRoom.id, studentId: student.id});
                // Lasse Klassenverzeichnis neu in der GUI erstellen
                renderSchoolSystem();
            });
            
            // Haenge Button dem Klassenraum Div an
            studentDiv.appendChild(deleteBtn);

            // Erstelle ungeordnete Liste fuer das div des aktuellen Studenten
            let studentInfoUl = document.createElement('ul');

            // Erstelle Listenpunkte fuer die Studi-Info
            let idLi = document.createElement('li');
            let nameLi = document.createElement('li');
            let mailLi = document.createElement('li');
            let cityLi = document.createElement('li');

            // Befuelle Listenpunkte mit Studi-Info
            idLi.innerHTML = `<strong>ID:</strong> ${student.id}`;
            nameLi.innerHTML = `<strong>Name:</strong> ${student.name}`;
            mailLi.innerHTML = `<strong>E-Mail:</strong> ${student.email}`;
            cityLi.innerHTML = `<strong>City:</strong> ${student.city}`;

            // Fuege Listenpunkte in ungeordneter Liste ein
            studentInfoUl.appendChild(idLi);
            studentInfoUl.appendChild(nameLi);
            studentInfoUl.appendChild(mailLi);
            studentInfoUl.appendChild(cityLi);
            
            // Fuege ungeordnete Liste mit Studi-Info in Studi-Div ein
            studentDiv.appendChild(studentInfoUl);

            return studentDiv;
        });

        // Fuege alle erstellen Divs fuer die Studenten in das Div des Klassenraums ein
        studentDivs.forEach( studentDiv => classRoomDiv.appendChild(studentDiv));


        // Das Div fuer den Klassenraum in den Klassenraum Container einfuegen
        classRoomContainer.appendChild(classRoomDiv);
    });

    // Gebe zu DEBUG Zwecken die Konsolen Repraesentation aus 
    renderSchoolTemplate();
}
renderSchoolSystem();




// Handler-Funktion fuer den Klassen-Hinzufuege-Button
createClassRoomBtn.addEventListener('click', evt => {
    // Halte Browser davon ab, die Seite bei Button-Click zu erneuern
    evt.preventDefault();

    // Wenn Button geklickt wurde

    // Hole das Inputfeld fuer den Klassennamen
    let classRoomNameInput = document.querySelector('#class-room-name-input');
    

    // Wenn Inputfeld fuer neuen Klassennamen nicht leer
    if (classRoomNameInput.value.trim().length > 0) {
        // Rufe die createClass Funktion aus der classManagement.js auf
        // und uebergebe ihr ein neues Objekt, bei dem der Wert des Inputs
        // als Wert fuer das Feld 'name' fungiert.
        createClass({
            name: classRoomNameInput.value
        });

        // Lasse Klassenverzeichnis neu in der GUI erstellen
        renderSchoolSystem();
    }
});

// Handler-Funktion fuer den Studenten-Hinzufuege-Button
createStudentBtn.addEventListener('click', evt => {
    evt.preventDefault(); // Halte Browser davon ab, die Seite bei Button-Click zu erneuern

    // Hole Werte aus den Formularfeldern
    let studentName = document.querySelector('#create-student-name-input').value;
    let studentEmail = document.querySelector('#create-student-email-input').value;
    let studentCity = document.querySelector('#create-student-city-input').value;
    // Klassen ID muss als Zahl eingebucht werden
    let classId = parseInt(document.querySelector('#create-student-class-id-input').value);

    if ( // Wenn alle Felder befuellt wurden
        (studentName.trim().length > 0) 
        && (studentEmail.trim().length > 0) 
        && (studentCity.trim().length > 0)
        && !isNaN(classId)
    ) {
        // Rufe Funktion zum Erstellen eines Studenten auf
        createStudent({
            name: studentName,
            email: studentEmail,
            city: studentCity,
            classId: classId
        });

        // Lasse Klassenverzeichnis neu in der GUI erstellen
        renderSchoolSystem();
    }
});

// Handler-Funktion fuer den Studenten-Bearbeiten-Button
editStudentBtn.addEventListener('click', evt => {
    evt.preventDefault(); // Halte Browser davon ab, die Seite bei Button-Click zu erneuern

    // Hole Werte aus den Formularfeldern
    let studentName = document.querySelector('#edit-student-name-input').value;
    let studentEmail = document.querySelector('#edit-student-email-input').value;
    let studentCity = document.querySelector('#edit-student-city-input').value;
    // ID Felder muessen als Zahl eingebucht werden
    let classId = parseInt(document.querySelector('#edit-student-class-id-input').value);
    let studentId = parseInt(document.querySelector('#edit-student-student-id-input').value);

    // Beide IDs sind richtige Zahlen
    if (!isNaN(classId) && !isNaN(studentId)) {
        // Mindestens eins der Felder wurde befuellt
        if (
            (studentName.trim().length > 0) 
            || (studentEmail.trim().length > 0) 
            || (studentCity.trim().length > 0)
        ) {
            // Erstelle Objekt fuer Studentenbearbeitung
            let editStudentObj = {
                classId: classId,
                studentId: studentId,  
            };

            // Fuege die optionalen Felder zum Objekt hinzu, falls befuellt
            if (studentName.trim().length > 0) editStudentObj.name = studentName;
            if (studentEmail.trim().length > 0) editStudentObj.email = studentEmail;
            if (studentCity.trim().length > 0) editStudentObj.city = studentCity;

            // Rufe Studentenbearbeitungsfunktion mit erstelltem Objekt auf
            editStudent(editStudentObj);

            // Lasse Klassenverzeichnis neu in der GUI erstellen
            renderSchoolSystem();
        
        } else {
            console.log('%cAlle optionalen Felder leer. Abbruch', 'color: red');
        }
    } else {
        console.log('%cDie Pflichtfelder sind nicht befuellt!', 'color: red');
    }
});

// Handler-Funktion fuer den Studenten-Verschieben-Button
moveStudentBtn.addEventListener('click', evt => {
    evt.preventDefault(); // Halte Browser davon ab, die Seite bei Button-Click zu erneuern

    // Hole Referenz auf entsprechende Fehlerbox und verstecke sie zunaechst
    let errBox = document.querySelector('#err-box-move-student');
    errBox.classList.remove('active');

    // ID Felder muessen als Zahl eingebucht werden
    let currentClassId = parseInt(document.querySelector('#move-student-class-old-id-input').value);
    let newClassId = parseInt(document.querySelector('#move-student-class-new-id-input').value);
    let studentId = parseInt(document.querySelector('#move-student-student-id-input').value);

    // Pruefe, ob Felder sinnvoll befuellt
    if (!isNaN(currentClassId) && !isNaN(newClassId) && !isNaN(studentId)) {
        let result = moveStudent({
            currentClassId: currentClassId,
            newClassId: newClassId,
            studentId: studentId
        });

        // Lasse Klassenverzeichnis neu in der GUI erstellen
        renderSchoolSystem();
    
    } else {
        console.log('%cDie Pflichtfelder sind nicht befuellt!', 'color: red');

        // Hole Referenz auf ungeordnete Liste der Fehlerbox
        let errList = errBox.children[0];
        // Liste der Fehler leeren
        errList.replaceChildren();

        // Array mit Fehlertexten
        let errors = [];
        // Wenn aktuelle Klassen ID fehlt, fuege Fehlertext hinzu
        if (isNaN(currentClassId)) {
            errors.push('Die ID der aktuellen Klasse fehlt');
        }
        if (isNaN(newClassId)) {
            errors.push('Die ID der neuen Klasse fehlt');
        }
        if (isNaN(studentId)) {
            errors.push('Die ID des Studenten fehlt');
        }

        // Erstelle Listenpunkte fuer jeden Fehlertext
        errors.forEach(error => {
            let errListItem = document.createElement('li');
            errListItem.innerText = error;
            errList.appendChild(errListItem);
        });

        // Zeige Fehlerbox an
        errBox.classList.add('active');
    }
});

/* createErrors([
    feld1,
    feld2,

]);

function createErrors(fields, errBox) {
    // pruefe, ob wichtige Felder nicht leer
    // pruefe, ob eingaben aus feldern in business logik fehler ergeben
} */