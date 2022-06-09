const Router = require("express-promise-router");
const router = new Router();
const db = require("../database/index");

router.get("/checkUsuarios", async (req, res) => {
  const response = await db.query(
    "select exists (select 1 from usuarios where email like $1 and contrasena like $2)",
    [req.query.email, req.query.contrasena]
  );
  res.json({
    login: response.rows[0],
  });
});

router.post("/addUsuario", async (req, res) => {
  try {
    const response = await db.query(
      "Insert into usuarios (nombre,email,contrasena) values ($1,$2,$3)",
      [req.query.nombre, req.query.email, req.query.contrasena]
    );
    console.log(response);
    res.json({
      register: "Usuario creado exitosamente",
    });
  } catch (error) {
    res.json({
      register: "Hubo un error al registrar, intente mas adelante",
    });
  }
});

router.get("/getAdministrador", async (req, res) => {
  try {
    const response = await db.query(
      "select exists (select 1 from usuarios where email like $1 and contrasena like $2)",
      [req.query.email, req.query.contrasena]
    );
    res.json({
      login: response.rows[0],
    });
  } catch (error) {
    res.json({
      login: "Hubo un error al ingresar, intente mas adelante",
    });
  }
});

router.post("/addIncidencia", async (req, res) => {
  try {
    const response = await db.query("");
  } catch (error) {
    console.log(error);
  }
});

router.get("/getIncidencia", async (req, res) => {
  try {
    const response = await db.query("");
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;
