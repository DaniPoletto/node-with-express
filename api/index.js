const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const port = 3000

app.get('/test', (req, res) => res
        .status(200)
        .send({mensagem: 'welcome'})
)

app.listen(port, () => console.log(`Server is up in port ${port}`))

module.exports = app