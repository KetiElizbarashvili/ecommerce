const port = 4000;
const express= require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const  multer = require("multer");
const path = require("path");
const cors = require("cors");


app.use(express.json());
app.use(cors()); 


// Database Connection With MongoDB

mongoose.connect("mongodb+srv://ketieliz:xZVTL-MRxs.4c_L@cluster0.x6suld4.mongodb.net/ecommerce")