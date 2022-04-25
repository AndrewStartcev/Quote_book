const express = require("express");
const router = express.Router();
var jwt = require("jsonwebtoken");
const Quote = require("../model/quote");

router.post("/", async (req, res) => {
  if (req.headers.authorization === undefined) {
    res.status(403).json({ message: "Токен не распознан" });
  } else {
    const token = req.headers.authorization.split("Bearer ")[1];
    jwt.verify(token, process.env.TOKEN, async function (err, decode) {
      const countDocuments = await Quote.countDocuments();
      const count = Number(countDocuments) + 1
      const quote = new Quote({
        count: count,
        category: req.body.data.category,
        author: req.body.data.author,
        quote: req.body.data.quote,
      });
      try {
        await quote.save();
        res.status(201).json({ message: "Цитата добавлена в базу" });
      } catch (err) {
        if (err.code == 11000) {
          res.status(500).json({ message: "Эта цитата уже есть в базе", code: 11000 });
        } else {
          res.status(500).json({ message: 'Ошибка добавление цитаты', console: err.message })
        }
      }
    });
  }
});

router.get("/count", async (req, res) => {
  try {
    const quote = await Quote.countDocuments()
    await res.json(quote);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:count", async (req, res) => {
  try {
    const quote = await Quote.findOne({ count: req.params.count })
    if (quote == null) {
      return res.status(404).json({ message: "Нет такой Цитаты" })
    }
    await res.json(quote);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
