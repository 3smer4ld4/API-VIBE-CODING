
import CatalogoPlantas from "@/components/CatalogoPlantas";

export default function Home() {
  return (
    <main>
      <header className="navbar">
        <a href="/" className="brand">
          <span className="brand-icon">🌿</span>
          Plantopedia
        </a>

        <nav className="nav-links">
          <a href="/">Inicio</a>
          <a href="/plantas">Plantas</a>
          <a href="/categorias">Categorías</a>
          <a href="/nosotros">Nosotros</a>
        </nav>

        <a href="#catalogo" className="nav-button">
          Explorar
        </a>
      </header>

      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">ENCICLOPEDIA BOTÁNICA DIGITAL</span>
          <h1>
            Descubre el fascinante mundo de las <span>plantas.</span>
          </h1>
          <p>
            Aprende sobre especies, características y cuidados.
            Encuentra inspiración para conectar con la naturaleza.
          </p>

          <div className="hero-actions">
            <a href="#catalogo" className="primary-button">
              Explorar catálogo →
            </a>
            <a href="/nosotros" className="secondary-button">
              Conoce Plantopedia
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>100%</strong>
              <span>Pasión natural</span>
            </div>
            <div>
              <strong>🌱</strong>
              <span>Aprendizaje botánico</span>
            </div>
            <div>
              <strong>∞</strong>
              <span>Especies por descubrir</span>
            </div>
          </div>
        </div>

        <div className="hero-art" aria-label="Ilustración decorativa de plantas">
          <div className="art-circle">
            <span className="art-leaf leaf-one">🌿</span>
            <span className="art-leaf leaf-two">🍃</span>
            <span className="art-leaf leaf-three">🌱</span>
            <span className="art-center">P</span>
          </div>
          <div className="floating-note">
            <span>🌼</span>
            <div>
              <strong>Conocimiento natural</strong>
              <small>Crece aprendiendo</small>
            </div>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <span className="eyebrow">EXPLORA Y APRENDE</span>
        <h2>La naturaleza tiene mucho que enseñarte</h2>
        <p>
          Una guía para conocer la diversidad del reino vegetal,
          descubrir nuevas especies y aprender a cuidarlas.
        </p>
      </section>

      <CatalogoPlantas />

      <section className="bottom-banner">
        <div>
          <span className="eyebrow">CADA PLANTA TIENE UNA HISTORIA</span>
          <h2>El conocimiento también puede echar raíces.</h2>
          <p>Explora, aprende y descubre el mundo vegetal.</p>
        </div>
        <a href="/categorias" className="primary-button">
          Ver categorías →
        </a>
      </section>

      <footer className="footer">
        <a href="/" className="brand">
          <span className="brand-icon">🌿</span>
          Plantopedia
        </a>
        <p>Una enciclopedia digital para amantes de la naturaleza.</p>
        <small>© 2026 Plantopedia. Proyecto educativo.</small>
      </footer>
    </main>
  );
}
