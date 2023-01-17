var { Contact } = require('./model/Contact');
const prompt = require('prompt-sync')();
const SHOW_ADDRESSBOOK = '1';
const ADD_CONTACT = '2';
const EDIT_CONTACT = '3';
const DELETE_CONTACT = '4';
const COUNT_CONTACT = '5';
const SEARCH_PERSON_BY_CITY_OR_STATE = '6'
const EXIT = '0';
const CONTINUE = '1';
const RETURN_TO_MAIN = '2';
const FIRST_NAME = '1';
const LAST_NAME = '2';
const ADDRESS = '3';
const CITY = '4';
const STATE = '5';
const ZIP = '6';
const PHONE_NUMBER = '7';
const EMAIL = '8';
console.log("\n\n---------- JS-ADDRESSBOOK ----------")
var contact = new Contact();
let addressbook = new Array();
var c1 = new Contact("Ratnadip", "Bharde", "amravati", "Amravati", "Maharashtra", "444606", "8983253934", "ratnadipbharde@gmail.com")
var c2 = new Contact("Prashik", "Kamble", "akola", "Akola", "Maharashtra", "444001", "8806187589", "prashikkamble@gmail.com")
var c2 = new Contact("Mazar", "Ali", "haidrabaad", "Hydrabad", "Telangana", "500001", "8956478561", "mazarali@gmail.com")

addressbook.push(c1);
addressbook.push(c2);
viewContactByCityOrState();

while (true) {
    console.log("\n\n0. Exit\n1. show Addressbook\n2. Add Contact\n3. Edit Contact\n4. Delete Contact\n5. Count Contact\n6. Search contact By city or state.");
    console.log();
    var number = prompt("Enter your choice : ")
    switch (number) {
        case SHOW_ADDRESSBOOK: showAddressbook();
            break;
        case ADD_CONTACT: addContact();
            break;
        case EDIT_CONTACT: editContact();
            break;
        case DELETE_CONTACT: deleteContact();
            break;
        case COUNT_CONTACT: countContact();
            break;
        case SEARCH_PERSON_BY_CITY_OR_STATE: searchContactByCityOrState();
            break;
        case EXIT: return false;
        default: console.log("invalid input...")
    }
}

function searchContactByCityOrState() {
    console.log("1. search By City.\n2. Search by State\n")
    var userInput = prompt("Enter your choice : ")
    let flag = false;
    switch (userInput) {
        case '1':
            var cityName = prompt("Enter name of City : ")
            addressbook.filter(contact => {
                if (contact.city.toLowerCase() == cityName.toLowerCase()) {
                    contact.printContact(contact);
                    flag = true;
                }
            })
            break;
        case '2':
            var stateName = prompt("Enter Name of State : ")
            addressbook.filter(contact => {
                if (contact.state.toLowerCase() == stateName.toLowerCase()) {
                    contact.printContact(contact);
                    flag = true;
                }
            })
            break;

        default: console.log("Invalid Input...");
            break;
    }
    if (!flag) {
        console.log("data not found...")
    }
}

function countContact() {
    let count = 0;
    addressbook.forEach(contact => { count++ });
    console.log("contact present in addressbook :" + count);
}

function deleteContact() {
    var fname = prompt("Enter First Name : ");
    addressbook.filter(contact => {
        if (contact.firstName == fname) {
            let index = addressbook.indexOf(contact)
            addressbook.splice(index, 1);
            console.log("delete...")
        }
        else {
            console.log("contact not found")
        }
    })
}

function editContact() {
    var fname = prompt("Enter First Name : ");
    addressbook.filter(contact => {
        if (contact.firstName == fname) {
            contact.printContact(contact);
            console.log("\n1. First Name\n2.Last Name\n3. Address\n4. City\n5. State\n6. Zip\n7. Phone Number\n8. Email id");
            let number = prompt("Enter your choice to edit contact")
            switch (key) {
                case FIRST_NAME:
                    try {
                        contact.setFirstName(prompt("First Name : "));
                    } catch (error) {
                        console.error(error);
                    }
                    break;

                case LAST_NAME:
                    try {
                        contact.setLastName(prompt("Last Name : "));
                    } catch (error) {
                        console.error(error);
                    }
                    break;

                case ADDRESS:
                    try {
                        contact.setAddress(prompt("Address : "))
                    } catch (error) {
                        console.error(error);
                    }
                    break;

                case CITY:
                    try {
                        contact.setCity(prompt("City : "));
                    } catch (error) {
                        console.error(error);
                    }

                    break;
                case STATE:
                    try {
                        contact.setState(prompt("State : "));
                    } catch (error) {
                        console.error(error);
                    }

                    break;
                case ZIP:
                    try {
                        contact.setZip(prompt("Zip : "));
                    } catch (error) {
                        console.error(error);
                    }

                    break;
                case PHONE_NUMBER:
                    try {
                        contact.setPhoneNumber(prompt("Phone Number : "));
                    } catch (error) {
                        console.error(error);
                    }

                    break;
                case EMAIL:
                    try {
                        contact.setEmail(prompt("Email : "));
                    } catch (error) {
                        console.error(error);
                    }
                    break;

                default: console.log("invalid input...")
            }
        }
    })
}

function addContact() {
    while (true) {
        console.log("1. continue to add contact\n2. Return to main screen\n");
        let number = prompt("Enter your choice : ")
        switch (number) {
            case CONTINUE:
                var contact = createContact();
                if (!isExist(contact.firstName)) {
                    addressbook.push(contact);
                }
                console.log("\ncontact already exist...\n")
                break;
            case RETURN_TO_MAIN: return;
            default: console.log("invalid input..")
        }
    }
}

function isExist(name) {
    addressbook.filter(contact => {
        if (contact.firstName == name) {
            return true;
        }
    })
    return false;
}

function showAddressbook() {
    addressbook.forEach(contact => contact.printContact(contact));
}

function createContact() {
    var contact = new Contact();
    try {
        contact.setFirstName(prompt("First Name : "));
    } catch (error) {
        console.error(error);
    }

    try {
        contact.setLastName(prompt("Last Name : "));
    } catch (error) {
        console.error(error);
    }

    try {
        contact.setAddress(prompt("Address : "))
    } catch (error) {
        console.error(error);
    }

    try {
        contact.setCity(prompt("City : "));
    } catch (error) {
        console.error(error);
    }

    try {
        contact.setState(prompt("State : "));
    } catch (error) {
        console.error(error);
    }

    try {
        contact.setZip(prompt("Zip : "));
    } catch (error) {
        console.error(error);
    }

    try {
        contact.setPhoneNumber(prompt("Phone Number : "));
    } catch (error) {
        console.error(error);
    }

    try {
        contact.setEmail(prompt("Email : "));
    } catch (error) {
        console.error(error);
    }
    return contact;
}