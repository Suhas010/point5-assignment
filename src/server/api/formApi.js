const express = require('express');
const Form = require('../models/formModel');
const FormService  = require('../services/formService');
const router = express.Router();

// forms list
router.get('/', async (req, res) => {
  try {
    const listData = await FormService.getForms();
    res.json(listData);
  } catch (error) {
    res.status(500).json("error");
  }
});

// form add
router.post('/', async (req, res) => {
  console.log("post");
  try {
    const data = req.body;
    const saveData = await FormService.saveForm(data);
    res.status(200).json(saveData);
  } catch (error) {
    console.error(error);
    res.json("error").status(500);
  }
  // ResponseWriter.success(res, "succ");
});

module.exports = router;
