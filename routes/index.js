const express = require('express');
const router = express.Router();

router.use('/', require('./main'));
router.use('/download', require('./download'));

module.exports = router;