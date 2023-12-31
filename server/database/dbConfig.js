const mongoose = require("mongoose");
require("dotenv").config();

const connOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://localhost:27017/Notes";
const MONGO_CONNECTION_STRING =
  "mongodb+srv://gmdt8589:Mg020185awa89..@cluster0.obnac.mongodb.net/notes";

const connectToDB = async () => {
  try {
    const connect = await mongoose.connect(
      MONGO_CONNECTION_STRING,
      connOptions
    );
    if (connect) console.log(`Mongodb connected - ${connect.connection.host}`);
  } catch (err) {
    console.log(`Database error ${err}`);
  }
};

module.exports = connectToDB;
