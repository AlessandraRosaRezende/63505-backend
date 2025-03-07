const auth = (req, res, next) => {
  console.log("Auth", req.session)
  if (req.session?.admin) {
    return next();
  }
  return res.send("Não autorizado");
};
module.exports = auth;