import { useState, useEffect } from "react";
import Link from "next/link";

const Dashboard = () => {
  const [totalSiswa, setTotalSiswa] = useState(0);
  const [siswaL, setSiswaL] = useState(0);
  const [siswaP, setSiswaP] = useState(0);

  useEffect(() => {
    fetch('/api/siswa/total')
      .then((res) => res.json())
      .then((result) => {
        if(result.message == "success"){
          setTotalSiswa(result.data[0].total)
          setSiswaL(result.data[0].siswaL)
          setSiswaP(result.data[0].siswaP)
        }
      })
  }, []);

  return (
    <>
      <div className="content-wrapper">
        <section className="content">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="ml-2">Dashboard</h1>
            </div>
          </div>
          <div className="row">
            <Link href="/admin/siswa/management" className="col-lg-4 col-6">
              <div className="small-box bg-primary">
                <div className="inner">
                  <h3>{totalSiswa}</h3>
                  <p>Total Siswa</p>
                </div>
                <div className="icon">
                  <i className="cil-people" />
                </div>
                <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
              </div>
            </Link>
            <Link href="/admin/siswa/management" className="col-lg-4 col-6">
              <div className="small-box bg-success">
                <div className="inner">
                  <h3>{siswaL}</h3>
                  <p>Siswa Laki-laki</p>
                </div>
                <div className="icon">
                  <i className="cil-user" />
                </div>
                <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
              </div>
            </Link>
            <Link href="/admin/siswa/management" className="col-lg-4 col-6">
              <div className="small-box bg-warning">
                <div className="inner">
                  <h3>{siswaP}</h3>
                  <p>Siswa Perempuan</p>
                </div>
                <div className="icon">
                  <i className="cil-user-female" />
                </div>
                <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

export default Dashboard;
