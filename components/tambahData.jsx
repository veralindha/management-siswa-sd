import { useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";

const TambahData = () => {
  const [nik, setNik] = useState('');
  const [namaSiswa, setNamaSiswa] = useState('');
  const [namaOrangTua, setNamaOrangTua] = useState('');
  const [tanggalLahir, setTanggalLahir] = useState('');
  const [jenisKelamin, setJenisKelamin] = useState('');
  const [notelp, setNotelp] = useState('');
  const [alamat, setAlamat] = useState('');
  const [asalSekolah, setAsalSekolah] = useState('');

  const handleCreate = () => {
    const data = {
      nik: nik,
      nama_siswa: namaSiswa,
      orangtua_siswa: namaOrangTua,
      tanggallahir_siswa: tanggalLahir,
      jenis_kelamin_siswa: jenisKelamin,
      alamat_siswa: alamat,
      asal_sekolah: asalSekolah,
      notelp_orangtua: notelp
    };
    if (namaSiswa != '' || namaOrangTua != '') {
      fetch('/api/siswa/create', {
        method: 'POST',
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
              text: 'Data berhasil ditambahkan!',
              icon: 'success'
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
  }

  return (
    <>
      <div className="content-wrapper">
        <section className="content">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="ml-2">Tambah Data</h1>
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
                              <input type="textarea" className="form-control form-control-sm text-left" id="exampleInputName1" value={nik} onChange={(e) => setNik(e.target.value)} required/>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div>
                              <label htmlFor="exampleInputName2">Nama Siswa</label>
                              <input type="textarea" className="form-control form-control-sm text-left" id="exampleInputName2" value={namaSiswa} onChange={(e) => setNamaSiswa(e.target.value)} required/>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div>
                              <label htmlFor="exampleInputName3">Nama Orang Tua</label>
                              <input type="textarea" className="form-control form-control-sm text-left text-left" id="exampleInputName3" value={namaOrangTua} onChange={(e) => setNamaOrangTua(e.target.value)} required/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-4">
                            <div>
                              <label htmlFor="tgl">Tanggal Lahir</label>
                              <input type="date" className="form-control form-control-sm text-left" id="tgl" value={tanggalLahir} onChange={(e) => setTanggalLahir(e.target.value)} required/>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div>
                              <label for="gender">Jenis Kelamin</label>
                              <select className="form-control form-control-sm" id="gender" value={jenisKelamin} onChange={(e) => setJenisKelamin(e.target.value)} required>
                                <option disabled></option>
                                <option value={'L'}>Laki - Laki</option>
                                <option value={'P'}>Perempuan</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div>
                              <label for="telp">Nomer Telepon</label>
                              <input type="tel" className="form-control form-control-sm" name="telp" id="telp" value={notelp} onChange={(e) => setNotelp(e.target.value)} required/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-8">
                            <div>
                              <label htmlFor="alamat">Alamat</label>
                              <input type="textarea" className="form-control form-control-sm text-left" id="alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} required/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-8">
                            <div>
                              <label htmlFor="asal">Asal Sekolah</label>
                              <input type="textarea" className="form-control form-control-sm text-left" id="asal" value={asalSekolah} onChange={(e) => setAsalSekolah(e.target.value)} required/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Link href="/admin/siswa/management" className="row">
                        <button className="btn btn-primary" onClick={() => handleCreate()}>Simpan</button>
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
export default TambahData;