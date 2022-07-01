const db = require('../database/index');

const getUser = (req, res) => {
  try { 
    const response = "hgolasdasd"
    const responsedb = await pool.query("SELECT * FROM usuarios");
    console.log(responsedb);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
}





exports.getUser = getUser;