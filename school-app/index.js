// renderSchoolTemplate();

let classRoomContainer = document.querySelector('.class-rooms-container');

// ------------------------------ Elementreferenzen ------------------------------
let createClassRoomBtn = document.querySelector('#create-class-room-btn');
let createStudentBtn = document.querySelector('#create-student-btn');
let editStudentBtn = document.querySelector('#edit-student-btn');
let moveStudentBtn = document.querySelector('#move-student-btn');
let errBox = document.querySelector('.error-box');

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

            // TODO mache die Schuelerkaesten draggable
            // studentDiv.setAttribute('draggable', 'true');

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
setButtonsDisabledHandlers();



// Handler-Funktion fuer den Klassen-Hinzufuege-Button
createClassRoomBtn.addEventListener('click', evt => {
    // Halte Browser davon ab, die Seite bei Button-Click zu erneuern
    evt.preventDefault();

    // Hole Referenz auf entsprechende Fehlerbox und verstecke sie zunaechst
    errBox.classList.remove('active');

    // Wenn Button geklickt wurde

    // Hole das Inputfeld fuer den Klassennamen
    let classRoomNameInput = document.querySelector('#class-room-name-input');
    

    // Wenn Inputfeld fuer neuen Klassennamen nicht leer
    if (classRoomNameInput.value.trim().length > 0) {
        // Rufe die createClass Funktion aus der classManagement.js auf
        // und uebergebe ihr ein neues Objekt, bei dem der Wert des Inputs
        // als Wert fuer das Feld 'name' fungiert.
        let result = createClass({
            name: classRoomNameInput.value
        });

        // Wenn Klasse erfolgreich hinzugefuegt
        if ( result.success ) {
            // Lasse Klassenverzeichnis neu in der GUI erstellen
            renderSchoolSystem();

            // Setze Eingabefeld fuer Namen zurueck
            classRoomNameInput.value = '';
            // Deaktiviere den Knopf wieder
            createClassRoomBtn.disabled = true;

        } else {
            // Zeige Fehler von createClass an
            renderErrBox( result.errors );
        }
    }
});

// Handler-Funktion fuer den Studenten-Hinzufuege-Button
createStudentBtn.addEventListener('click', evt => {
    evt.preventDefault(); // Halte Browser davon ab, die Seite bei Button-Click zu erneuern

    // Hole Referenz auf entsprechende Fehlerbox und verstecke sie zunaechst
    errBox.classList.remove('active');

    // Array fuer Fehlermeldungen
    let errors = [];

    // Hole die Eingabefelder
    let nameInput = document.querySelector('#create-student-name-input');
    let emailInput = document.querySelector('#create-student-email-input');
    let cityInput = document.querySelector('#create-student-city-input');
    let classIdInput = document.querySelector('#create-student-class-id-input');

    // Hole Werte aus den Formularfeldern
    let studentName = nameInput.value.trim();
    let studentEmail = emailInput.value.trim();
    let studentCity = cityInput.value.trim();
    // Klassen ID muss als Zahl eingebucht werden
    let classId = parseInt(classIdInput.value.trim());

    if ( // Wenn alle Felder befuellt wurden
        (studentName.length > 0) 
        && (studentEmail.length > 0) 
        && (studentCity.length > 0)
        && !isNaN(classId)
    ) {
        // Rufe Funktion zum Erstellen eines Studenten auf
        let result = createStudent({
            name: studentName,
            email: studentEmail,
            city: studentCity,
            classId: classId
        });

        if (result.success) {
            // Lasse Klassenverzeichnis neu in der GUI erstellen
            renderSchoolSystem();

            // Setze Eingabefelder zurueck
            nameInput.value = '';
            emailInput.value = '';
            cityInput.value = '';
            classIdInput.value = '';
        
        } else {
            // Rufe Funktion zum Anzeigen der Fehler auf und uebergebe erhaltene Operationsfehler
            renderErrBox(result.errors);
        }

    } else {
        // Pruefe fehlende Feldeingaben und generiere Fehlermeldungen
        if (studentName.length < 1) errors.push('Der Name des Studenten fehlt');
        if (studentEmail.length < 1) errors.push('Der Email Adresse des Studenten fehlt');
        if (studentCity.length < 1) errors.push('Der Stadt des Studenten fehlt');
        if (isNaN(classId)) errors.push('Die Klassen ID fehlt');

        // Rufe Funktion zur Anzeige der Fehler auf
        renderErrBox(errors);
    }
});

