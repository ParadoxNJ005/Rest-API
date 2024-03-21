const express =  require("express");
const router = express.Router();

const {
    getAllProducts,
    getProducts,
} = require("../controllers/products");

router.get("/", getAllProducts);  
router.get("/test", getProducts);  


module.exports = router;