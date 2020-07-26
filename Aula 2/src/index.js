require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT

app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({
        Info: '🗃📬 This is an api rest used as a practice and learning tool during the stack js Among Corp course',
        Obs: '...',
        Documentation: '...',
        Port: `APP running on port ${port}.`
    })
})

require('./app/controller/index')(app)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});