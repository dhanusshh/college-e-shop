const Cart = require("../models/Cart");

exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.find({
      user: req.user.id,
    }).populate("product");

    res.json(cart);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.addToCart = async (req, res) => {
  try {
    const { productId } = req.body;

    const existing = await Cart.findOne({
      user: req.user.id,
      product: productId,
    });

    if (existing) {
      existing.quantity += 1;
      await existing.save();

      return res.json(existing);
    }

    const item = await Cart.create({
      user: req.user.id,
      product: productId,
      quantity: 1,
    });

    res.status(201).json(item);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.removeFromCart = async (
  req,
  res
) => {
  try {
    await Cart.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message:
        "Item removed from cart",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.clearCart = async (
  req,
  res
) => {
  try {
    await Cart.deleteMany({
      user: req.user.id,
    });

    res.json({
      message: "Cart cleared",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};