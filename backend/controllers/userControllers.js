const register = async (req, res) => {
  res.status(200).json("register");
};

const login = async (req, res) => {
  res.status(200).json("login");
};

const logout = async (req, res) => {
  res.status(200).json("logout");
};

module.exports = { register, login, logout };
