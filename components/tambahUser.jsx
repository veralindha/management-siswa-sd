import { useEffect, useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";

const TambahUser = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const handleCreate = () => {
    if (username == '' || password == '' || fullname == '') {
      Swal.fire({
        title: 'Error!',
        text: 'Mohon isi data dengan lengkap!',
        icon: 'error'
      });
    } else {
      const data = {
        username: username,
        password: password,
        fullname: fullname
      };
      fetch('/api/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then((res) => res.json())
        .then((result) => {
          if(result.message == 'success'){
            Swal.fire({
              title: 'Info',
              text: 'Data berhasil ditambahkan!',
              icon: 'success',
            });
            setUsername('');
            setPassword('');
            setFullname('');
          } else {
            Swal.fire({
              title: 'Error',
              text: 'Gagal menambahkan data!',
              icon: 'error',
            });
          }
        })
    }
  }

  return (
    <>
      <div className="content-wrapper">
        <section className="content">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="ml-2">Tambah User</h1>
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
                              <label htmlFor="username">Username</label>
                              <input type="textarea" className="form-control form-control-sm text-left" id="username" required value={username} onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div>
                              <label htmlFor="password">Password</label>
                              <input type="password" className="form-control form-control-sm text-left" id="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div>
                              <label htmlFor="fullname">Nama Lengkap</label>
                              <input type="textarea" className="form-control form-control-sm text-left" id="fullname" required value={fullname} onChange={(e) => setFullname(e.target.value)} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Link href="/admin/user/management" className="row">
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
export default TambahUser;