// Handler-Funktion fuer den Studenten-Bearbeiten-Button
editStudentBtn.addEventListener('click', evt => {
    evt.preventDefault(); // Halte Browser davon ab, die Seite bei Button-Click zu erneuern

    // Array fuer Fehlermeldungen
    let errors = [];

    // Hole Referenz auf entsprechende Fehlerbox und verstecke sie zunaechst
    errBox.classList.remove('active');


    // Hole Inputfelder
    let nameInput = document.querySelector('#edit-student-name-input');
    let emailInput = document.querySelector('#edit-student-email-input');
    let cityInput = document.querySelector('#edit-student-city-input');
    let classIdInput = document.querySelector('#edit-student-class-id-input');
    let studentIdInput = document.querySelector('#edit-student-student-id-input');

    // Hole Werte aus den Formularfeldern
    let studentName = nameInput.value.trim();
    let studentEmail = emailInput.value.trim();
    let studentCity = cityInput.value.trim();
    // ID Felder muessen als Zahl eingebucht werden
    let classId = parseInt(classIdInput.value.trim());
    let studentId = parseInt(studentIdInput.value.trim());

    // Beide IDs sind richtige Zahlen
    if (!isNaN(classId) && !isNaN(studentId)) {
        // Mindestens eins der Felder wurde befuellt
        if (
            (studentName.length > 0) 
            || (studentEmail.length > 0) 
            || (studentCity.length > 0)
        ) {
            // Erstelle Objekt fuer Studentenbearbeitung
            let editStudentObj = {
                classId: classId,
                studentId: studentId,  
            };

            // Fuege die optionalen Felder zum Objekt hinzu, falls befuellt
            if (studentName.length > 0) editStudentObj.name = studentName;
            if (studentEmail.length > 0) editStudentObj.email = studentEmail;
            if (studentCity.length > 0) editStudentObj.city = studentCity;

            // Rufe Studentenbearbeitungsfunktion mit erstelltem Objekt auf
            let result = editStudent(editStudentObj);

            // Wenn Bearbeitung des Studenten erfolgreich
            if ( result.success ) {
                // Lasse Klassenverzeichnis neu in der GUI erstellen
                renderSchoolSystem();
            
                // Setze Eingabefelder zurueck
                nameInput.value = '';
                emailInput.value = '';
                cityInput.value = '';
                classIdInput.value = '';
                studentIdInput.value = '';

            } else {
                // Lasse Fehlermeldungen anzeigen
                renderErrBox(result.errors);
            }
        
        } else {
            console.log('%cAlle optionalen Felder leer. Abbruch', 'color: red');

            // Fuege Fehlermeldungen zu Fehlermeldungsarray hinzu
            errors.push('Alle optionalen Felder (Name, Email, Stadt) sind leer');

            // Lasse Fehlermeldungen anzeigen
            renderErrBox(errors);
        }
    } else {
        console.log('%cDie Pflichtfelder sind nicht befuellt!', 'color: red');

        // Fuege Fehlermeldungen zu Fehlermeldungsarray hinzu
        if (isNaN(classId)) errors.push('Das Pflichtfeld fuer die Klassen ID ist leer');
        if (isNaN(studentId)) errors.push('Das Pflichtfeld fuer die Studenten ID ist leer');

        // Lasse Fehlermeldungen anzeigen
        renderErrBox(errors);
    }
});

// Handler-Funktion fuer den Studenten-Verschieben-Button
moveStudentBtn.addEventListener('click', evt => {
    evt.preventDefault(); // Halte Browser davon ab, die Seite bei Button-Click zu erneuern

    // Hole Referenz auf entsprechende Fehlerbox und verstecke sie zunaechst
    errBox.classList.remove('active');

    // Hole Refenzen auf Eingabefelder
    let classIdInput = document.querySelector('#move-student-class-old-id-input');
    let newClassIdInput = document.querySelector('#move-student-class-new-id-input');
    let studentIdInput = document.querySelector('#move-student-student-id-input');


    // ID Felder muessen als Zahl eingebucht werden
    let currentClassId = parseInt(classIdInput.value);
    let newClassId = parseInt(newClassIdInput.value);
    let studentId = parseInt(studentIdInput.value);

    // Pruefe, ob Felder sinnvoll befuellt
    if (!isNaN(currentClassId) && !isNaN(newClassId) && !isNaN(studentId)) {
        // Rufe Funktion zum Verschieben des Studenten auf
        let result = moveStudent({
            currentClassId: currentClassId,
            newClassId: newClassId,
            studentId: studentId
        });

        // Wenn Student erfolgreich verschoben wurde
        if ( result.success ) {
            // Lasse Klassenverzeichnis neu in der GUI erstellen
            renderSchoolSystem();

            // Setze Eingabefelder zurueck
            classIdInput.value = '';
            newClassIdInput.value = '';
            studentIdInput.value = '';

        } else {
            // Zeige Fehler der moveStudent Funktion an
            renderErrBox(result.errors);
        }
    
    } else {
        console.log('%cDie Pflichtfelder sind nicht befuellt!', 'color: red');

        // Array mit Fehlertexten
        let errors = [];

        // Wenn aktuelle Klassen ID fehlt, fuege Fehlertext hinzu
        if (isNaN(currentClassId)) errors.push('Die ID der aktuellen Klasse fehlt');
        if (isNaN(newClassId)) errors.push('Die ID der neuen Klasse fehlt');
        if (isNaN(studentId)) errors.push('Die ID des Studenten fehlt');

        // Rufe Funktion zum Anzeigen der Fehler auf
        renderErrBox(errors);
    }
});

