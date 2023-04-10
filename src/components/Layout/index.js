import { Outlet } from "react-router-dom";
import './index.scss';
import Sidebar from "../Sidebar";
import Snowfall from 'react-snowfall'

const Layout = () => {
  return <div className="App">
    <Sidebar />
    <div className="page">
      <Snowfall
        color="#ffcafb"
        snowflakeCount={50}
      />
      <Outlet />
    </div>
  </div>
}
export default Layout