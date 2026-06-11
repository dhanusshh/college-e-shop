const Alert = require("../models/Alert");

exports.getAlerts = async (
  req,
  res
) => {
  try {
    const alerts =
      await Alert.find({
        user: req.user.id,
      }).sort({
        createdAt: -1,
      });

    res.json(alerts);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.createAlert = async (
  req,
  res
) => {
  try {
    const {
      userId,
      message,
      type,
    } = req.body;

    const alert =
      await Alert.create({
        user: userId,
        message,
        type,
      });

    res.status(201).json(alert);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.markAsRead = async (
  req,
  res
) => {
  try {
    const alert =
      await Alert.findByIdAndUpdate(
        req.params.id,
        {
          isRead: true,
        },
        {
          new: true,
        }
      );

    res.json(alert);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteAlert = async (
  req,
  res
) => {
  try {
    await Alert.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message:
        "Alert deleted",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};