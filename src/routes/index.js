const express = require("express");
const router = express.Router();
const login = require("../controllers/login");
const { getMenuDia, putMenuDia } = require("../controllers/MenuDiaData");

router.get("/login", async (req, res) => {
  let { username, password } = req.query;
  try {
    let access = await login(username, password);
    if (access) {
      res.status(200).json(true);
    } else {
      res.status(400).json({ error: "Usuario o contraseña incorrectos" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/menuGet", async (req, res) => {
  try {
    let getMenu = await getMenuDia();
    res.status(200).json(getMenu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/menuPut", async (req, res) => {
  let menu = req.body;
  try {
    await putMenuDia(menu);
    res.status(200).json("Modificado con exito");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
