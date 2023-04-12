const database = require('../models')

class Services {
    constructor(modelName) {
        this.modelName = modelName
    }

    async findAllRegisters() {
        return database[this.modelName].findAll()
    }
    
    async findById(id) {

    }

    async store(data) {

    }

    async update(data, id, transaction = {}) {
        return database[this.modelName]
            .update(data, { where: {id: id}}, transaction)
    }

    async updateRegisters(data, where, transaction = {}) {
        return database[this.modelName]
            .update(data, { where: { ...where }}, transaction)
    }

    async delete(id) {

    }
}

module.exports = Services