const express = require('express');
const { createContact, getContacts, getContact, updateContact, deleteContact } = require('../controllers/contact.controller');
const checkEmptyString = require('../middleware/checkEmptyString');

const contactRouter = express.Router();

contactRouter.get('/', getContacts);
contactRouter.post('/', checkEmptyString, createContact);
contactRouter.get('/:id', getContact);
contactRouter.put('/:id', checkEmptyString, updateContact);
contactRouter.delete('/:id', deleteContact);

module.exports = contactRouter;
