const express = require('express');
const createlogin = require('./login');

const router = express.Router({ mergeParams: true });

router.post('/', createlogin);

module.exports = router;
