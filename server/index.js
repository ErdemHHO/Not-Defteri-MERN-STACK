const express =require("express");
const mongoose=require("mongoose");

const notRoute=require("./routes/notlar")
const kullaniciRoute=require("./routes/kullanici")

const app=express();  

require("dotenv").config();


app.use(express.json());

app.use('/notlar',notRoute);
app.use('/kullanici',kullaniciRoute);

app.listen(process.env.PORT, () => {
    console.log(process.env.PORT,". port dinleniyor")
    mongoose
      .set("strictQuery", false)
      .connect(process.env.MOGODB_URI)
      .then(() => console.log("connected to db"))
      .catch((error) => console.log(error));
  });