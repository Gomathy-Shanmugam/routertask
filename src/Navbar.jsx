import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    // <div className='container'>
    //   <div className='row'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid ">
        <Link className="navbar-brand " to={"/"}>
          <b>ALL</b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <Link
                className="nav-link active "
                aria-current="page"
                to={"/fullstack"}
              >
                <b>FULL STACK DEVELOPMENT</b>
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/datascience"}
              >
                <b>DATA SCIENCE</b>
              </Link>
            </li>
            <li className="nav-item mx-2 ">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/cyber"}
              >
                <b>CYBER SECURITY</b>
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link active"
                aria-current="page"
                to={"/career"}
              >
                <b>CAREER</b>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    //   </div>
    // </div>
  );
}

export default Navbar;
