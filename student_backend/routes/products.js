const express = require("express");

const router = express.Router();

const authMiddleware =
  require("../middleware/authMiddleware");

const upload =
  require("../middleware/uploadMiddleware");

const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require(
  "../controllers/productController"
);

/* GET ALL PRODUCTS */
router.get(
  "/",
  getProducts
);

/* GET SINGLE PRODUCT */
router.get(
  "/:id",
  getProductById
);

/* CREATE PRODUCT */
router.post(
  "/",
  upload.single("image"),
  authMiddleware,
  createProduct
);

/* UPDATE PRODUCT */
router.put(
  "/:id",
  authMiddleware,
  upload.single("image"),
  updateProduct
);

/* DELETE PRODUCT */
router.delete(
  "/:id",
  authMiddleware,
  deleteProduct
);

module.exports = router;