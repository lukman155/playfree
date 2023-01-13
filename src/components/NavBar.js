import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <Link to="/">
      PLAYFREE
    </Link>
    <div>
      <button type="button">Categories</button>
    </div>
  </nav>
);

export default NavBar;
