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
        this.firstName = firstName;
    }
    getLastName() {
        return this.lastName;
    }
    setLastName(lastName) {
        this.lastName = lastName
    }
    getAddress() {
        return this.address;
    }
    setAddress(address) {
        this.address = address;
    }
    getCity() {
        return this.city;
    }
    setCity(city) {
        this.city = city;
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
    }
    getZip() {
        return this.zip;
    }
    setZip(zip) {
        this.zip = zip;
    }
    getPhoneNumber() {
        return this.phoneNumber;
    }
    setPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
}
module.exports.contacts = Contact;