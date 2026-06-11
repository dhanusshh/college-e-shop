const User = require("../models/User");

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(
      req.user.id
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateProfile = async (
  req,
  res
) => {
  try {
    const {
      name,
      phone,
      college,
    } = req.body;

    const user = await User.findById(
      req.user.id
    );

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.name =
      name || user.name;

    user.phone =
      phone || user.phone;

    user.college =
      college || user.college;

    await user.save();

    res.json({
      message:
        "Profile updated successfully",
      user,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};