var express = require('express'),
     router = express.Router(),
   employee = require('./employee.controller');

//Employee API End Points
router.post('/',employee.add);
router.get('',employee.getAll);
router.get('/:id',employee.get);
router.put('/:id',employee.update);
router.delete('/:id',employee.remove);

module.exports = router;