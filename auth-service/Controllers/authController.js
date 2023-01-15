const User = require("../Models/User");
var bcrypt = require('bcrypt');
var jwt = require("jsonwebtoken");
const {loginRequestCounter, registerRequestCounter,httpRequestDurationMicroseconds, activeConnections,total_logs} = require('../metrics')

const register = async (req, res) => {
  const start = Date.now();
  total_logs.inc();
  // Our register logic starts here
  try {
    // Get user input
    const { username, email, password } = req.body;

    // Validate user input
    if (!(email && password && username)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      
      registerRequestCounter.inc({'route': '/register', 'status_code': 400,'requestType':'post'})
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    encryptedUserPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      username: username,
      email: email.toLowerCase(), // sanitize
      password: encryptedUserPassword,
    });

    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "5h",
      }
    );
    // save user token
    user.token = token;

    registerRequestCounter.inc({'route': '/register', 'status_code': 200,'requestType':'post'})
    res.status(201).json(user);
    const duration = Date.now() - start;
    httpRequestDurationMicroseconds.labels('/register').observe(duration / 1000)
  } catch (err) {
    registerRequestCounter.inc({'route': '/register', 'status_code': 400,'requestType':'post'})
    console.log(err);
  }
  };
  
  const login = async (req, res) => {

    try {
      activeConnections.inc();
      total_logs.inc();
      const start = Date.now();
        // Get user input
        const { email, password } = req.body;
    
        // Validate user input
        if (!(email && password)) {
          res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
        const user = await User.findOne({ email });
    
        if (user && (await bcrypt.compare(password, user.password))) {
          // Create token
          const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
              expiresIn: "5h",
            }
          );
            user.token = token 
            // res.setHeader('x-access-token',token)
          loginRequestCounter.inc({'route': '/login', 'status_code': 200,'requestType':'post'})
          const duration = Date.now() - start;
          httpRequestDurationMicroseconds.labels('/login').observe(duration / 1000)
          activeConnections.dec();
          return res.status(200).json(user);
        }
        loginRequestCounter.inc({'route': '/login', 'status_code': 400,'requestType':'post'})
        const duration = Date.now() - start;
        httpRequestDurationMicroseconds.labels('/login').observe(duration / 1000)
        return res.status(400).send("Invalid Credentials");
    
      // Our login logic ends here
    }catch (err) {
        console.log(err);
       
        res.status(404).json({ message: err });
      }
};

const welcome = async (req, res) => {
  total_logs.inc();
    // const { email } = req.body;
    // const user = await User.findOne({ email });
    // req.setHeader('x-access-token',user.token);

    res.status(200).send("Welcome to Ouma's App 🙌");
};
module.exports = {
    register, login, welcome
};
  