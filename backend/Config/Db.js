import mongoose from "mongoose";
import  colors  from "colors";

const ConnectDB = async () => {
  try {
    const conn =await mongoose.connect(process.env.DB_Url);
    console.log(`MongoDB Connectd:${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error:${error.mssage}`.red.underline.bold);
    process.exit(1);
  }
};
export default ConnectDB;
