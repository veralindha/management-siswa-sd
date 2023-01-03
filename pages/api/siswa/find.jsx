
import executeQuery from "../../../utils/db";

export default function handler(req, res) {
  if (req.method === 'POST') {
    const query = 'SELECT * FROM tbl_siswa WHERE siswa_id=(?)'
    const find = executeQuery({
      query: query,
      values: [req.body.siswa_id]
    });
    find
      .then((data) => {
        res.status(200).json({
          message: 'success',
          data: data
        });
      })
      .catch((reason) => {
        res.status(500).json({
          message: 'error',
          data: reason
        });
      });
  } else {
    res.status(400).json({
      message: 'bad request'
    });
  }

}