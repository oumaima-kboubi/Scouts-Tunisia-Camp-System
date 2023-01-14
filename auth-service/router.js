const router = require("express").Router();
const { register, login, welcome } = require("./Controllers/authController");
const auth = require("./middleware/auth");
const cors = require("cors");

const corsOptions = {
  origin: '*' ,
  optionsSuccessStatus: 200 // for some legacy browsers
}

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

router.post("/register", register)
router.post("/login", login)
router.post("/welcome",cors(corsOptions), auth, welcome)

module.exports = router;