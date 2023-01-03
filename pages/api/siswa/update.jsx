
import executeQuery from "../../../utils/db";

export default function handler(req, res) {
  if (req.method === 'PUT') {

  } else {
    res.status(400).json({
      message: 'bad request'
    });
  }
  const query = "UPDATE tbl_siswa SET nik=(?), nama_siswa=(?), orangtua_siswa=(?), tanggallahir_siswa=(?), jenis_kelamin_siswa=(?), alamat_siswa=(?), asal_sekolah=(?), notelp_orangtua=(?) WHERE siswa_id=(?)";
  const update = executeQuery({
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
      req.body.siswa_id
    ]
  });
  update
    .then((data) => {
      res.status(200).json({
        message: 'success',
        data: data
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'error',
        data: error
      });
    });
}