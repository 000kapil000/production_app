// require('dotenv').config({ path: './env' })
import dotenv from 'dotenv'
import connectDB from './db/index.js'
connectDB()
// import mongoose from "mongoose";
// import { DB_NAME } from "./constents";


// ; (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//     } catch (err) {
//         console.log("Error", err);
//         throw err
//     }
// })()