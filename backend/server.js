require('dotenv').config()
const express = require('express')
const cors = require('cors')

// express app
const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

//testing route
app.get('/example', (req, res) => {
    res.json({msg: 'Hello! this is coming fr0m the backend!!!'})
})

//listen for request
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})