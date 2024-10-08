import dotenv from "dotenv"
import connectDB from './db/index.js';
import {app} from './app.js'
dotenv.config();

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log(error);
        throw error;
    });
    const PORT = process.env.PORT || 8000;
    app.listen(PORT,()=>{
        console.log(`Server is running at port : ${PORT}`);
        
    })
})
.catch((err)=>{
    console.log("Mongo db connection failed",err);
})

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
