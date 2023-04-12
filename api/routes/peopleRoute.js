const { Router } = require('express')
const PersonController = require('../controllers/PersonController')

const router = Router()

router.get('/people', PersonController.allActive)
router.get('/people/all', PersonController.all)
router.get('/people/:id', PersonController.findOneById)
router.get('/people/:studentId/enrollments', PersonController.getEnrollments)
router.post('/people', PersonController.create)
router.put('/people/:id', PersonController.update)
router.delete('/people/:id', PersonController.delete)
router.post('/people/:id/restore', PersonController.restore)
router.get('/people/:studentId/enrollments/:enrollmentId', PersonController.findOneEnrollment)
router.post('/people/:studentId/enrollments', PersonController.createEnrollment)
router.put('/people/:studentId/enrollments/:enrollmentId', PersonController.updateEnrollment)
router.delete('/people/:studentId/enrollments/:enrollmentId', PersonController.deleteEnrollment)
router.post('/people/:studentId/enrollments/:id/restore', PersonController.restoreEnrollment)
router.get('/people/enrollments/:classId/confirmados', PersonController.getConfirmedEnrollmentsInAClass)
router.get('/people/enrollments/full', PersonController.getFullClasses)
router.post('/people/:studentId/cancela', PersonController.updateEnrollmentOfStudent)

module.exports = router