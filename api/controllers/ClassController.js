const database = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class ClassController {
    static async all(req, res) {
        const { data_inicial, data_final } = req.query
        const where = {}

        data_inicial || data_final ? where.start_date = {} : null
        data_inicial ? where.start_date[Op.gte] = data_inicial : null
        data_final ? where.start_date[Op.lte] = data_final : null

        try {
            const allClasses = await database.Classes.findAll({ where })
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

    static async restore (req, res) {
        const { id } = req.params
        try {
            await database.Classes.restore( { where : { 
                id : Number(id)
            }});
            return res.status(200).json({ message: `id ${id} was restored`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = ClassController