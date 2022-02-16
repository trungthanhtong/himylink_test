const utility = require("../utilities");

const getContacts = (req, res) => {
    try {
        return res.send(utility.getContacts());
    } catch(e) {
        return res.status(500).send(e);
    }
}

const getContact = (req, res) => {
    try {
        const {id} = req.params;
        const data = utility.getContact(id);
        if (!data) {
            return res.status(400).send("Contact not found.")
        }
        return res.send(data);
    } catch(e) {
        return res.status(500).send(e);
    }
}

const createContact = (req, res) => {
    try {
        const {first_name, last_name, email, phone} = req.body;
        const data = {
            first_name,
            last_name,
            email,
            phone,
        }
        utility.addContact(data);
        return res.send("Contact created successfully.")
    } catch(e) {
        return res.status(500).send(e);
    }
}

const updateContact = (req, res) => {
    try {
        const {first_name, last_name, email, phone} = req.body;
        const {id} = req.params;
        const data = {
            first_name,
            last_name,
            email,
            phone,
        }
        const result = utility.editContact(id, data);
        if (!result) {
            return res.status(400).send('Contact not found.')
        }
        return res.send("Contact updated successfully.")
    } catch(e) {
        return res.status(500).send(e);
    }
}

const deleteContact = (req, res) => {
    try {
        const {id} = req.params;
        const result = utility.deleteContact(id);
        if (!result) {
            return res.status(400).send('Contact not found.')
        }
        return res.send('Contact deleted successfully.');
    } catch(e) {
        return res.status(500).send(e);
    }
}

module.exports = {
    createContact,
    getContact,
    getContacts,
    updateContact,
    deleteContact,
}

