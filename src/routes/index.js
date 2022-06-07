const bodyParser = require('body-parser');
const Router = require('express-promise-router');
const router = new Router();

//const { getUser } = require('../controllers/index');
const db = require('../database/index');


router.get('/user', async (req, res) => {
  const response = await db.query('SELECT * FROM usuarios');
  
  res.json(response.rows);
})


module.exports = router;