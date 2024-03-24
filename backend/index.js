const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const product = require("./product");
const users = require("./users");

const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database Connection With MongoDB

mongoose.connect(
  "mongodb+srv://ignjatovicmarkodev:HxUGwTv1vTUAkgst@cluster0.wrbwuab.mongodb.net/retrovideo"
);

// API Creation

app.get("/", (req, res) => {
  res.send("Express app is running.");
});

// Image Storage Engine

const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// Creating Upload Endpoint for images

app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

// Product-related functions

app.post("/addproduct", product.addProduct);
app.post("/removeproduct", product.removeProduct);
app.get("/allproducts", product.getAllProducts);
app.get("/newcollections", product.newCollectionData);
app.get("/popularmovies", product.popularShopData);

// Creating middleware to Fetch user

const fetchUser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ errors: "Please authenticate using a valid token" });
  } else {
    try {
      const data = jwt.verify(token, "secret_ecom");
      req.user = data.user;
      next();
    } catch (error) {
      res
        .status(401)
        .send({ errors: "Please authenticate using a valid token" });
    }
  }
};

// Users-related functions

app.post("/signup", users.signup);
app.post("/login", users.login);
app.post("/addtocart", fetchUser, users.addToCart);
app.post("/removefromcart", fetchUser, users.removeFromCart);


app.listen(port, (error) => {
  if (!error) {
    console.log("Server running on port: " + port);
  } else {
    console.log("Error: " + error);
  }
});
