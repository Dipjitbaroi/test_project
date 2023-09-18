import mongoose from "mongoose";
const CONNECTION_URL =
  "mongodb+srv://dipjitbaroiofficial:root1234@cluster0.9eq6ixa.mongodb.net"; // // ( online cloud server )
  // "mongodb://127.0.0.1:27017/arogga"; // // ( localserver )
const connectDB = async () => {
  try {
    await mongoose.connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // //   useCreateIndex: true,
      // //   useFindAndModify: false,
    });
    console.log("MongoDB Connections successful");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1);
  }
};
export default connectDB;
