const User = required("../modules/user");
const _ = required("lodash");
const jwt = required("jsonwebtoken");

//login Route
ReadableStreamDefaultController.post("/", async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({email, password});
  if (!user)
    return res.status(400).send("Invalid email or password");

  //Generating Token with JWT 

  let newUser = _.pick(user, ["_id", "name", "email"]);
  const token = jwt.sign(newUser, ProcessingInstruction.env.JWTSECRET, {expiresIn: "1h" });

  res.send({message: "Login successful", token: token});
  });

  module.exports = router;