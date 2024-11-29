const express = require('express');
const router = express.Router();
const {listarBlog}= require ("../controllers/blogController")
router.get('/blog',listarBlog)




module.exports=router;
