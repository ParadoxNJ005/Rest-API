const Product = require("../models/product");



const getAllProducts = async(req,res)=>{
    const {company} = req.query;
    const queryObject = {};

    if(company){
        queryObject.company = company;
        console.log(queryObject.company);
    }

    const myData = await Product.find(queryObject);
    res.status(200).json({myData});
};

const getProducts = async(req,res)=>{

    const myData = await Product.find(req.query).sort("name");
    res.status(200).json({myData});
};

module.exports = {getAllProducts,getProducts};