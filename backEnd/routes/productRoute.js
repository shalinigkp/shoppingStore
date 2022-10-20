const express=require("express");

const { getAllProducts,
    createProduct, 
    updateProduct,
     deleteProduct,
      getProductDetails, 
      createProductReview, 
      getProductReviews,
      deleteReview} = require("../controllers/productController");
const { isAuthenticatedUser,authorizeRoles } = require("../middleware/auth");
const recordRoutes=express.Router();

recordRoutes
.route("/products")
.get(getAllProducts);

recordRoutes
.route("/admin/product/new")
.post(isAuthenticatedUser,authorizeRoles("admin"),createProduct);

recordRoutes
.route("/admin/product/:id")
.put(isAuthenticatedUser,authorizeRoles("admin"),updateProduct)
.delete(isAuthenticatedUser,authorizeRoles("admin"),deleteProduct);

recordRoutes.route("/product/:id").get(getProductDetails);

recordRoutes.route("/review").put(isAuthenticatedUser,createProductReview);

recordRoutes.route("/reviews").get(getProductReviews).delete(isAuthenticatedUser,deleteReview)


module.exports=recordRoutes;