const express = require('express');
const createUser = require('./createUser');

const router = express.Router({ mergeParams: true });

router.post('/', createUser);

module.exports = router;