const connectDB = require("./db/connect");
const Product = require("./models/product");
const ProductJson = require("./products.json");
// const Product2Json = require("./products2.json");


const url = "mongodb+srv://NaitikJain:jainnaitik@cluster0.44aaa6y.mongodb.net/";

const start = async()=>{

    try{
        await connectDB(url);
        await Product.deleteMany();
        await Product.create(ProductJson);
        // await Product.create(Product2Json);
        console.log("success");
    }catch(error){
        console.log(error);
    }
}

start();