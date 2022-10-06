// Prototyp fuer CoffeeShop
const STANNI_MENU = [
    {
        item: 'Filtergaffe',
        type: 'drink',
        price: 1.0
    }
];

// Constructor-Function fuer CoffeeShop mit Default-Parametern
function CoffeeShop(name = 'Ulrikes Käffchen-Franchise', menu = STANNI_MENU, orders = []) {
    this.name = name;
    this.menu = menu;
    this.orders = orders;
}

// CoffeeShop Methode zum Hinzufuegen von Bestellungen anhand des Artikelnamen
CoffeeShop.prototype.addOrder = function(itemName) {
    // Suche im Menu nach Artikel mit demselben Namen wie itemName und speichere in Variable
    let orderedItem = this.menu.find( menuItem => menuItem.item === itemName );

    // Wenn gewuenschter Artikel gefunden
    if ( orderedItem ) {
        // Fuege gewuenschten Artikel als Kopie zu Bestellungen hinzu
        this.orders.push({...orderedItem});
        console.log('Deine Bestellung wurde entgegengenommen');
    
    } else { // Wenn Artikel nicht gefunden
        console.log("Dieser Artikel ist derzeit leider nicht vorhanden");
    }
};

// CoffeeShop Methode zum Abarbeiten der Bestellungen (die aelteste zuerst -> FIFO hihi)
CoffeeShop.prototype.fulfullOrder = function() {
    // Wenn das Array der Bestellungen nicht leer
    if (this.orders.length > 0) {
        // Loesche erste Bestellung und gebe sie aus
        console.log(`Die Bestellung fuer ${this.orders.shift().item} ist fertig!`);
    
    } else { // Wenn keine Bestellungen im Array
        console.log('Alle Bestellung sind bereits verarbeitet');
    }
};


// CoffeeShop Methode zum Auflisten der Namen der Artikel der Bestellungen
CoffeeShop.prototype.listOrders = function() {
    // Mit .map ein neues array der Namen der orders erstellen
    console.log(this.orders.map( orderItem => orderItem.item ));


    // ODER etwas komplizierter mit .reduce
    // Erstelle mit reduce ein Array der Namen der Artikel in this.orders
    /* let ordersList = this.orders.reduce( (itemNames, currentItem) =>  {
        // Gebe neues Array mit allen bisherigen Eintraegen und dem neuen zurueck
        return [...itemNames, currentItem.item];
    }, [] ); */

    // console.log(ordersList);
};

// Methode zum Errechnen des faelligen Gesamtbetrages aller noch offenen Bestellungen
CoffeeShop.prototype.dueAmount = function() {
    // Mit reduce durch alle Bestellungen durch und die Summe der Preise aufaddieren
    let dueAmount = this.orders.reduce( (totalAmount, currentOrderItem) => {
        // Gebe zurueck bisherigen Gesamtbetrag plus den Preis des aktuellen Artikels
        return (parseFloat(totalAmount) + currentOrderItem.price).toFixed(2);
    }, '0.00' /* Initialwert '0.00' */);

    console.log(`Die fällige Gesamtsumme der offenen Bestellungen beträgt: €${dueAmount}`);

    return dueAmount;
}


CoffeeShop.prototype.cheapestItem = function() {
    // Lokale Variable fuer guenstigsten Artikel
    // Initialwert: Der erste Artikel auf der Speisekarte
    let cheapest = this.menu[0];

    // Durchlaufe gesamte Speisekarte
    this.menu.forEach(menuItem => {
        // Wenn aktueller Artikel guenstiger als bisheriger guenstigster Artikel
        if (menuItem.price < cheapest.price) {
            // Weise aktuellen Artikel der Ergebnisvariable zu
            cheapest = menuItem;
        }
    });

    console.log(`Der günstigste Artikel auf der Speisekarte ist: ${cheapest.item}`);
    return cheapest.item;
};

// CoffeeShop Methode zum Ausgeben aller Getraenkenamen der Speisekarte
CoffeeShop.prototype.onlyDrinks = function() {
    // Ergebnisarray fuer die namen aller Getraenke
    let drinksOnly = [];

    // Durchlaufe Speisekarte
    this.menu.forEach(menuItem => {
        // Wenn aktueller Artikel vom Typ 'drink'
        if (menuItem.type === 'drink') {
            // Fuege Namen des Artikels zu Ergebnisarray hinzu
            drinksOnly.push(menuItem.item);
        }
    } );

    console.log(drinksOnly);

    return drinksOnly;
}

// CoffeeShop Methode zum Ausgeben aller Speisenamen der Speisekarte
CoffeeShop.prototype.onlyFood = function() {
    // Ergebnisarray fuer die namen aller Getraenke
    let foodOnly = [];

    // Durchlaufe Speisekarte
    this.menu.forEach(menuItem => {
        // Wenn aktueller Artikel vom Typ 'food'
        if (menuItem.type === 'food') {
            // Fuege Namen des Artikels zu Ergebnisarray hinzu
            foodOnly.push(menuItem.item);
        }
    } );

    console.log(foodOnly);

    return foodOnly;
}


// -------------------------------------------------------------------------

// Neue Instanz von CoffeeShop ohne Angabe von eigenen Argumenten
let coffeeShop = new CoffeeShop();

// Neue Instanz von CoffeeShop mit Angabe eigener Argumente fuer 'name' und 'menu'
let myOwnCoffeeShop = new CoffeeShop(
    'Ulrikes Käffchen-Franchise: Berliner Tor',
    [
        {
            item: 'Pils',
            type: 'drink',
            price: 1.25
        },
        {
            item: 'Kaesebrot',
            type: 'food',
            price: 1.56
        },
        {
            item: 'Brutzelkaffe',
            type: 'drink',
            price: 0.81
        },
        {
            item: 'Kalter Hund',
            type: 'food',
            price: 2.77
        },
        {
            item: 'Manta Platte',
            type: 'food',
            price: 6.87
        },
        {
            item: 'Erbeerlolly',
            type: 'food',
            price: 0.30
        },
        {
            item: 'Herrengedeck',
            type: 'drink',
            price: 3.58
        }
    ]
);

console.log(coffeeShop);

console.log(myOwnCoffeeShop);

myOwnCoffeeShop.addOrder('Pils');
console.log(myOwnCoffeeShop.orders);

myOwnCoffeeShop.addOrder('Frappuccino');
console.log(myOwnCoffeeShop.orders);

myOwnCoffeeShop.fulfullOrder();
console.log(myOwnCoffeeShop.orders);
myOwnCoffeeShop.fulfullOrder();

myOwnCoffeeShop.addOrder('Pils');
myOwnCoffeeShop.addOrder('Kaesebrot');
myOwnCoffeeShop.addOrder('Herrengedeck');
myOwnCoffeeShop.addOrder('Kalter Hund');
myOwnCoffeeShop.addOrder('Manta Platte');
myOwnCoffeeShop.listOrders();


myOwnCoffeeShop.dueAmount();

myOwnCoffeeShop.cheapestItem();

myOwnCoffeeShop.onlyDrinks();
myOwnCoffeeShop.onlyFood();