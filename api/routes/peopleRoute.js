const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/people', PessoaController.allActive)
router.get('/people/all', PessoaController.all)
router.get('/people/:id', PessoaController.findOneById)
router.get('/people/:studentId/enrollments', PessoaController.getEnrollments)
router.post('/people', PessoaController.create)
router.put('/people/:id', PessoaController.update)
router.delete('/people/:id', PessoaController.delete)
router.post('/people/:id/restore', PessoaController.restore)
router.get('/people/:studentId/enrollments/:enrollmentId', PessoaController.findOneEnrollment)
router.post('/people/:studentId/enrollments', PessoaController.createEnrollment)
router.put('/people/:studentId/enrollments/:enrollmentId', PessoaController.updateEnrollment)
router.delete('/people/:studentId/enrollments/:enrollmentId', PessoaController.deleteEnrollment)
router.post('/people/:studentId/enrollments/:id/restore', PessoaController.restoreEnrollment)
router.get('/people/enrollments/:classId/confirmados', PessoaController.getConfirmedEnrollmentsInAClass)
router.get('/people/enrollments/full', PessoaController.getFullClasses)

module.exports = router