const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Users = mongoose.model("Users", {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

async function signup(req, res) {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res.status(400).json({
      success: false,
      errors: "Existing user found with same email address",
    });
  }
  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }
  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(user.password, saltRounds);

  user.password = hashedPassword;
  await user.save();

  const data = {
    user: {
      id: user.id,
    },
  };

  const token = jwt.sign(data, "secret_ecom");
  res.json({ success: true, token });
}

async function login(req, res) {
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    const passCompare = await bcrypt.compare(req.body.password, user.password);;

    if (passCompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secret_ecom");
      res.json({
        success: true,
        token,
        cartData: user.cartData, // Add this line
      });
    } else {
      res.json({ success: false, errors: "Wrong password" });
    }
  } else {
    res.json({ success: false, errors: "Wrong email address" });
  }
}

async function addToCart(req, res) {
  console.log("Added", req.body.itemId);
  let userData = await Users.findOne({ _id: req.user.id });
  userData.cartData[req.body.itemId] += 1;
  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.send("Added");
}

async function removeFromCart(req, res) {
  console.log("removed", req.body.itemId);
  let userData = await Users.findOne({ _id: req.user.id });
  if (userData.cartData[req.body.itemId] > 0) {
    userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate(
      { _id: req.user.id },
      { cartData: userData.cartData }
    );
    res.send("Removed");
  }
}

async function getCartData(req,res) {
  console.log("GetCart");
  let userData = await Users.findOne({_id:req.user.id});
  res.json(userData.cartData);
}

module.exports = {
  signup,
  login,
  addToCart,
  removeFromCart,
  getCartData
};
