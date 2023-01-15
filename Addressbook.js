var {contacts} = require('./model/Contact');
var contact=new contacts();
contact=createContact();
printContact(contact);

function createContact(){
    var {contacts} = require('./model/Contact');
    const prompt = require('prompt-sync')();
    var contact=new contacts();
    contact.setFirstName(prompt("First Name : "));
    contact.setLastName(prompt("Last Name : "));
    contact.setAddress(prompt("Address : "));
    contact.setCity(prompt("City : "));
    contact.setState(prompt("State : "));
    contact.setZip(prompt("Zip : "));
    contact.setPhoneNumber(prompt("Phone Number : "));
    contact.setEmail(prompt("Email : "));
    return contact;
}

function printContact(Contact){
    var {contacts} = require('./model/Contact');
    var contact=new contacts();
    contact=Contact;
    console.log("\n\nFirst Name : "+contact.getFirstName());
    console.log("Last Name : "+contact.getLastName());
    console.log("Address: "+contact.getAddress());
    console.log("City : "+contact.getCity());
    console.log("State : "+contact.getState());
    console.log("State : "+contact.getZip());
    console.log("State : "+contact.getPhoneNumber());
    console.log("State : "+contact.getEmail());
    
}
