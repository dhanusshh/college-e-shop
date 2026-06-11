const Product = require("../models/Product");
const Cart = require("../models/Cart");

exports.getStats = async (req, res) => {
  try {
    const userId = req.user.id;

    // Products listed by current user
    const inventory = await Product.countDocuments({
      seller: userId,
    });

    // Products in cart
    const purchases = await Cart.countDocuments({
      user: userId,
    });

    // Dummy values for now
    const sales = 0;
    const trades = 0;

    res.json({
      purchases,
      sales,
      inventory,
      trades,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch dashboard stats",
      error: error.message,
    });
  }
};