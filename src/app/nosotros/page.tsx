
export default function NosotrosPage() {
  return (
    <main>
      <header className="navbar">
        <a href="/" className="brand">🌿 Plantopedia</a>
        <nav className="nav-links">
          <a href="/">Inicio</a>
          <a href="/plantas">Plantas</a>
          <a href="/categorias">Categorías</a>
          <a href="/nosotros">Nosotros</a>
        </nav>
      </header>

      <section className="intro-section">
        <span className="eyebrow">CONOCE NUESTRO PROYECTO</span>
        <h2>Acerca de Plantopedia</h2>
        <p>
          Plantopedia es una enciclopedia digital educativa
          dedicada a compartir información sobre el reino vegetal.
        </p>
      </section>

      <section className="bottom-banner">
        <div>
          <h2>Nuestra misión</h2>
          <p>
            Facilitar el acceso al conocimiento botánico mediante
            una plataforma sencilla, organizada y accesible.
          </p>
          <h2>Nuestra visión</h2>
          <p>
            Convertirnos en un espacio digital de aprendizaje
            que fomente el interés y respeto por la biodiversidad.
          </p>
        </div>
        <span style={{ fontSize: "80px" }}>🌳</span>
      </section>

      <footer className="footer">
        <strong>🌿 Plantopedia</strong>
        <small>Enciclopedia digital de plantas · 2026</small>
      </footer>
    </main>
  );
}
