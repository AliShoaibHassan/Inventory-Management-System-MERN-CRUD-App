const mongoose = require('mongoose')
//const mongoURI = "mongodb://127.0.0.1:27017/IMS";
const mongoURI = "mongodb+srv://alishoaib:1234@cluster0.cmgkc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
