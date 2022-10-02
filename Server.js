const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

//connect to mongoDB
mongoose.connect("mongodb+srv://admin:admin123@booking.z4qlhsy.mongodb.net/Blogspots")
const PORT = 3001

app.use(cors());
app.use(express.json())
app.use('/', require('./routes/blogRoutes'))

app.listen(PORT, (req,res) => {

})