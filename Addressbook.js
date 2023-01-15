var { Contact } = require('./model/Contact');
const prompt = require('prompt-sync')();
const SHOW_ADDRESSBOOK = '1';
const ADD_CONTACT = '2';
const EDIT_CONTACT = '3';
const DELETE_CONTACT = '4';
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
addressbook.push(c1);
addressbook.push(c2);

while (true) {
    console.log("\n\n0. Exit\n1. show Addressbook\n2. Add Contact\n3. Edit Contact\n4. Delete Contact")
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
        case EXIT: return false;
        default: console.log("invalid input...")
    }
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
                addressbook.push(contact);
                break;
            case RETURN_TO_MAIN: return;
            default: console.log("invalid input..")
        }
    }

}

function showAddressbook() {
    for (let index = 0; index < addressbook.length; index++) {
        contact.printContact(addressbook[index]);
    }
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
