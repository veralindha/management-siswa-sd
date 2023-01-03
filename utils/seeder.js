import executeQuery from "./db";

const query = [
  "INSERT INTO `tbl_siswa` (`siswa_id`, `nik`, `nama_siswa`, `orangtua_siswa`, `tanggallahir_siswa`, `jenis_kelamin_siswa`, `alamat_siswa`, `asal_sekolah`, `notelp_orangtua`) VALUES ('1', 756756578, 'dummy', 'dummy parent', '2022-11-12', 'L', 'dummy address', 'TK dummy', '081234567890'), ('2', 65765777567, 'dummy second', 'dummy parents second', '2022-11-12', 'P', 'dummy address', 'Paud dummy', '081222333444'), ('3', 765765757776, 'dummy third', 'dummy parents third', '2022-11-12', 'L', 'dummy address', 'TK dummy', '081333222444')",
  "INSERT INTO `tbl_user` (`user_id`, `username`, `password`, `fullname`) VALUES ('1', 'admin', '12345678', 'Administrator')"
];

export default async function Seed() {
  try {
    const seedSiswa = await executeQuery({
      query: query[0],
      values: ''
    });
    const seedUser = await executeQuery({
      query: query[1],
      values: ''
    });
    console.info(seedSiswa);
    return "Seed completed!!";
  } catch (error) {
    console.error(error);
    return error;
  }


}