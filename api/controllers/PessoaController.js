const database = require('../models')

class PessoaController {
    static async all(req, res) {
        try {
            const allPeople = await database.People.findAll()
            return res.status(200).json(allPeople)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async findOneById (req, res) {
        const { id } = req.params
        try {
            const person = await database.People.findOne( { where : { 
                id : Number(id)
            }})
            return res.status(200).json(person)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async create (req, res) {
        const newPerson = req.body
        try {
            const newPersonCreated = await database.People.create(newPerson);
            return res.status(200).json(newPersonCreated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController