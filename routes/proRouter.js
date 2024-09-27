const express = require("express");
const Pro = require("../models/pro.model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const pros = await Pro.find();
    if (!pros) {
      res.status(404).json("There is no description");
    }
    res.json(pros);
  } catch (err) {
    throw new Error("");
  }
});

router.post("/", async (req, res) => {
  const newPro = {
    pro: req.body.data,
  };
  try {
    const pro = new Pro(newPro);
    pro.save();
    res.json(pro);
  } catch (error) {
    throw new Error("");
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const pro = await Pro.findByIdAndDelete(id);
    res.json(pro);
  } catch (error) {
    res.status(400).json("failed");
  }
});

module.exports = router;
