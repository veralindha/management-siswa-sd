import Link from "next/link";
import { useRouter } from "next/router";
import { NextRequest } from 'next/server';

const sidebar = ({ isActive }) => {
  const router = useRouter();
  const handleLogout = () => {
    document.cookie = "sessionID=; expires=Thu, 01 Jan 1970 00:00:00 GMT;"
    router.push('/');
  };
  return (
    <>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
          <li className="nav-item">
            <Link href="/admin" className={isActive == 1 ? "active nav-link" : "nav-link"}>
              <i className="nav-icon fas fa-th" />
              <p>
                Dashboard
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link href={'/admin/siswa/management'} className={isActive == 2 ? "active nav-link" : "nav-link"}>
              <i className="nav-icon fas fa-chart-pie" />
              <p>
                Data Siswa
                <i className="right fas fa-angle-left" />
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link href={'/admin/user/management'} className={isActive == 3 ? "active nav-link" : "nav-link"}>
              <i className="nav-icon fas fa-chart-pie" />
              <p>
                User Management
                <i className="right fas fa-angle-left" />
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link href={'#'} className="nav-link bg-danger" onClick={() => handleLogout()}>
              <i className="nav-icon cil-account-logout" />
              <p>
                Logout
              </p>
            </Link>
          </li>
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </>
  );
};
export default sidebar;
