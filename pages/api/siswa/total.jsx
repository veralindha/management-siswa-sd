
import executeQuery from "../../../utils/db";

const query = 'select count(siswa_id) as total, (select count(siswa_id) from tbl_siswa where jenis_kelamin_siswa="L") as siswaL, (select count(siswa_id) from tbl_siswa where jenis_kelamin_siswa="P") as siswaP from tbl_siswa;';

export default function handler(req, res) {
  try {
    const result = executeQuery({
      query: query,
      values: ''
    });
    result
      .then((result) => {
        if (result.length > 0) {
          res.status(200).json({
            message: 'success',
            data: result
          });
        } else {
          res.status(404).json({
            message: 'empty'
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: err
        });
      });
  } catch (error) {
    res.status(500).json({
      message: error
    });
  }
}