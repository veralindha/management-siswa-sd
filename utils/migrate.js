import executeQuery from "./db";

const query = [
  'CREATE TABLE IF NOT EXISTS tbl_siswa(siswa_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, nik INT(20), nama_siswa VARCHAR(128) NOT NULL, orangtua_siswa VARCHAR(128) NOT NULL, tanggallahir_siswa VARCHAR(64), jenis_kelamin_siswa VARCHAR(16), alamat_siswa TEXT, asal_sekolah VARCHAR(128), notelp_orangtua VARCHAR(16));',
  'CREATE TABLE IF NOT EXISTS tbl_user(user_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT, username VARCHAR(128) NOT NULL, password VARCHAR(128) NOT NULL, fullname VARCHAR(254));'
];

export default async function MigrateDB() {
  try {
    const migrateTableSiswa = await executeQuery({
      query: query[0],
      values: ''
    });
    const migrateTableUser = await executeQuery({
      query: query[1],
      values: ''
    });
    console.info(migrateTableSiswa, migrateTableUser);
    return 'Migration completed!';
  } catch (error) {
    console.error(error);
    return error;
  }
}