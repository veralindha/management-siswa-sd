
import executeQuery from "../../../utils/db";

export default function handler(req, res) {
  if (req.method === 'POST') {
    const query = "INSERT INTO tbl_siswa VALUES(NULL, ?, ?, ?, ?, ?, ?, ?, ?)";
    const insert = executeQuery({
      query: query,
      values: [
        req.body.nik,
        req.body.nama_siswa,
        req.body.orangtua_siswa,
        req.body.tanggallahir_siswa,
        req.body.jenis_kelamin_siswa,
        req.body.alamat_siswa,
        req.body.asal_sekolah,
        req.body.notelp_orangtua,
      ]
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
            data: data
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