const Product = require("../models/Product");

/* GET ALL PRODUCTS */
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate(
        "seller",
        "name email phone college"
      )
      .sort({ createdAt: -1 });

    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch products",
      error: error.message,
    });
  }
};

/* GET SINGLE PRODUCT */
exports.getProductById = async (
  req,
  res
) => {
  try {
    const product =
      await Product.findById(
        req.params.id
      ).populate(
        "seller",
        "name email phone college"
      );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch product",
      error: error.message,
    });
  }
};

/* CREATE PRODUCT */
exports.createProduct = async (
  req,
  res
) => {
  try {
    const {
      title,
      category,
      description,
      price,
      quantity,
    } = req.body;

    const product =
      await Product.create({
        title,
        category,
        description,
        price,
        quantity,

        image: req.file
          ? req.file.filename
          : "",

        seller: req.user.id,
      });

    res.status(201).json({
      message:
        "Product created successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message:
        "Failed to create product",
      error: error.message,
    });
  }
};

/* UPDATE PRODUCT */
exports.updateProduct =
  async (req, res) => {
    try {
      const product =
        await Product.findById(
          req.params.id
        );

      if (!product) {
        return res.status(404).json({
          message: "Product not found",
        });
      }

      if (
        product.seller.toString() !==
        req.user.id
      ) {
        return res.status(403).json({
          message:
            "You can only update your own products",
        });
      }

      product.title =
        req.body.title ||
        product.title;

      product.category =
        req.body.category ||
        product.category;

      product.description =
        req.body.description ||
        product.description;

      product.price =
        req.body.price ||
        product.price;

      product.quantity =
        req.body.quantity ||
        product.quantity;

      if (req.file) {
        product.image =
          req.file.filename;
      }

      await product.save();

      res.json({
        message:
          "Product updated successfully",
        product,
      });
    } catch (error) {
      res.status(500).json({
        message:
          "Failed to update product",
        error: error.message,
      });
    }
  };

/* DELETE PRODUCT */
exports.deleteProduct =
  async (req, res) => {
    try {
      const product =
        await Product.findById(
          req.params.id
        );

      if (!product) {
        return res.status(404).json({
          message: "Product not found",
        });
      }

      if (
        product.seller.toString() !==
        req.user.id
      ) {
        return res.status(403).json({
          message:
            "You can only delete your own products",
        });
      }

      await product.deleteOne();

      res.json({
        message:
          "Product deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        message:
          "Failed to delete product",
        error: error.message,
      });
    }
  };