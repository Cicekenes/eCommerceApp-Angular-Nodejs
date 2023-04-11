//Expressjs ile api istekleri yapabiliyoruz.
const express = require("express");
const app = express();

//cors politikası
const cors=require("cors");
const connection = require("./database/db");

//Yapılan tüm istekler json formatında olacaktır.
app.use(express.json());
app.use(cors());

const authRouter=require("./routers/auth.router");
const categoryRouter = require("./routers/category.router");

app.use("/api/auth",authRouter);
app.use("/api/categories",categoryRouter);
connection();

//api port numarası
const port = process.env.PORT || 5000 ;

app.listen(port,()=> console.log("Uygulama http://localhost:5000 portundan ayağa kalktı!"));