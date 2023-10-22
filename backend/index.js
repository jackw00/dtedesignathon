require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

const db = mysql.createConnection({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PW,
    database:  process.env.DB_NAME
})

//add medicine
app.post('/create', (req, res) => {
    const name = req.body.name
    const user = req.body.user
    const dosage = req.body.dosage
    const timeStr = req.body.timeStr
    const timeFloat = req.body.timeFloat
    db.query(
        'INSERT INTO users (user, name, dosage, timeStr, timeFloat) VALUES (?,?,?,?,?)',
        [user, name, dosage, timeStr, timeFloat], (err, result) => {
            if(err) {
                console.log(err)
            } else {
                res.send("Medicine added!")
            }
        }
    )
})

//display medicine
app.post('/show', (req, res) => {
    const user = req.body.user
    db.query('SELECT * FROM users WHERE user=? ', [user], (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

//delete medicine
app.delete('/deleteMed/:id', (req, res) => {
    const id = req.params.id
    db.query('DELETE FROM users WHERE id = ?', id, (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

//update route
app.put('/updateName', (req, res) => {
    const id = req.body.id
    const name = req.body.name
    db.query('UPDATE users SET name = ? WHERE id = ?', [name, id], (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})

app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
})