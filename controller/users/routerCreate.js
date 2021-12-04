const express = require('express');
const createUser = require('./createUser');
const createlogin = require('./login');

const router = express.Router({ mergeParams: true });

router.post('/', createUser);
router.post('/', createlogin);

module.exports = router;
