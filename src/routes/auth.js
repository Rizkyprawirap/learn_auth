const { Router } = require('express');
const { getUsers, register, login, protected, logout } = require('../controllers/auth');
const { validationMiddleware } = require('../middlewares/validations-middleware');
const { registerValidation, loginFieldCheck } = require('../validators/auth');
const { userAuth } = require('../middlewares/auth-middleware');
const router = Router();


router.get('/', (req, res) => {
    res.json({ message: "Hello World!"});
});

router.get('/getUser', getUsers);
router.get('/protected', userAuth, protected);
router.get('/logout', logout);
router.post('/register', registerValidation, validationMiddleware, register);
router.post('/login', loginFieldCheck, validationMiddleware, login);

module.exports = router;