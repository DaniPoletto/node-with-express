// const database = require('../models/index')
// const Sequelize = require('sequelize')

const { PeopleServices }  = require('../services')
const peopleServices = new PeopleServices('People')

class PersonController {
    static async allActive(req, res) {
        try {
            const allActivePeople = await peopleServices.findAllRegisters()
            return res.status(200).json(allActivePeople)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async all(req, res) {
        try {
            const allPeople = await peopleServices.scope('all').findAll()
            return res.status(200).json(allPeople)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async findOneById (req, res) {
        const { id } = req.params
        try {
            const person = await peopleServices.findOne( { where : { 
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
            const newPersonCreated = await peopleServices.create(newPerson);
            return res.status(200).json(newPersonCreated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async update (req, res) {
        const person = req.body
        const { id } = req.params
        try {
            await peopleServices.update(person, { where : { 
                id : Number(id)
            }});
            const personUpdated = await peopleServices.findOne( { where : { 
                id : Number(id)
            }})
            return res.status(200).json(personUpdated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async delete (req, res) {
        const { id } = req.params
        try {
            await peopleServices.destroy( { where : { 
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
            await peopleServices.restore( { where : { 
                id : Number(id)
            }});
            return res.status(200).json({ message: `id ${id} was restored`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async findOneEnrollment (req, res) {
        const { studentId, enrollmentId } = req.params
        try {
            const enrollment = await database.Enrollments.findOne( { where : { 
                id : Number(enrollmentId),
                student_id : Number(studentId)
            }})
            return res.status(200).json(enrollment)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createEnrollment (req, res) {
        const { studentId } = req.params
        const newEnrollment = { ...req.body, student_id: Number(studentId) }
        try {
            const newEnrollmentCreated = await database.Enrollments.create(newEnrollment);
            return res.status(200).json(newEnrollmentCreated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateEnrollment (req, res) {
        const { studentId, enrollmentId } = req.params
        const enrollment = req.body
        try {
            await database.Enrollments.update(enrollment, { where : { 
                id : Number(enrollmentId),
                student_id : Number(studentId)
            }});
            const enrollmentUpdated = await database.Enrollments.findOne( { where : { 
                id : Number(enrollmentId)
            }})
            return res.status(200).json(enrollmentUpdated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteEnrollment (req, res) {
        const { studentId, enrollmentId } = req.params
        try {
            await database.Enrollments.destroy( { where : { 
                id : Number(enrollmentId),
                student_id : Number(studentId)
            }});
            return res.status(200).json({ message: `id ${enrollmentId} was deleted`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async restoreEnrollment (req, res) {
        const { id } = req.params
        try {
            await database.Enrollments.restore( { where : { 
                id : Number(id)
            }});
            return res.status(200).json({ message: `id ${id} was restored`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getEnrollments (req, res) {
        const { studentId } = req.params
        try {
            const person = await peopleServices.findOne({
                where: {
                    id: Number(studentId)
                }
            })

            const enrollments = await person.getAulasMatriculadas()
            
            return res.status(200).json(enrollments)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getConfirmedEnrollmentsInAClass (req, res) {
        const { classId } = req.params
        try {
            const enrollments = await database.Enrollments.findAndCountAll({
                where: {
                    class_id: Number(classId),
                    status: 'confirmado'
                },
                limit: 20,
                order: [['student_id', 'ASC']]
            })
            
            return res.status(200).json(enrollments)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getFullClasses (req, res) {
        const fullClass = 2;
        try {
            const fullClasses = await database.Enrollments.findAndCountAll({
                where: {
                    status: 'confirmado'
                },
                attributes: ['class_id'],
                group: ['class_id'],
                having: Sequelize.literal(`count(class_id) >= ${fullClass}`)
            })
            
            return res.status(200).json(fullClasses.count)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateEnrollmentOfStudent (req, res) {
        const { studentId } = req.params
        try {
            database.sequelize.transaction(async transacao => {
                await peopleServices.update({ active: false }, { where : { 
                    id : Number(studentId)
                }}, { transaction: transacao });
                
                await database.Enrollments.update({ status: false }, { where : { 
                    student_id : Number(studentId)
                }}, { transaction: transacao })
                return res.status(200).json({ message: `Enrollments of ${studentId} were canceled`})
            })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PersonController