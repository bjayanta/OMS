const express = require('express')
const postCtrl = require('../controllers/post.controller')
const router = express.Router()

router.get("/", postCtrl.index)

module.exports = router