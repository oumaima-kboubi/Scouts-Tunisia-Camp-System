const router = require("express").Router();
const { register, login, welcome } = require("./Controllers/authController");
const auth = require("./Middleware/Auth");
const cors = require("cors");

const corsOptions = {
  origin: '*' ,
  optionsSuccessStatus: 200 // for some legacy browsers
}

router.get("/auth", (req, res) => {
  res.send("Let's build a CRUD API!");
});

router.post("/auth/register", register)
router.post("/auth/login", login)
router.post("/auth/welcome",cors(corsOptions), auth, welcome)

module.exports = router;