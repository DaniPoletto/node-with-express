const database = require('../models')

class LevelController {
    static async all(req, res) {
        try {
            const allLevels = await database.Levels.findAll()
            return res.status(200).json(allLevels)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async findOneById (req, res) {
        const { id } = req.params
        try {
            const level = await database.Levels.findOne( { where : { 
                id : Number(id)
            }})
            return res.status(200).json(level)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async create (req, res) {
        const newLevel = req.body
        try {
            const newLevelCreated = await database.Levels.create(newLevel);
            return res.status(200).json(newLevelCreated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async update (req, res) {
        const level = req.body
        const { id } = req.params
        try {
            await database.Levels.update(level, { where : { 
                id : Number(id)
            }});
            const levelUpdated = await database.Levels.findOne( { where : { 
                id : Number(id)
            }})
            return res.status(200).json(levelUpdated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async delete (req, res) {
        const { id } = req.params
        try {
            const levelDeleted = await database.Levels.destroy( { where : { 
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
            await database.Levels.restore( { where : { 
                id : Number(id)
            }});
            return res.status(200).json({ message: `id ${id} was restored`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = LevelController