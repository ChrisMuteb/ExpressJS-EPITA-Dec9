const express = require("express");
const router = express.Router();

const messageServices = require("../services/messages.service");

// routes here
router.get("/", messageServices.getMessages);
router.get('/:messageId', messageServices.getMessageById); // get a specific message
router.post('/add/message', messageServices.addMessage)
router.put('/edit/:messageId', messageServices.editMessage) //to edit a message
router.delete('/delete/:messageId', messageServices.deleteMessage)

module.exports = router;
