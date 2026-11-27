
import Link from "next/link";
import CatalogoPlantas from "@/components/CatalogoPlantas";

export default function PlantasPage() {
  return (
    <main>
      <header className="navbar">
        <Link href="/" className="logo">
          🌿 Plantopedia
        </Link>

        <nav className="nav-links">
          <Link href="/">Inicio</Link>
          <Link href="/plantas">Plantas</Link>
          <Link href="/categorias">Categorías</Link>
          <Link href="/nosotros">Nosotros</Link>
        </nav>
      </header>

      <section className="intro-section">
        <span className="eyebrow">ENCICLOPEDIA BOTÁNICA</span>
        <h2>Catálogo de plantas</h2>
        <p>
          Descubre especies vegetales, sus características
          y aprende sobre el fascinante reino de las plantas.
        </p>
      </section>

      <CatalogoPlantas />

      <footer className="footer">
        <strong>🌿 Plantopedia</strong>
        <small>Enciclopedia digital de plantas · 2026</small>
      </footer>
    </main>
  );
}
