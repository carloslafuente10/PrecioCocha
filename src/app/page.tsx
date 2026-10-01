const steps = [
  { number: "01", title: "Busca", description: "Encuentra el producto que necesitas." },
  {
    number: "02",
    title: "Compara",
    description: "Consulta los precios disponibles en diferentes comercios.",
  },
  {
    number: "03",
    title: "Decide",
    description: "Elige dónde comprar según precio y ubicación.",
  },
];

const stores = ["Hipermaxi", "IC Norte", "Otros comercios"];

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" strokeWidth="1.8" />
      <path d="m16 16 4.2 4.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="PrecioBol, inicio">
        <span className="brand-mark" aria-hidden="true">P</span>
        <span>PrecioBol</span>
      </a>
      <nav className="main-nav" aria-label="Navegación principal">
        <a href="#inicio">Inicio</a>
        <a href="#como-funciona">Cómo funciona</a>
        <a href="#comercios">Comercios</a>
      </nav>
      <a className="login-link" href="#contacto">Ingresar</a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-content">
        <p className="eyebrow"><span className="eyebrow-line" /> Una forma más simple de comprar</p>
        <h1 id="hero-title">Compara precios en un solo lugar</h1>
        <p className="hero-copy">
          Busca un producto y descubre dónde encontrarlo al mejor precio.
        </p>
        <div className="search-form" role="search">
          <label className="search-input-wrap" htmlFor="product-search">
            <SearchIcon />
            <input
              id="product-search"
              name="producto"
              type="search"
              placeholder="¿Qué producto estás buscando?"
            />
          </label>
          <button className="primary-button" type="button">Buscar producto</button>
        </div>
        <p className="hero-location">Comenzamos en Cochabamba, Bolivia</p>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="content-section how-section" id="como-funciona" aria-labelledby="how-title">
      <div className="section-heading">
        <p className="section-kicker">Así de sencillo</p>
        <h2 id="how-title">¿Cómo funciona?</h2>
      </div>
      <div className="steps-grid">
        {steps.map((step) => (
          <article className="step-card" key={step.number}>
            <span className="step-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Stores() {
  return (
    <section className="stores-section" id="comercios" aria-labelledby="stores-title">
      <div className="content-section stores-inner">
        <div className="section-heading stores-heading">
          <p className="section-kicker">Más opciones para comparar</p>
          <h2 id="stores-title">Comercios participantes</h2>
          <p className="section-description">
            Estos nombres son ejemplos de comercios que podrían formar parte de la plataforma.
          </p>
        </div>
        <div className="stores-grid">
          {stores.map((store, index) => (
            <article className="store-card" key={store}>
              <span className={`store-symbol store-symbol-${index + 1}`} aria-hidden="true">
                {store === "Otros comercios" ? "+" : store.slice(0, 1)}
              </span>
              <div className="store-info">
                <h3>{store}</h3>
                <span>Ejemplo visual · fuente en evaluación</span>
              </div>
              <span className="store-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="contacto">
      <div className="footer-main">
        <div className="footer-brand-block">
          <a className="brand footer-brand" href="#inicio">
            <span className="brand-mark" aria-hidden="true">P</span>
            <span>PrecioBol</span>
          </a>
          <p>Información de precios para tomar mejores decisiones de compra.</p>
        </div>
        <nav className="footer-nav" aria-label="Navegación del pie de página">
          <a href="#inicio">Inicio</a>
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#comercios">Comercios</a>
          <a href="mailto:hola@preciobol.bo">Contacto</a>
        </nav>
      </div>
      <div className="footer-bottom"><span>© 2026 PrecioBol</span><span>Bolivia</span></div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <div className="page-shell">
        <Header />
        <Hero />
        <HowItWorks />
      </div>
      <Stores />
      <div className="page-shell"><Footer /></div>
    </main>
  );
}
