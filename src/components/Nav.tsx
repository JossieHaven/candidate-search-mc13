
import { Link, useLocation } from "react-router-dom";

  // x TODO: Add necessary code to display the navigation bar and link between the pages

  const Nav = () => {
    const currentPage = useLocation().pathname;
    return (
      <div className="nav">
        <Link
          key={1}
          className={
            currentPage === "/" ? "active nav-link nav-item" : "nav-link nav-item"
          }
          to="/"
        >
          Home
        </Link>
  
        <Link
          key={2}
          className={
            currentPage === "/SavedCandidates"
              ? "active nav-link nav-item"
              : "nav-link nav-item"
          }
          to="/SavedCandidates"
        >
          Potential Candidates
        </Link>
      </div>
    );
  };
  
  export default Nav;
