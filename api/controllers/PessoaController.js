const database = require('../models/index')

class PessoaController {
    static async allActive(req, res) {
        try {
            const allActivePeople = await database.People.findAll()
            return res.status(200).json(allActivePeople)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async all(req, res) {
        try {
            const allPeople = await database.People.scope('all').findAll()
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

    static async update (req, res) {
        const person = req.body
        const { id } = req.params
        try {
            await database.People.update(person, { where : { 
                id : Number(id)
            }});
            const personUpdated = await database.People.findOne( { where : { 
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
            await database.People.destroy( { where : { 
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
            await database.People.restore( { where : { 
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
}

module.exports = PessoaController