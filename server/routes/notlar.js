const express=require("express");
const notController = require("../controllers/notController");
const NotModel=require("../models/notModel")

const router=express.Router();

router.get('/',notController.notlarGetir);

router.get('/:id',notController.notGetir)

router.post('/',notController.notOlustur);


router.delete('/:id',notController.notSil)


router.patch('/:id',notController.notGuncelle)


module.exports=router;