const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MOngodb Connection Success`);
  } catch (error) {
    console.log(`Error at Mongodb connection :  ${error}`);
  }
};

module.exports = connectDB;