/* 
    Hilfsfunktion zum Befuellen der ungeordneten Liste einer uebergebenen ErrorBox
    mit Fehlertexten aus einem uebergebenen Array.
*/
function renderErrBox(errors) {
    // Hole Referenz auf ungeordnete Liste der Fehlerbox
    let errList = errBox.children[0];
    // Liste der Fehler leeren
    errList.replaceChildren();

    // Erstelle Listenpunkte fuer jeden Fehlertext
    errors.forEach(error => {
        let errListItem = document.createElement('li');
        errListItem.innerText = error;
        errList.appendChild(errListItem);
    });

    // Zeige Fehlerbox an
    errBox.classList.add('active');
}


/* 
    Hilfsfunktion um allen Inputs die onInput Handler 
    mit dem entsprechenden Button anzuhaengen
*/
function setButtonsDisabledHandlers() {
    // ---------- KLASSENRAUM ANLEGEN -------------
    // Hole Eingabefeld
    let classRoomNameInput = document.querySelector('#class-room-name-input');
    addDisableHandlerToInputs([classRoomNameInput], createClassRoomBtn);
    

    // ---------- STUDENT ANLEGEN -------------
    // Hole die Eingabefelder
    let createStudentNameInput = document.querySelector('#create-student-name-input');
    let createStudentEmailInput = document.querySelector('#create-student-email-input');
    let createStudentCityInput = document.querySelector('#create-student-city-input');
    let createStudentClassIdInput = document.querySelector('#create-student-class-id-input');

    // Rufe Funktion zum Anhaengen von Button Disable Handler fuer Array von Eingabefeldern auf
    addDisableHandlerToInputs([
        createStudentNameInput, 
        createStudentEmailInput, 
        createStudentCityInput, 
        createStudentClassIdInput
    ], createStudentBtn);


    // ---------- STUDENT BEARBEITEN -------------
    // Hole Inputfelder
    let editStudentNameInput = document.querySelector('#edit-student-name-input');
    let editStudentEmailInput = document.querySelector('#edit-student-email-input');
    let editStudentCityInput = document.querySelector('#edit-student-city-input');
    let editStudentClassIdInput = document.querySelector('#edit-student-class-id-input');
    let editStudentStudentIdInput = document.querySelector('#edit-student-student-id-input');

    // Rufe Funktion zum Anhaengen von Button Disable Handler fuer Array von Eingabefeldern auf
    addDisableHandlerToInputs([
        editStudentNameInput, 
        editStudentEmailInput, 
        editStudentCityInput, 
        editStudentClassIdInput,
        editStudentStudentIdInput
    ], editStudentBtn);


    // ---------- STUDENT VERSCHIEBEN -------------
    // Hole Refenzen auf Eingabefelder
    let moveStudentClassIdInput = document.querySelector('#move-student-class-old-id-input');
    let moveStudentNewClassIdInput = document.querySelector('#move-student-class-new-id-input');
    let moveStudentStudentIdInput = document.querySelector('#move-student-student-id-input');

    // Rufe Funktion zum Anhaengen von Button Disable Handler fuer Array von Eingabefeldern auf
    addDisableHandlerToInputs([
        moveStudentClassIdInput, 
        moveStudentNewClassIdInput, 
        moveStudentStudentIdInput, 
    ], moveStudentBtn);
}

// Funktion zum Anhaengen von Button Disable Handler fuer Array von Eingabefeldern
function addDisableHandlerToInputs(inputs, button) {
    inputs.forEach(input => {
        input.addEventListener('input', evt => {
            // Wenn Inhalt des Feldes leer
            if (evt.target.value.trim().length > 0) {
                // aktiviere Button
                button.disabled = false;

            } else {
                // deaktiviere Button, weil Eingabefeld leer
                button.disabled = true;
            }
        });
    });
}