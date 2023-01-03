import { useEffect, useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";

const EditData = ({ siswaId }) => {
  const [newNik, setNewNik] = useState('');
  const [newNamaSiswa, setNewNamaSiswa] = useState('');
  const [newNamaOrangTua, setNewNamaOrangTua] = useState('');
  const [newTanggalLahir, setNewTanggalLahir] = useState('');
  const [newJenisKelamin, setNewJenisKelamin] = useState('');
  const [newNotelp, setNewNotelp] = useState('');
  const [newAlamat, setNewAlamat] = useState('');
  const [newAsalSekolah, setNewAsalSekolah] = useState('');
  const data = {
    siswa_id: siswaId
  };

  const handleUpdate = () => {
    const data = {
      nik: newNik,
      nama_siswa: newNamaSiswa,
      orangtua_siswa: newNamaOrangTua,
      tanggallahir_siswa: newTanggalLahir,
      jenis_kelamin_siswa: newJenisKelamin,
      alamat_siswa: newAlamat,
      asal_sekolah: newAsalSekolah,
      notelp_orangtua: newNotelp,
      siswa_id: siswaId
    };
    if (newNamaSiswa != '' || newNamaOrangTua != '') {
      fetch('/api/siswa/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.message == 'success') {
            Swal.fire({
              title: 'Success',
              text: 'Data berhasil diupdate!',
              icon: 'success'
            });
          } else {
            Swal.fire({
              title: 'Error!',
              text: 'Gagal update data!',
              icon: 'error'
            });
          }
        });
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Mohon isi field dengan benar!',
        icon: 'error'
      });
    }
  };

  useEffect(() => {
    fetch('/api/siswa/find', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message == 'success') {
          setNewNik(res.data[0].nik);
          setNewNamaSiswa(res.data[0].nama_siswa);
          setNewNamaOrangTua(res.data[0].orangtua_siswa);
          setNewTanggalLahir(res.data[0].tanggallahir_siswa);
          setNewJenisKelamin(res.data[0].jenis_kelamin_siswa);
          setNewNotelp(res.data[0].notelp_orangtua);
          setNewAlamat(res.data[0].alamat_siswa);
          setNewAsalSekolah(res.data[0].asal_sekolah);
        }
      });
  }, []);

  return (
    <>
      <div className="content-wrapper">
        <section className="content">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="ml-2">Edit Data</h1>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  {/* /.card-header */}
                  <div className="card-body">
                    <div className="container-fluid">
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-4">
                            <div>
                              <label htmlFor="exampleInputName1">NISN</label>
                              <input type="textarea" className="form-control form-control-sm text-left" id="exampleInputName1" value={newNik} onChange={(e) => setNewNik(e.target.value)} required/>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div>
                              <label htmlFor="exampleInputName2">Nama Siswa</label>
                              <input type="textarea" className="form-control form-control-sm text-left" id="exampleInputName2" value={newNamaSiswa} onChange={(e) => setNewNamaSiswa(e.target.value)} required/>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div>
                              <label htmlFor="exampleInputName3">Nama Orang Tua</label>
                              <input type="textarea" className="form-control form-control-sm text-left text-left" id="exampleInputName3" value={newNamaOrangTua} onChange={(e) => setNewNamaOrangTua(e.target.value)} required/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-4">
                            <div>
                              <label htmlFor="tgl">Tanggal Lahir</label>
                              <input type="date" className="form-control form-control-sm text-left" id="tgl" value={newTanggalLahir} onChange={(e) => setNewTanggalLahir(e.target.value)} required/>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div>
                              <label htmlFor="gender">Jenis Kelamin</label>
                              <select className="form-control form-control-sm" id="gender" value={newJenisKelamin} onChange={(e) => setNewJenisKelamin(e.target.value)} required>
                                <option disabled></option>
                                <option value={'L'}>Laki - Laki</option>
                                <option value={'P'}>Perempuan</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div>
                              <label htmlFor="telp">Nomer Telepon</label>
                              <input type="number" className="form-control form-control-sm" name="telp" id="telp" value={newNotelp} onChange={(e) => setNewNotelp(e.target.value)}required />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-8">
                            <div>
                              <label htmlFor="alamat">Alamat</label>
                              <input type="textarea" className="form-control form-control-sm text-left" id="alamat" value={newAlamat} onChange={(e) => setNewAlamat(e.target.value)} required/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-8">
                            <div>
                              <label htmlFor="asal">Asal Sekolah</label>
                              <input type="textarea" className="form-control form-control-sm text-left" id="asal" value={newAsalSekolah} onChange={(e) => setNewAsalSekolah(e.target.value)} required/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Link href="/admin/siswa/management" className="row">
                        <button className="btn btn-primary" onClick={() => handleUpdate()}>Simpan</button>
                      </Link>
                    </div>
                  </div>
                  {/* /.card-body */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default EditData;