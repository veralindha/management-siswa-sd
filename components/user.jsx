import Link from "next/link";
import Router from "next/router";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const User = () => {
  const [userData, setUserData] = useState([]);
  const [search, setSearch] = useState('');

  const searchedData = userData.filter((user) => user.username.toLowerCase().includes(search.toLowerCase()));

  const handleDelete = (id) => {
    const data = {
      user_id: id
    };
    Swal.fire({
      title: 'Warning!',
      text: 'Delete selected data?',
      confirmButtonText: 'Delete',
      showCancelButton: true,
      confirmButtonColor: "#DC3545"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch('/api/user/delete', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then((res) => res.json())
          .then((res) => {
            if(res.data.deleted_user_id != undefined){
              Router.reload(window.location.pathname);
            }
          })
      }
    })
  }

  useEffect(() => {
    fetch('/api/user/findAll')
      .then((res) => res.json())
      .then((result) => {
        if (result.message == 'success') {
          setUserData(result.data);
        }
      });
  }, []);

  return (
    <>
      <div className="content-wrapper">
        <section className="content">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="ml-2">User Management</h1>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  {/* /.card-header */}
                  <div className="card-body">
                    <div id="example1_wrapper" className="dataTables_wrapper dt-bootstrap4">
                      <div className="row">
                        <div className="col-sm-12 col-md-6">
                          <Link type="button" href={'/admin/user/create'} className="btn btn-primary"><span className="text-bold">+</span> Tambahkan User</Link>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <div id="example1_filter" className="dataTables_filter"><label>Search:<input type="search" className="form-control form-control-sm" aria-controls="example1" value={search} onChange={(e) => setSearch(e.target.value)}/></label>
                          </div>
                        </div>
                      </div>
                      <div className="row table-wrapper-scroll-y my-custom-scrollbar">
                        <div className="col-sm-12"><table id="example1" className="table table-bordered table-striped dataTable dtr-inline" role="grid" aria-describedby="example1_info">
                          <thead>
                            <tr role="row">
                              <th className="sorting text-center" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} aria-label="Browser: activate to sort column ascending">#</th>
                              <th className="sorting text-center" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} aria-label="Browser: activate to sort column ascending">Username</th>
                              <th className="sorting text-center" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} aria-label="Platform(s): activate to sort column ascending">Nama Lengkap</th>
                              <th className="sorting text-center" tabIndex={0} aria-controls="example1" rowSpan={1} colSpan={1} aria-label="CSS grade: activate to sort column ascending" style={{}}>Aksi</th></tr>
                          </thead>
                          <tbody>
                            {searchedData.map((user, i) => (
                              <tr key={i}>
                                <td className="dtr-control sorting_1 text-center" tabIndex={0}>{i + 1}</td>
                                <td className="dtr-control sorting_1 text-center" tabIndex={0}>{user.username}</td>
                                <td>{user.fullname}</td>
                                <td className="text-center">
                                  {/* <button className="btn btn-primary btn-sm mr-1"><i className="cil-info"></i></button> */}
                                  <Link href={`/admin/user/edit/${user.user_id}`} className="btn btn-success btn-sm mr-1"><i className="cil-pencil"></i></Link>
                                  <button className="btn btn-danger btn-sm mr-1" onClick={() => handleDelete(user.user_id)}><i className="cil-trash"></i></button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        </div>
                      </div>
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

export default User;