const User = require("../Models/User");
var bcrypt = require('bcrypt');
var jwt = require("jsonwebtoken");
  
const register = async (req, res) => {

  // Our register logic starts here
  try {
    // Get user input
    const { firstName, lastName, email, password } = req.body;

    // Validate user input
    if (!(email && password && firstName && lastName)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    encryptedUserPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      first_name: firstName,
      last_name: lastName,
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

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
  };
  
  const login = async (req, res) => {

    try {
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
          return res.status(200).json(user);
        }
        return res.status(400).send("Invalid Credentials");
    
      // Our login logic ends here
    }catch (err) {
        console.log(err);
      }
};

const welcome = async (req, res) => {
    // const { email } = req.body;
    // const user = await User.findOne({ email });
    // req.setHeader('x-access-token',user.token);

    res.status(200).send("Welcome to Ouma's App 🙌");
};
module.exports = {
    register, login, welcome
};
  