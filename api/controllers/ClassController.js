const database = require('../models')

class ClassController {
    static async all(req, res) {
        try {
            const allClasses = await database.Classes.findAll()
            return res.status(200).json(allClasses)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async findOneById (req, res) {
        const { id } = req.params
        try {
            const classFound = await database.Classes.findOne( { where : { 
                id : Number(id)
            }})
            return res.status(200).json(classFound)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async create (req, res) {
        const newClass = req.body
        try {
            const newClassCreated = await database.Classes.create(newClass);
            return res.status(200).json(newClassCreated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async update (req, res) {
        const classToUpdate = req.body
        const { id } = req.params
        try {
            await database.Classes.update(classToUpdate, { where : { 
                id : Number(id)
            }});
            const classUpdated = await database.Classes.findOne( { where : { 
                id : Number(id)
            }})
            return res.status(200).json(classUpdated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async delete (req, res) {
        const { id } = req.params
        try {
            const classDeleted = await database.Classes.destroy( { where : { 
                id : Number(id)
            }});
            return res.status(200).json({ message: `id ${id} was deleted`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = ClassController