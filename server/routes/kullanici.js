const express=require("express");

const kullaniciController=require("../controllers/kullaniciController");

const router=express.Router();

router.post('/login',kullaniciController.loginKullanici);
router.post('/signup',kullaniciController.signupKullanici);

module.exports=router;