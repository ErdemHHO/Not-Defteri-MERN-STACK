const mongoose=require("mongoose");
const NotModel=require("../models/notModel");

const notOlustur=async(req,res)=>{
    const {baslik,aciklama}=req.body;

    let bosAlanlar=[];

    if(!baslik){
        bosAlanlar.push('baslik')
    }
    if(bosAlanlar.length>0){
        return res.status(400).json({msg:'Alanlar Boş Geçilemez',bosAlanlar})
    }
    try {
        const not=await NotModel.create({baslik,aciklama});
        return res.status(200).json(not);
    } catch (error) {
        return res.status(400).json({msg:error.message});
    }
}
const notlarGetir=async(req,res)=>{
    try {
        const notlar=await NotModel.find().sort({
            createdAt:-1
        });
        return res.status(200).json(notlar);
    } catch (error) {
        return res.status(400).json({msg:error.message});
    }
}
const notGetir=async(req,res)=>{
    const {id} = req.params;

    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:'Memory id is not valid'})
        }
        const not=await NotModel.findById(id);
        res.status(200).json(not);
    } catch (error) {
        return res.status(400).json({msg:error.message});
    }
}
const notSil=async(req,res)=>{
    const {id}=req.params;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:"Memory id is not valid"})
        }
        const notSil=await NotModel.findByIdAndDelete(id);
        return res.status(200).json(notSil);
    } catch (error) {
        return res.status(400).json({msg:error.message});
    }
}
const notGuncelle=async(req,res)=>{
    const {id} =req.params;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({message:"Memory id is not valid"})
        }
    const not=await NotModel.findByIdAndUpdate({_id:id,},{
        ...req.body
    },{new:true})
    if(!not){
        return res.status(404).json({msg:"Not Bulunamadı"})
    }
    res.status(200).json(not);
    } catch (error) {
        return res.status(400).json({msg:error.msg})
    }
}
// findByIdAndUpdate,findByIdAndDelete
module.exports={
    notOlustur,
    notlarGetir,
    notGetir,
    notSil,
    notGetir,
    notGuncelle
}