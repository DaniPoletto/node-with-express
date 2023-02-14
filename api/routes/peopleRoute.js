const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/people', PessoaController.all)
router.get('/people/:id', PessoaController.findOneById)
router.post('/people', PessoaController.create)

module.exports = router