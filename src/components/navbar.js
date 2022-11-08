import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => (
  <nav className="nav">
    <div>
      <Link to="/" className="header">Math-Magicians</Link>
    </div>
    <div className="navDiv">
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/calculator">Calculator</Link>
      <Link className="link" to="/quotes">Quotes</Link>
    </div>
  </nav>
);

export default Navbar;
