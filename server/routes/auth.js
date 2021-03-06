const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');

const app = express();
app.use(cookieParser());

app.use(
  expressJwt({
    secret: process.env.TOKEN,
    algorithms: ['HS256'],
  }).unless({
    path: '/api/auth/login'
  })
);

router.post("/login", async (req, res) => {
  if (req.body.user === process.env.AUTH_USER && req.body.password === process.env.AUTH_PASSWORD) {
    await jwt.sign(
      { user: req.body.user },
      process.env.TOKEN,
      { expiresIn: "1d" },
      async function (err, token) {
        await res.json({ token: token, user: req.body.user });
      }
    );
  } else {
    await res.status(403).json({ message: "Ошибка авторизации" })
  }
});

router.get("/user", async (req, res) => {
  const tokenDecoded = await jwt.decode(req.headers.authorization.split('Bearer ')[1]);
  res.json({
    user: tokenDecoded.user
  });
});

router.post("/logout", async (req, res) => {
  await res.json("Вы успешно вышли из админки");
});

module.exports = router
