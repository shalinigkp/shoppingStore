const express=require("express");
const { newOrder, getSingleOrder, myOrders, getAllOrders, updateOrder, deleteOrder } = require("../controllers/orderController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const recordRoutes=express.Router();

recordRoutes.route("/order/new").post(isAuthenticatedUser,newOrder);
recordRoutes.route("/order/:id").get(isAuthenticatedUser,getSingleOrder);
recordRoutes.route("/orders/me").get(isAuthenticatedUser,myOrders);
recordRoutes.route("/admin/orders").get(isAuthenticatedUser,authorizeRoles("admin"),getAllOrders);
recordRoutes
.route("/admin/order/:id")
.put(isAuthenticatedUser,authorizeRoles("admin"),updateOrder)
.delete(isAuthenticatedUser,authorizeRoles("admin"),deleteOrder)
module.exports=recordRoutes;