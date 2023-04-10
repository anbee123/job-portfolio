import './index.scss';
import { Link } from 'react-router-dom';
import LogoMe from '../../assets/images/me_1.png'
import LogoText from '../../assets/images/logo_text.png'
const Sidebar = () => {
  return <div className='nav-bar'>
    <Link className="logo" to="/">
      <img className='logo-img' src={LogoMe} alt="Logo" />
      <img className='logo-text' src={LogoText} alt="Logo" />
    </Link>
  </div>
}
export default Sidebar;