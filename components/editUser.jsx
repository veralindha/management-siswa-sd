import { useEffect, useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";

const EditUser = ({ userId }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newFullname, setNewFullname] = useState('');
  const data = {
    user_id: userId
  };

  const handleUpdate = () => {
    if (newUsername == '' || newPassword == '' || newFullname == '') {
      Swal.fire({
        title: 'Error!',
        text: 'Mohon isi data dengan lengkap!',
        icon: 'error'
      });
    } else {
      const data = {
        username: newUsername,
        password: newPassword,
        fullname: newFullname,
        user_id: userId
      };
      fetch('/api/user/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.message == 'success') {
            Swal.fire({
              title: 'Info',
              text: 'Data berhasil diupdate!',
              icon: 'success',
            });
            setNewUsername('');
            setNewPassword('');
            setNewFullname('');
          } else {
            Swal.fire({
              title: 'Error',
              text: 'Gagal update data!',
              icon: 'error',
            });
          }
        })
    }
  }

  useEffect(() => {
    fetch('/api/user/find', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message == 'success' && res.data.length > 0) {
          setUsername(res.data[0].username);
          setPassword(res.data[0].password);
          setFullname(res.data[0].fullname);
        }
      })
  }, [])

  return (
    <>
      <div className="content-wrapper">
        <section className="content">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="ml-2">Edit User</h1>
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
                        <div className="row mb-2">
                          <div className="col-md-4">
                            <div>
                              <label htmlFor="username">Old Username</label>
                              <input type="textarea" className="form-control form-control-sm text-left" id="username" disabled value={username} onChange={(e) => setUsername(e.target.value)} />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div>
                              <label htmlFor="password">Old Password</label>
                              <input type="textarea" className="form-control form-control-sm text-left" id="password" disabled value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div>
                              <label htmlFor="fullname">Old Nama Lengkap</label>
                              <input type="textarea" className="form-control form-control-sm text-left" id="fullname" disabled value={fullname} onChange={(e) => setFullname(e.target.value)} />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <div>
                              <label htmlFor="username">New Username</label>
                              <input type="textarea" className="form-control form-control-sm text-left" id="newusername" required value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div>
                              <label htmlFor="password">New Password</label>
                              <input type="textarea" className="form-control form-control-sm text-left" id="newpassword" required value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div>
                              <label htmlFor="fullname">New Nama Lengkap</label>
                              <input type="textarea" className="form-control form-control-sm text-left" id="newfullname" required value={newFullname} onChange={(e) => setNewFullname(e.target.value)} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <Link href="/admin/user/management" className="row">
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
export default EditUser;