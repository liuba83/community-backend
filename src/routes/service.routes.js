const express = require('express');
const router = express.Router();
const controller = require('../controllers/service.controller');

router.get('/', controller.getAll);
router.get('/all', controller.getAllUnfiltered);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id/approve', controller.approve);
router.put('/:id/deny', controller.deny);
router.delete('/:id', controller.remove);

module.exports = router;
