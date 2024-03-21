const express = require("express");
const app = express();
const connectDP = require("./db/connect");

const port = process.env.port || 3000;

const products_routes = require("./routes/products");

app.get("/",(req,res)=>{
    res.send("Hi, I am Live");
});

app.use("/api/products" , products_routes);

const start = async() =>{
    try{
        await connectDP();
        app.listen(port,()=>{
            console.log(`Server is running on ${port}`);
        });
    }catch(error){
        console.log(error);
    }
}

start();