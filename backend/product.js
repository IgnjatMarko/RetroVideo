const mongoose = require("mongoose");

// Schema for Creating Products
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  extraImages: {
    type: [String],
    default: [],
  },
  description: { 
    type: String,
    default: "",
  },
  tags: {
    type: [String],
    default: [],
  },
  rating: {
    type: String,
    default: "",
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

// Export the product-related functions
module.exports = {
  addProduct: async (req, res) => {
    let products = await Product.find({});
    let id;

    if (products.length > 0) {
      let last_product_array = products.slice(-1);
      let last_product = last_product_array[0];
      id = last_product.id + 1;
    } else {
      id = 1;
    }

    const product = new Product({
      id: id,
      name: req.body.name,
      image: req.body.image,
      extraImages: req.body.extraImages,
      description: req.body.description,
      tags: req.body.tags,
      rating: req.body.rating,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
      quantity: 15,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
      success: true,
      name: req.body.name,
    });
  },
  removeProduct: async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("Removed");
    res.json({
      success: true,
      name: req.body.name,
    });
  },
  getAllProducts: async (req, res) => {
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
  },
  newCollectionData: async (req, res) => {
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log("New Collection Fetched");
    res.send(newcollection);
  },
  popularShopData: async (req, res) => {
    let products = await Product.find({ category: "Buy DVDs" });
    let popular_in_shop3 = products.slice(0, 4);
    console.log("Popular in Shop 3 fetched");
    res.send(popular_in_shop3);
  },
};
