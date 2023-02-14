const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/people', PessoaController.all)
router.get('/people/:id', PessoaController.findOneById)
router.post('/people', PessoaController.create)
router.put('/people/:id', PessoaController.update)
router.delete('/people/:id', PessoaController.delete)

module.exports = router