const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    name:{
        type: String,
        // required:true,     if the field is nessesary
    },

    price:{
        type: Number,
        // required: [true, "Price must by provided"],  
    },

    featured:{
        type: Boolean,
        default: false,
    },

    rating:{
        type: Number,
        default: 4.9,
    },

    date:{
        type: Date,
        default: Date.now(),
    },  

    company:{
        type: String,
        // enum:{
        //     values:["apple", "samsung","dell","mi"],    // if we are targeting a particular company
        //     message: `{VALUE} is not supported`,
        // },
    },

    image: {
        type: String,  
        default: "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png",
    },

});


module.exports = mongoose.model("Product",productSchema);