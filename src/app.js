// const express = require("express");
import express from 'express';
import productRouter from './routes/product';
// const productRouter = require('./routes/product');
const app = express();
// middleware
app.use(express.json());
//routing
app.use("/api", productRouter);
// connect
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running post ${PORT}`);
}) 