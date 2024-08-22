const express = require('express')
const router = express.Router();

const userController = require('../controller/userController.js')
const middleware = require('../middleware/logMiddleware.js')
const upload = require('../middleware/multer.js')

// gunakan ini untuk menggunakan middleware dengan spresific
const userMiddleware = middleware.logMiddleware
const uploadFile = upload.upload.single('img')

// GET mengandung middleware
router.get('/', userMiddleware ,userController.getAllUser);

// GET DETAIL mengandung middleware
router.get('/:nim', userController.getByNimUser);

// POST
router.post('/', userController.postNewUser);

// PUT
router.put('/:nim', userController.putUpdateUser);

// DELETE
router.delete('/:nim', userController.deleteUser);

// POST IMG
router.post('/upload', userMiddleware, uploadFile, userController.uploadFile);


module.exports = router;