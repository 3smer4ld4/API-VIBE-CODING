
const categorias = [
  {
    nombre: "Plantas de interior",
    descripcion: "Especies que pueden desarrollarse en espacios interiores.",
    emoji: "🪴",
    cantidad: "Decorativas y de interior",
  },
  {
    nombre: "Suculentas",
    descripcion: "Plantas adaptadas para almacenar agua en sus tejidos.",
    emoji: "🌵",
    cantidad: "Gran diversidad de especies",
  },
  {
    nombre: "Ornamentales",
    descripcion: "Plantas cultivadas por su valor estético y decorativo.",
    emoji: "🌻",
    cantidad: "Flores y follajes",
  },
  {
    nombre: "Medicinales",
    descripcion: "Especies estudiadas por sus compuestos y usos tradicionales.",
    emoji: "🌿",
    cantidad: "Conocimiento botánico",
  },
];

export default function CategoriasPage() {
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
        <span className="eyebrow">ORGANIZA TU EXPLORACIÓN</span>
        <h2>Categorías botánicas</h2>
        <p>Explora el mundo vegetal a través de diferentes grupos.</p>
      </section>

      <section className="catalog-section">
        <div className="plant-grid">
          {categorias.map((categoria) => (
            <article className="plant-card" key={categoria.nombre}>
              <div className="plant-illustration">
                <span>{categoria.emoji}</span>
              </div>
              <div className="plant-card-content">
                <h3>{categoria.nombre}</h3>
                <p>{categoria.descripcion}</p>
                <span className="plant-link">{categoria.cantidad}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <strong>🌿 Plantopedia</strong>
        <small>Enciclopedia digital de plantas · 2026</small>
      </footer>
    </main>
  );
}
