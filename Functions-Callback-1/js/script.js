
// Begruessungsfunktion, die Begruessung anhand 
// des uebergebenen Namen in die Konsole ausgibt.
function greetMessage(name) {
    console.log(`Good Morning, ${name}.`);
}
greetMessage('John');

/* 
    Gruppenbegruessungsfunktion, die einen Array von Namen uebergeben bekommt
    und einen Funktionverweis auf eine Begruessungsfunktion fuer jeden Namen.
*/
function greetUsers(users, greetingFn) {

    // Durchlaufe alle Namen im Namenarray 'users'
    for (let userIndex = 0; userIndex < users.length; userIndex++) {
        // Rufe uebergebene Begruessungsfunktion auf
        // mit aktuellem Namen aus dem Array als Parameter
        greetingFn(users[userIndex]);
    }
}

greetUsers(['Peter', 'Paul', 'Mary'], greetMessage);