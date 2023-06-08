const {MenuDia} = require("../DB_connection");

const getMenuDia = async () => {
  try {
    let aux = await MenuDia.findOne({
      where: {
        id:1
      },
    });
    return aux;
  } catch (error) {
    throw error.message;
  }
};

const putMenuDia = async (menu) => {
  const putMenu = await MenuDia.update(menu, { where: { id: menu.id } });
  return putMenu;
};

module.exports = { getMenuDia, putMenuDia };
