const express = require("express");

const router = express.Router();

const authMiddleware =
  require("../middleware/authMiddleware");

const {
  getCart,
  addToCart,
  removeFromCart,
  clearCart,
} = require(
  "../controllers/cartController"
);

router.get(
  "/",
  authMiddleware,
  getCart
);

router.post(
  "/add",
  authMiddleware,
  addToCart
);

router.delete(
  "/:id",
  authMiddleware,
  removeFromCart
);

router.delete(
  "/clear/all",
  authMiddleware,
  clearCart
);

module.exports = router;