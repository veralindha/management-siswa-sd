
import executeQuery from "../../../utils/db";

export default function handler(req, res) {
  if (req.method === 'DELETE') {
    const query = "DELETE FROM tbl_siswa WHERE siswa_id=(?)";
    const deleteSiswa = executeQuery({
      query: query,
      values: [req.body.siswa_id]
    });
    deleteSiswa
      .then((data) => {
        res.status(200).json({
          message: 'success',
          data: {
            deleted_siswa_id: req.body.siswa_id
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