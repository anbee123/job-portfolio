import { Outlet } from "react-router-dom";
import './index.scss';
import Sidebar from "../Sidebar";

const Layout = () => {
  return <div>
    This is Layout
    <Sidebar />
    <Outlet />
  </div>
}
export default Layout