const Contact = require('../models/Contact');


const createContact = async (req, res) => {
  const { firstName, lastName, phone } = req.body;

  if (!firstName || !lastName || !phone) {
    return res.status(400).json({ message: 'Alla fält måste fyllas i' });
  }

  try {
    const newContact = new Contact({ firstName, lastName, phone });
    const contact = await newContact.save();
    res.status(201).json(contact);
  } catch (error) {
    console.error(error.message);

    if (error.code === 11000) {
      return res.status(400).json({ message: 'Telefonnumret är redan registrerat.' });
    }

    res.status(500).send('Server error');
  }
};


const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};


const getContactById = async (req, res) => {
  const { id } = req.params;

  try {
    const contact = await Contact.findById(id);
    if (!contact) {
      return res.status(404).json({ message: 'Kontakten hittades inte.' });
    }
    res.status(200).json(contact);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};


const updateContact = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, phone } = req.body;

  try {
    const contact = await Contact.findByIdAndUpdate(
      id,
      { firstName, lastName, phone },
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({ message: 'Kontakten hittades inte.' });
    }

    res.status(200).json(contact);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};


const deleteContact = async (req, res) => {
  const { id } = req.params;

  try {
    const contact = await Contact.findByIdAndDelete(id);
    if (!contact) {
      return res.status(404).json({ message: 'Kontakten hittades inte.' });
    }
    res.status(200).json({ message: 'Kontakten raderades.' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact,
};