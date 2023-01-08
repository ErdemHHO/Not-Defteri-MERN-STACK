const mongoose=require("mongoose");

const notSema=mongoose.Schema({
    baslik:{
        type:String,
        required:[true,'Başlık Bilgisi Girilmelidir']
    },
    aciklama:{
        type:String
    },
    kullanici_id:{
        type:String,
        required:true
    },
},{
    timestamps:true
})

module.exports=mongoose.model('Not',notSema);