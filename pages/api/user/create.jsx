
import executeQuery from "../../../utils/db";

export default function handler(req, res) {
  if (req.method === 'POST') {
    const query = "INSERT INTO tbl_user VALUES(NULL, ?, ?, ?)";
    const insert = executeQuery({
      query: query,
      values: [req.body.username, req.body.password, req.body.fullname]
    });
    insert
      .then((data) => {
        if (data.insertId != undefined) {
          res.status(201).json({
            message: 'success',
            data: data
          });
        } else {
          res.status(400).json({
            message: 'failed',
            data: {
              username: req.body.username,
              fullname: req.body.fullname
            }
          });
        }
      })
      .catch((error) => {
        res.status(500).json({
          message: error
        });
      });
  } else {
    res.status(400).json({
      message: 'bad request'
    });
  }
}