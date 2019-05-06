const express = require('express');
const User = require('../models/UserModel');
const router = express.Router();

router.get('/', async (req, res) => {
  res.status(200).json("Succas");
  // ResponseWriter.success(res, "succ");
});

module.exports = router;
