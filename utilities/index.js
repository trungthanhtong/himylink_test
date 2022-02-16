const fs = require("fs");
const path = require('path');

const filePath = path.resolve(__dirname, 'contact.json');
console.log(filePath)

const data = fs.readFileSync(filePath);
const { contacts } = JSON.parse(data);

const writeData = (c) => {
    const newData = JSON.stringify({contacts: c});
    fs.writeFileSync(filePath, newData);
}

const utility = {};

utility.getContacts = () => contacts;


utility.addContact = (contact) => {
    const id = Date.now().toString();
    contacts.push({id, ...contact});
    writeData(contacts);
    return true;
}

utility.editContact = (id, contact) => {
    const index = contacts.findIndex(item => item.id === id)
    if (index === -1) return false;
    contacts[index] = {id, ...contact};
    writeData(contacts);
    return true;
}

utility.getContact = (id) => {
    const index = contacts.findIndex(item => item.id === id)
    if (index === -1) return false;
    return contacts[index];
}

utility.deleteContact = (id) => {
    const index = contacts.findIndex(item => item.id === id);
    if (index === -1) return false;
    contacts.splice(index, 1)
    writeData(newContacts);
    return true;
}

module.exports = utility;