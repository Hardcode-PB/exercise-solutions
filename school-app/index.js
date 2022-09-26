// renderSchoolTemplate();

let classRoomContainer = document.querySelector('.class-rooms-container');

let createClassRoomBtn = document.querySelector('#create-class-room-btn');

function renderSchoolSystem() {
    //! HACK: Dadurch werden alle Kind-Elemente mit NICHTS ersetzt also sozusagen entfernt.
    classRoomContainer.replaceChildren();

    school.forEach( classRoom => {
        // Erstelle Klassenraum div
        let classRoomDiv = document.createElement('div');
        classRoomDiv.classList.add('class-room');

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


createStudent({
    classId: 10,
    name: 'asdasd',
    email: 'asdasdasdasd@asdasd.de',
    city: 'Rotterdam'
});