// const express = require("express");
import express from 'express';
import productRouter from './routes/product';
import mongoose from 'mongoose';
import categoryRouter from './routes/category'
import cors from "cors"
import authRouter from './routes/auth.js'
// const productRouter = require('./routes/product');
const app = express();
// middleware
app.use(express.json());
app.use(cors())
//routing
app.use("/api", productRouter);
app.use("/api",categoryRouter)
app.use("/api", authRouter)
// connect database
mongoose.connect("mongodb://localhost:27017/we16306")
    .then(() => console.log("Connect db thanh cong"))
// connect
const PORT = 3006;
app.listen(PORT, () => {
    console.log(`Server running post ${PORT}`);
}) 