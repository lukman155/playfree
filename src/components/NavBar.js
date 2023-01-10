import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  const activeClassName = 'underline';

  return (
    <nav>
      <Link to="/">
        PLAYFREE
      </Link>
      <div>
        <div>Categories</div>
        <NavLink to="/about" className={activeClassName}>
          About
        </NavLink>
        <NavLink to="/contact" className={activeClassName}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
