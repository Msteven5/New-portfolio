function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="sticky-top mb-5 navbar nav-underline nav-fill navbar-expand-lg">
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
              <a
                href="#home"
                onClick={() => handlePageChange('Home')}
                className={currentPage === 'Home' ? 'nav-link active text-light' : 'nav-link text-light'}
              >
                Home
              </a>

            </li>
            <li className="nav-item">
              <a
                href="#projects"
                onClick={() => handlePageChange('Projects')}
                className={currentPage === 'Projects' ? 'nav-link active text-light' : 'nav-link text-light'}
              >
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#about"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active text-light' : 'nav-link text-light'}
              >
                About
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active text-light' : 'nav-link text-light'}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}


export default NavTabs;
