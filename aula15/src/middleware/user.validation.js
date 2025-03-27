const userValidation = (req, res, next) => {
  const user = req.body;
  if (!user.first_name || !user.last_name || !user.email || !user.password) {
    console.log(req.body);
    return res.status(400).json({ message: "Missing required fields" });
  }

  if (
    user.password.length < 3 ||
    user.first_name.length < 3 ||
    user.last_name.length < 3
  ) {
    return res.status(400).json({ message: "Invalid required fields" });
  }

  next();
}

module.exports = userValidation;