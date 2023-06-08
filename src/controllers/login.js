const { User } = require("../DB_connection");

const login = async (username, password) => {
  const usuario = await User.findOne({
    where: {
      username: username,
      password: password,
    },
  });

  return usuario;
};

module.exports = login;
