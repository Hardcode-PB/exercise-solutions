### Array Methode .reduce

#### 1. Nehmen wir an, wir haben ein Array von Benutzern in der Form {id:..., Name:..., Alter... }.

* Erstelle eine Funktion groupById(arr), die daraus ein Objekt mit id als Schlüssel und einem Unterobjekt als Wert erzeugt.

Zum Beispiel:
```js 
let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

/*
console.log(usersById)
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
``` 
* Diese Funktion ist sehr praktisch, wenn du mit Serverdaten arbeitest.

* In dieser Aufgabe gehen wir davon aus, dass die ID eindeutig ist. Es darf keine zwei Array-Elemente mit der gleichen id geben.

* Bitte verwende die Methode array .reduce in der Lösung.

[//]: # (autograding info start)
## Ergebnisse
  [![Ergebnis-Badge](../../blob/badges/.github/badges/autograding/badge.svg)](https://github.com/DigitalCareerInstitute/PB-Data-Structure-ArrayMethod-reduce/actions)
  
  [Ergebnisdetails](https://github.com/DigitalCareerInstitute/PB-Data-Structure-ArrayMethod-reduce/actions)
  
  ### Debugging deines Codes
  > [Lesen der Testausgaben](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)
  
  Es gibt zwei Möglichkeiten, um herauszufinden, warum Aufgaben nicht abgeschlossen werden können:
  #### 1. Tests lokal ausführen
  - Führe `npm install` aus
  - Führe `npm test` im Terminal aus. Du wirst sehen, wo deine Lösung vom erwarteten Ergebnis abweicht.
  
  #### 2. Überprüfen der Testausgabe auf GitHub
  - Gehe auf die [Registerkarte Aktionen deines Übungsrepos](https://github.com/DigitalCareerInstitute/PB-Data-Structure-ArrayMethod-reduce/actions)
  - Dort siehst du eine Liste mit den Testläufen. Klicke auf den obersten.
  - Klicke auf "Autograding".
  - Erweitere den Punkt 'Run DCI-EdTech/autograding-action@main'
  - Hier siehst du alle Ausgaben des Testlaufs

[//]: # (autograding info end)
