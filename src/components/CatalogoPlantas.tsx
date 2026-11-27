
"use client";

import { useEffect, useState } from "react";

interface Planta {
  id: string;
  nombre: string;
  nombreComun: string;
  categoria: string;
  descripcion: string;
  imagen: string;
}

export default function CatalogoPlantas() {
  const [plantas, setPlantas] = useState<Planta[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const obtenerPlantas = async () => {
      try {
        const respuesta = await fetch("/api/plantas");

        if (!respuesta.ok) {
          throw new Error("No fue posible cargar las plantas.");
        }

        const resultado = await respuesta.json();
        setPlantas(resultado.data);
      } catch {
        setError("Ocurrió un error al cargar el catálogo. Intenta nuevamente.");
      } finally {
        setCargando(false);
      }
    };

    obtenerPlantas();
  }, []);

  const categorias = [
    "Todas",
    ...Array.from(new Set(plantas.map((planta) => planta.categoria))),
  ];

  const plantasFiltradas = plantas.filter((planta) => {
    const coincideBusqueda =
      planta.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      planta.nombreComun.toLowerCase().includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoria === "Todas" || planta.categoria === categoria;

    return coincideBusqueda && coincideCategoria;
  });

  if (cargando) {
    return <p className="mensaje-estado">Cargando catálogo de plantas...</p>;
  }

  if (error) {
    return <p className="mensaje-estado">{error}</p>;
  }

  return (
    <section className="catalog-section">
      <div className="catalog-controls">
        <input
          type="search"
          placeholder="Buscar una planta..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          aria-label="Buscar plantas"
        />

        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          aria-label="Filtrar por categoría"
        >
          {categorias.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="plant-grid">
        {plantasFiltradas.map((planta) => (
          <article className="plant-card" key={planta.id}>
            <img
              src={planta.imagen}
              alt={planta.nombreComun}
              className="plant-image"
            />

            <div className="plant-info">
              <span className="plant-category">{planta.categoria}</span>
              <h3>{planta.nombreComun}</h3>
              <p className="scientific-name">{planta.nombre}</p>
              <p>{planta.descripcion}</p>

              <a href={`/plantas/${planta.id}`} className="plant-button">
                Ver información
              </a>
            </div>
          </article>
        ))}
      </div>

      {plantasFiltradas.length === 0 && (
        <p className="mensaje-estado">
          No se encontraron plantas con esos criterios.
        </p>
      )}
    </section>
  );
}
