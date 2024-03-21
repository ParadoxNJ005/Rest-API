const mongoose = require("mongoose");
const { options } = require("../routes/products");

uri = "mongodb+srv://NaitikJain:jainnaitik@cluster0.44aaa6y.mongodb.net/";

const connectDB = async () => {
    console.log("Connecting to the database...");
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Database connected successfully");
    } catch (error) {
      console.error("Error connecting to the database:", error);
    }
  };
  
  module.exports = connectDB;
  