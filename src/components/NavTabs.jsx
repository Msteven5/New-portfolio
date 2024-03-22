import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const pages = useLocation();

  const currentPage = pages.pathname;
  return (
    <nav className="navbar nav-underline nav-fill navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"></a>
        <a className="fs-4 text-light navbar-brand" href="/">Michael Davidson</a>

        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="justify-content-end collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className={currentPage === '/' ? 'nav-link active text-light' : 'nav-link text-light'}
                >
                  Home
                </Link>
              </li>

            <li className="nav-item">
              <Link
                to="/Projects"
                className={currentPage === '/Projects' ? 'nav-link active text-light' : 'nav-link text-light'}
              >
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/About"
                className={currentPage === '/About' ? 'nav-link active text-light' : 'nav-link text-light'}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/Contact"
                className={currentPage === '/Contact' ? 'nav-link active text-light' : 'nav-link text-light'}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


export default NavTabs;
