function Header() {
  return (
    <nav className="#1565c0 blue darken-3">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
