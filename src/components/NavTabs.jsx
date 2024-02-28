function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-underline nav-fill d-flex justify-content-around">
      <li className="nav-item d-flex align-items-center justify-content-center">
        Michael Davidson
      </li>
      
      <li className="nav-item">
        <a
          href="#landing"
          onClick={() => handlePageChange('Landing')}
          className={currentPage === 'Landing' ? 'nav-link active' : 'nav-link'}
        >
          Landing
        </a>
        
      </li>
      <li className="nav-item">
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
