const express = require("express");
const router = express.Router();
const stocks = require("../models/Stocks")
// const s = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const fetchcompany = require("../middlewares/fetchCompany");
const JWT_SECRET = "HelloRashid";

 router.post(
  "/createStock",
  [
    body("email", "Enter a valid email no.").isEmail(),
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("password", "Password too short").isLength({ min: 3 }),
  ],
  async (req, res) => {
    // checking validation and errors
    console.log(req.body);
    var success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    // secured password  = hash(password + salt)
    const salt = await bcrypt.genSalt(10);
    let secPass = await bcrypt.hash(req.body.password, salt);
    try {
      // checking if user already exist
      let newuser = await stocks.findOne({ email: req.body.email });
      if (newuser) {
        return res
          .status(400)
          .json({ success, error: "This user already exist" });
      }
      // It automatically create a collection in mongodb unlike SQL
      // creating a new user
      newuser = await stocks.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
        symbol : req.body.symbol,
        weekHigh52 : req.body.weekHigh52,
        weekLow52 : req.body.weekLow52,
        marketCap : req.body.marketCap,
        numberofshares : req.body.numberofshares,
        address : req.body.address,
        base_price : req.body.base_price,
        price: req.body.price
      });
      success = true;
      res.send({ success });
    } catch (error) {
      res.status(500).send("Error has occured");
    }
  }
);


router.get("/getStock", fetchcompany , async (req, res) => {
    try {
      const userId = req.user.id;
      const stock = await stocks.findById(userId)
      console.log(stock)
      res.send(stock);
    } catch (error) {
      res.status(500).send("some error occured " + error);
    }
  });

  
  router.post("/login" , [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password can not be blank").isLength({ min: 1 }),
  ],
  async (req, res) => {
    // checking validation and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let success = false;
      let user = await stocks.findOne({ email });
      if (!user)
        return res
          .status(500)
          .json({
            success,
            error: "Please try to login with correct credential",
          });
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare)
        return res
          .status(500)
          .json({
            success,
            error: "Please try to login with correct credential",
          });
      const data = {
        user: {
          id: user.id,
          email: user.email,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      console.log("Auth token in login company" ,user ,authToken)
      success = true;
      req.user = user.id;
      // console.log(req.user + " us"  + user.id)
      res.send({ success, authToken, userid: user.id });
    } catch (error) {
      res.status(500).send("Error has occured  in stock login" + error);
    }
  })
  
  router.get("/getAllStocks", async (req, res) => {
    try {
      const stock = await stocks.find()
      res.send(stock);
    } catch (error) {
      res.status(500).send("some error occured " + error);
    }
  });   
  
  // router.post('/createStock', async (req, res) => {
  //     try {
  //         const blog = req.body;
  //         console.log(blog);
  //         newblog = await stocks.create(blog);
  //         res.status(201).json(newblog);
  //     } catch (err) {
  //         res.status(400).send({ message: err.message });
  //     }
  // });
  
  

  module.exports = router;