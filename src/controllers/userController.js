const Contact = require('../models/Contact')

const createContact = async (req, res) => {
    const { firstName, lastName, phone} = req.body

    if (!firstName || !lastName || !phone) {
        return res.status(400).json({ message: 'Alla fält måste fyllas i' });
    }

    try {
        const newContact = new Contact({ firstName, lastName, phone })
        const contact = await newContact.save()
        res.status(201).json(contact)
    } catch (error) {
        console.error(error.message);

        if (error.code === 11000) {
            return res.status(400).json({ message: 'Telefonnumret är redan registrerat på en annan kontakt.' });
        }

        res.status(500).send('server error')
    }
}

module.exports = { createContact }