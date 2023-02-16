const bodyParser = require('body-parser')
const people = require('./peopleRoute')
const classes = require('./classesRoute')
const levels = require('./levelsRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        people,
        levels,
        classes
    )  
    app.get('/', (req, res) => res.send('Hello!'))
}