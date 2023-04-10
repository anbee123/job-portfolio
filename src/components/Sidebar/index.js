import './index.scss';
import { Link } from 'react-router-dom';
import LogoMe from '../../assets/images/me_1.png'
const Sidebar = () => {
  return <div className='nav-bar'>
    <Link className="logo" to="/">
      <img src={LogoMe} alt="Logo" />
    </Link>
  </div>
}
export default Sidebar;