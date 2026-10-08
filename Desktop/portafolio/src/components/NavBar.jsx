/** Navbar de Bootstrap. Props: brand, links [{label, href}] */
export default function NavBar({ brand, links = [] }) {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top" aria-label="Principal">
      <div className="container">
        <a className="navbar-brand" href="#introduccion">{brand}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Abrir menú">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            {links.map((l) => (
              <li className="nav-item" key={l.href}><a className="nav-link" href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
