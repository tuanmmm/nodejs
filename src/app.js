// const express = require("express");
import express from 'express';
import productRouter from './routes/product';
import mongoose from 'mongoose';
import categoryRouter from './routes/category'
// const productRouter = require('./routes/product');
const app = express();
// middleware
app.use(express.json());
//routing
app.use("/api", productRouter);
app.use("/api",categoryRouter)

// connect database
mongoose.connect("mongodb://localhost:27017/we16306")
    .then(() => console.log("Connect db thanh cong"))
// connect
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running post ${PORT}`);
}) 