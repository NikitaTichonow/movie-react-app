function Footer() {
  return (
    <footer className="page-footer #64b5f6 blue lighten-4">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">
            Link
          </a>
        </div>
      </div>
    </footer>
  );
}
export { Footer };
