
import executeQuery from "../../../utils/db";

export default function handler(req, res) {
  if (req.method === 'DELETE') {
    const query = "DELETE FROM tbl_user WHERE user_id=(?)";
    const deleteSiswa = executeQuery({
      query: query,
      values: [req.body.user_id]
    });
    deleteSiswa
      .then((data) => {
        res.status(200).json({
          message: 'success',
          data: {
            deleted_user_id: req.body.user_id
          }
        });
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