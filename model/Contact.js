class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    getFirstName() {
        return this.firstName;
    }
    setFirstName(firstName) {
        let firstNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$')
        if (firstNameRegex.test(firstName))
            this.firstName = firstName;
        else throw 'First Name is Incorrect !'
    }
    getLastName() {
        return this.lastName;
    }
    setLastName(lastName) {
        let lastNameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (lastNameRegex.test(lastName))
            this.lastName = lastName;
        else throw 'Last Name is Incorrect !'
    }
    getAddress() {
        return this.address;
    }
    setAddress(address) {
        let addressRegex = RegExp("^[a-zA-Z0-9\s,'-]{3,}$");
        if (addressRegex.test(address))
            this.address = address;
        else throw 'Address is Incorrect !'
    }
    getCity() {
        return this.city;
    }
    setCity(city) {
        let cityRegex = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if (cityRegex.test(city))
            this.city = city;
        else throw 'City Name is Incorrect !'
    }
    getState() {
        return this.state;
    }
    setState(state) {
        let stateRegex = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if (stateRegex.test(state))
            this.state = state;
        else throw 'State Name is Incorrect !'
    }
    getZip() {
        return this.zip;
    }
    setZip(zip) {
        let zipRegex = RegExp("^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$");
        if (zipRegex.test(zip))
            this.zip = zip;
        else throw 'Zip code is Incorrect !'

    }
    getPhoneNumber() {
        return this.phoneNumber;
    }
    setPhoneNumber(phoneNumber) {
        var phoneNumberRegex = RegExp("^(0|[0-9]{1,5})?([0-9]{10})$");
        if (phoneNumberRegex.test(phoneNumber))
            this.phoneNumber = phoneNumber;
        else throw 'Phone Number is Incorrect !'
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        let emailRegex = RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
        if (emailRegex.test(email))
            this.email = email;
        else throw 'email id is Incorrect !'
    }
    printContact(contact = new Contact) {
        console.log("\n\nFirst Name : " + contact.getFirstName());
        console.log("Last Name : " + contact.getLastName());
        console.log("Address: " + contact.getAddress());
        console.log("City : " + contact.getCity());
        console.log("State : " + contact.getState());
        console.log("Zip : " + contact.getZip());
        console.log("Phone Number : " + contact.getPhoneNumber());
        console.log("Email id : " + contact.getEmail());
    }
}
module.exports.Contact = Contact;