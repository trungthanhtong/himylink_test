const express = require("express");
const contactRouter = require("./contact.router");

const rootRouter = express.Router();

rootRouter.use('/contacts', contactRouter);

module.exports = rootRouter;