import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const Links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/profile',
      text: 'Profile',
    },
  ];

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="logo" style={{ width: '50px', height: '50px' }} />
        <h1>Space Travelers</h1>
      </div>
      <ul className="ul-links">
        {Links.map((link) => (
          <li className="li-links" key={link.id}>
            <NavLink className="links" to={link.path}>
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
