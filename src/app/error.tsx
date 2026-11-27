
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="loading-container">
      <div className="loading-icon">🍃</div>
      <h2>¡Ups! Algo salió mal</h2>
      <p>No pudimos cargar esta sección de Plantopedia.</p>

      <button className="plant-button" onClick={() => reset()}>
        Intentar nuevamente
      </button>
    </main>
  );
}
