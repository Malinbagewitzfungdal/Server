const express = require('express')
const connectDB = require('./src/config/db')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5001

connectDB()

app.use (express.json())

const contactRoutes = require('./src/routes/contactRoutes'); 
app.use('/api/contacts', contactRoutes);

app.use((req, res, next) => {
    console.log(`Inkommande förfrågan: ${req.method} ${req.url}`);
    next();
  });
  
app.listen(PORT, () => {
console.log(`listening on port: ${PORT}`)
})

