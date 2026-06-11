const express = require("express");

const router = express.Router();

const authMiddleware =
  require("../middleware/authMiddleware");

const {
  getAlerts,
  createAlert,
  markAsRead,
  deleteAlert,
} = require("../controllers/alertController");

router.get(
  "/",
  authMiddleware,
  getAlerts
);

router.post(
  "/",
  authMiddleware,
  createAlert
);

router.put(
  "/:id/read",
  authMiddleware,
  markAsRead
);

router.delete(
  "/:id",
  authMiddleware,
  deleteAlert
);

module.exports = router;