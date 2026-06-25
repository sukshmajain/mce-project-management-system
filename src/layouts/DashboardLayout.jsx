import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-[260px]">
        <Topbar />
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;