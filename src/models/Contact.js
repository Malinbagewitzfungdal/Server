const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true },

    lastName: {
        type: String,
        required: true},

    phone: {
        type: String,
        required: true, 
        match: [/^\+?\d{10,15}$/, 'Ej ett giltigt telefonnummer. Försök igen!'],
        unique: true,}
}, { timestamps: true })

module.exports = mongoose.model('Contact', contactSchema)