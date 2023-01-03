import Sidebar from "./sidebar";
import Image from "next/image";
const Layout = ({ children, isActiveNavLink }) => {
  return (
    <div className="hold-transition sidebar-mini layout-fixed">
      <aside className="main-sidebar sidebar-light-primary elevation-4">
        <div className="sidebar text-bold">
          <Image className="mt-2"
            src="/logo.png"
            alt="Picture of the author"
            width={60}
            height={60}
          /><span className="text-lg font-weight-bold">SDN 2 Kabat</span>
          <Sidebar isActive={isActiveNavLink} />
        </div>
      </aside>
      <main className="" style={{ height: 100 }}>
        {children}
      </main>
    </div>
  );
};
export default Layout;
