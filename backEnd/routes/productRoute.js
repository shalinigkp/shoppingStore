const express=require("express");

const { getAllProducts,createProduct, updateProduct, deleteProduct, getProductDetails } = require("../controllers/productController");
//const { isAuthenticatedUser } = require("../middleware/auth");
const recordRoutes=express.Router();

recordRoutes.route("/products").get(getAllProducts)

recordRoutes.route("/product/new").post(createProduct)

recordRoutes.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails)

module.exports=recordRoutes;