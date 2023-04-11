const mongoose = require("mongoose");

//Mongodb bağlantı adresi,Id ve password
const uri = "mongodb+srv://MongoDb:1@ecommercedb.x6jwpnd.mongodb.net/?retryWrites=true&w=majority";

const connection =()=>{
    mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=> console.log("MongoDb bağlantısı başarılı"))
    .catch((err)=>console.log("Bağlantı Hatası! Hata : "+err.message))
}

module.exports = connection;