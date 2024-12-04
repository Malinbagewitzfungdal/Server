const express = require('express');
const router = express.Router();
const contactControllers = require('../controllers/contactController');

router.post('/', contactControllers.createContact); 
router.get('/', contactControllers.getAllContacts); 
router.get('/:id', contactControllers.getContactById); 
router.put('/:id', contactControllers.updateContact); 
router.delete('/:id', contactControllers.deleteContact);

module.exports = router;
