
import { notFound } from "next/navigation";

const plantas = [
  {
    id: "1",
    nombre: "Monstera deliciosa",
    comun: "Costilla de Adán",
    categoria: "Interior",
    descripcion: "Planta tropical de hojas grandes y características divisiones naturales.",
    cuidados: "Prefiere luz indirecta brillante y un sustrato con buen drenaje.",
    emoji: "🌿",
  },
  {
    id: "2",
    nombre: "Echeveria elegans",
    comun: "Rosa de alabastro",
    categoria: "Suculentas",
    descripcion: "Especie suculenta que forma rosetas compactas de hojas carnosas.",
    cuidados: "Necesita buena iluminación y riego moderado cuando el sustrato se seca.",
    emoji: "🪴",
  },
  {
    id: "3",
    nombre: "Helianthus annuus",
    comun: "Girasol",
    categoria: "Ornamentales",
    descripcion: "Planta anual conocida por sus grandes capítulos florales amarillos.",
    cuidados: "Requiere abundante luz solar y riego adecuado.",
    emoji: "🌻",
  },
  {
    id: "4",
    nombre: "Aloe vera",
    comun: "Sábila",
    categoria: "Medicinales",
    descripcion: "Planta suculenta de hojas carnosas y alargadas.",
    cuidados: "Prefiere luz abundante y suelo bien drenado.",
    emoji: "🌱",
  },
];

export function generateStaticParams() {
  return plantas.map((planta) => ({ id: planta.id }));
}

export default async function DetallePlanta({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const planta = plantas.find((item) => item.id === id);

  if (!planta) notFound();

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
        <span className="eyebrow">{planta.categoria}</span>
        <div style={{ fontSize: "90px" }}>{planta.emoji}</div>
        <h2>{planta.nombre}</h2>
        <p>{planta.comun}</p>
      </section>

      <section className="bottom-banner">
        <div>
          <h2>Descripción</h2>
          <p>{planta.descripcion}</p>
          <h2>Cuidados generales</h2>
          <p>{planta.cuidados}</p>
          <a href="/plantas" className="primary-button">
            ← Volver al catálogo
          </a>
        </div>
      </section>
    </main>
  );
}
