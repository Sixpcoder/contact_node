const express = require("express");
const router = express.Router()
const {getContacts,
    createContact,
    getContact,
    updateContact,
    delContact}=require("../controllers/contactcontrollers")


router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(updateContact).delete(delContact);



module.exports=router;


