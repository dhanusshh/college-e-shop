const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log(
      "Mongo URI:",
      process.env.MONGODB_URI
    );
console.log("Mongo URI exists:", !!process.env.MONGODB_URI);
console.log("Mongo URI:", process.env.MONGODB_URI);
    await mongoose.connect(
      process.env.MONGODB_URI
    );

    console.log(
      "MongoDB Connected Successfully"
    );
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
};

module.exports = connectDB;