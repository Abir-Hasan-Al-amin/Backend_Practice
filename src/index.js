import dotenv from "dotenv"
import connectDB from './db/index.js';

dotenv.config({
    path:'./env'
});

connectDB();















// Database Connection :
/*
import express from "express";
const app=express();
(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",(error)=>{
            console.log(error);
            throw error;
        });
        app.listen(process.env.PORT,()=>{
            console.log(`App is Listening on Port: ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("Error",error);
        throw error;
    }
})() 
*/