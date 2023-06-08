const server = require("./app");
const { sequelize } = require("./DB_connection");
require("dotenv").config();

const { PORT } = process.env;

server.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);

  await sequelize.sync({ alter: true });

  console.log("Database connected");
});
