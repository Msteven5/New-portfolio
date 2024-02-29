function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar nav-underline navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#" />
        <a class="fs-4 text-light navbar-brand" href="#">Michael Davidson</a>

        <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="d-flex justify-content-end collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">

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
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  );
}


export default NavTabs;
