const Services = require('./Services')
const database = require('../models')

class PeopleServices extends Services {
    constructor() {
        super('People')
        this.enrollments = new Services('Enrollments')
    }

    async getActiveRegisters(where = {}) {
        return database[this.modelName].findAll({ where: {...where} })
    }

    async getAllRegisters(where = {}) {
        return database[this.modelName]
            .scope('all')
            .findAll({ where: {...where} })
    }

    async cancellPersonAndEnrollments(student_id) {
        return  database.sequelize.transaction(async transaction => {
            await super.updateRegisters({ active: false}, { id: student_id }, {
                transaction: transaction
            })

            await this.enrollments.updateRegisters({ status: 'cancelado' }, { 
                student_id : student_id
            }, { transaction: transaction })
        })
    }
}

module.exports = PeopleServices