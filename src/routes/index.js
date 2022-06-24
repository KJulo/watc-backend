const Router = require("express-promise-router");
const router = new Router();
const db = require("../database/index");

router.get("/user", async (req, res) => {
  const response = await db.query("select * from usuarios");
  res.json({
    data: response.rows[0],
  })
})

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

router.get("/checkAdministrador", async (req, res) => {
  try {
    const response = await db.query(
      "select exists (select 1 from guardias where email like $1 and contrasena like $2)",
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
    const response = await db.query("INSERT INTO incidencias(tipo,descripcion,fechaEmitida,isResuelta,ubicacion,id_usuario,id_estadio) VALUES($1,$2,NOW(),false,$3,$4,$5)", [req.body.incidencia.tipo, req.body.incidencia.descripcion, req.body.incidencia.ubicacion, req.body.user.ido, req.body.incidencia.idEstadio]);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
});

router.get("/getIncidencias", async (req, res) => {
  try {
    const response = await db.query("SELECT i.ubicacion, count (i.ubicacion) FROM incidencias i where i.ubicacion in (select nombre from ubicacion) GROUP BY i.ubicacion");
    res.json(response.rows)
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;
