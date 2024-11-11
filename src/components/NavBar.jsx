import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = [
    { to: "/", label: "Home" },
    { to: "/actors", label: "Actors" },
    { to: "/directors", label: "Directors" }
  ];

  return (
    <nav className="navbar">
      {links.map((link) => (
        <NavLink 
          key={link.to} 
          to={link.to} 
          className="nav-link"
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;



