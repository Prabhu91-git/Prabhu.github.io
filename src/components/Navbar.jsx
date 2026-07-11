import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#hero" className="logo">
        R. Prabhu
      </a>

      <ul className="nav-menu">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#visualization">Visualization</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;