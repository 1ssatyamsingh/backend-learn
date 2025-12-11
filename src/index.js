import dotenv from "dotenv";
import connectDB from './db/index.js';

dotenv.config({
  path: './.env'
});

connectDB()






/*
import express from 'express';
const app = express();

//using IIFE to connect to MongoDB
( async()=>{
  try{
    await mongoose.connect(`{process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (err)=>{
      console.error("ERROR: ", err);
      throw err;
    });

    app.listen(process.env.PORT, ()=>{
      console.log(`PORT is listening on port ${process.env.PORT}`);
    });
  }catch(err){
    console.error("ERROR: ", err);
    throw err;
  }
})()
*/