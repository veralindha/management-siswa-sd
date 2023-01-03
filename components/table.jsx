import Link from "next/link";
import Router from "next/router";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const Table = () => {
  const [dataSiswa, setDataSiswa] = useState([]);
  const [search, setSearch] = useState('');

  const searchedData = dataSiswa.filter((siswa) => siswa.nama_siswa.toLowerCase().includes(search.toLocaleLowerCase()));

  const handleDelete = (id) => {
    const data = {
      siswa_id: id
    };
    Swal.fire({
      title: 'Warning!',
      text: 'Delete selected data?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
      confirmButtonColor: "#DC3545"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch('/api/siswa/delete', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.data.deleted_siswa_id != undefined) {
              Router.reload(window.location.pathname);
            }
          })
      }
    })
  }

  useEffect(() => {
    fetch('/api/siswa/findAll')
      .then((res) => res.json())
      .then((result) => {
        if (result.message == 'success') {
          setDataSiswa(result.data);
        }
      });
  }, []);

  return (
    <>
      <div className="content-wrapper">
        {/* Main content */}
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="ml-2">Data Siswa</h1>
          </div>
        </div>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                {/* /.card */}
                <div className="card">
                  {/* /.card-header */}
                  <div className="card-body">
                    <div id="example1_wrapper" className="dataTables_wrapper dt-bootstrap4"><div className="row">
                      <div className="col-sm-12 col-md-6">
                        <Link href={'/admin/siswa/create'} className="btn btn-primary"><span className="text-bold">+</span> Tambahkan Data</Link>
                      </div>
                      <div className="col-sm-12 col-md-6">
                        <div id="example1_filter" className="dataTables_filter">
                          <label>Search:<input type="search" className="form-control form-control-sm" aria-controls="example1" value={search} onChange={(e) => setSearch(e.target.value)} /></label>
                        </div>
                      </div>
                    </div>
                      <div className="row">
                        <div className="col-sm-12 table-wrapper-scroll-y my-custom-scrollbar">
                          <table id="example1" className="table table-bordered table-striped dataTable dtr-inlin " role="grid" aria-describedby="example1_info">
                            <thead>
                              <tr role="row" className="text-center">
                                <th className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} aria-label="Browser: activate to sort column ascending">NISN</th>
                                <th className="sorting sorting_asc" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">Nama</th>
                                <th className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} aria-label="Browser: activate to sort column ascending">Orang Tua</th>
                                <th className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} aria-label="Platform(s): activate to sort column ascending">Tanggal Lahir</th>
                                <th className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} aria-label="Engine version: activate to sort column ascending">Jenis Kelamin</th>
                                <th className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} aria-label="CSS grade: activate to sort column ascending" style={{}}>Alamat</th>
                                <th className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} aria-label="CSS grade: activate to sort column ascending" style={{}}>Asal Sekolah</th>
                                <th className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} aria-label="CSS grade: activate to sort column ascending" style={{}}>No Telepon</th>
                                <th className="sorting" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} aria-label="CSS grade: activate to sort column ascending" style={{}}>Aksi</th></tr>
                            </thead>
                            <tbody className=" overflow-auto">
                              {searchedData.map((siswa, i) => (
                                <tr key={i}>
                                  <td className="dtr-control sorting_1" tabIndex={0}>{siswa.nik}</td>
                                  <td className="dtr-control sorting_1" tabIndex={0}>{siswa.nama_siswa}</td>
                                  <td>{siswa.orangtua_siswa}</td>
                                  <td>{siswa.tanggallahir_siswa}</td>
                                  <td className="text-center">{siswa.jenis_kelamin_siswa}</td>
                                  <td>{siswa.alamat_siswa}</td>
                                  <td>{siswa.asal_sekolah}</td>
                                  <td>{siswa.notelp_orangtua}</td>
                                  <td className="text-center">
                                    {/* <button className="btn btn-primary btn-sm mr-1"><i className="cil-info"></i></button> */}
                                    <Link href={`/admin/siswa/edit/${siswa.siswa_id}`} className="btn btn-success btn-sm mr-1"><i className="cil-pencil"></i></Link>
                                    <button className="btn btn-danger btn-sm mr-1"><i className="cil-trash" onClick={() => handleDelete(siswa.siswa_id)}></i></button>
                                  </td>
                                </tr>
                              ))}
                              <tr className="odd">

                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </section>
        {/* /.content */}
      </div>
    </>
  );
};
export default Table;
