const express = require("express");
const cors = require("cors")
const properties = require('./properties.json')
const app = express()
const port = process.env.PORT || 5000;

// middleware
app.use(cors())

app.get('/', (req, res) => {
    res.send('Server is running...')
})
app.get('/properties', (req, res) => {
    res.send(properties)
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})