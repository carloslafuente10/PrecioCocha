export default function Home() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="brand" href="/" aria-label="PrecioCocha, inicio">
          <span className="brand-mark" aria-hidden="true">P</span>
          <span>PrecioCocha</span>
        </a>
        <span className="header-note">Precios claros, mejores decisiones</span>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow"><span className="status-dot" /> Una nueva forma de comprar en Bolivia</p>
        <h1 id="hero-title">Encuentra el mejor precio para lo que necesitas.</h1>
        <p className="hero-copy">
          Estamos preparando un espacio para buscar y comparar precios de productos en comercios de Bolivia. Empezamos en Cochabamba.
        </p>
        <div className="search-preview" aria-label="Vista previa de búsqueda">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
            <circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" strokeWidth="1.8" />
            <path d="m16 16 4.2 4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <span>Busca un producto para comparar precios</span>
          <span className="search-key" aria-hidden="true">⌕</span>
        </div>
        <p className="search-note">Muy pronto podrás buscar entre distintos comercios.</p>
      </section>

      <footer className="site-footer">
        <span>Hecho para comprar mejor en Bolivia.</span>
        <span className="location"><span className="location-dot" /> Cochabamba, Bolivia</span>
      </footer>
    </main>
  );
}
