const bcrypt = require("bcrypt");

const createHash = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const isValidatePassword = async (password, user) => {
  console.log("to no isValidatePassword");
  console.log(password, user.password);
  const valid = await bcrypt.compare(password, user.password)
  return valid;
};

module.exports = {
  createHash,
  isValidatePassword,
};
