const { Router } = require('express');
const { getUsers, postUser, updateUser, deleteUser } = require('../Controller/users.js');
const router = Router();

router.get('/user', getUsers);
router.post('/user', postUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

module.exports = router;
