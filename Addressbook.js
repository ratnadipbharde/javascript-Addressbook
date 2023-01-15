var { Contact } = require('./model/Contact');
const SHOW_ADDRESSBOOK='1';
const ADD_CONTACT='2';
const EXIT='0';

var contact = new Contact();
let addressbook = new Array();
var c1=new Contact("Ratnadip","Bharde","amravati","Amravati","Maharashtra","444606","8983253934","ratnadipbharde@gmail.com")
var c2=new Contact("Prashik","Kamble","akola","Akola","Maharashtra","444001","8806187589","prashikkamble@gmail.com")
addressbook.push(c1);
addressbook.push(c2);
const prompt = require('prompt-sync')();
while (true) {
    console.log("0. Exit\n1. show Addressbook\n2. Add Contact\n")
    var number=prompt("Enter your choice : ")
    switch(number){
        case SHOW_ADDRESSBOOK :showAddressbook();
        break;
        case ADD_CONTACT : addContact();
        break;
        case EXIT : return false;
        default:console.log("invalid input...")
    }
}

function addContact() {
    var contact = createContact();
    addressbook.push(contact);
}

function showAddressbook(){
    for (let index = 0; index < addressbook.length; index++) {
        contact=new Contact();
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
