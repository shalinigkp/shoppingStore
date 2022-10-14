const express=require("express");

const { getAllProducts,createProduct, updateProduct, deleteProduct, getProductDetails } = require("../controllers/productController");
const { isAuthenticatedUser,authorizeRoles } = require("../middleware/auth");
const recordRoutes=express.Router();

recordRoutes
.route("/products")
.get(getAllProducts)

recordRoutes
.route("/product/new")
.post(isAuthenticatedUser,authorizeRoles("admin"),createProduct)

recordRoutes
.route("/product/:id")
.put(isAuthenticatedUser,authorizeRoles("admin"),updateProduct)
.delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProduct)
.get(getProductDetails)

module.exports=recordRoutes;