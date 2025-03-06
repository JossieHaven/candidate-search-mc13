import { NavLink } from "react-router-dom";
import "../index.css"

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav className="nav">
    <ul>
      <li className="nav-item">
        <NavLink to="/" className="nav-link">
          Candidate Search
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/saved" className="nav-link">
          Saved Candidates
        </NavLink>
      </li>
    </ul>
  </nav>
  );
};

export default Nav;
