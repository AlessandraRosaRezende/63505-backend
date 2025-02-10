const auth = (req, res, next) => {
  if (req.user.role === "admin") {
    return next();
  }
  return res.status(404).json({ message: "You dont have autorization to do this" });
};

module.exports = auth;
