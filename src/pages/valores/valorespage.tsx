import { useState, useEffect } from 'react';
import type { UrlProps } from '../../interface/interfaces';
import './valorespage.css';
import { contacto } from '../../components/data/contacto';
import { useParams } from 'react-router';

interface ValorAPI {
  id: number;
  terapia: string;
  titulo: string;
  valor: number;
  detalle: string;
  sinopsis: string;
  pack_3: number;
  pack_5: number;
}

interface CategoriaAgrupada {
  nombre: string;
  items: ValorAPI[];
}

const formatPrice = (price: number) => {
  return price === 0 ? 'Consultar' : `$${price.toLocaleString('es-AR')}`;
};

export const ValoresPage = ({ apiUrl }: UrlProps) => {
  const { slug } = useParams();
  const [categorias, setCategorias] = useState<CategoriaAgrupada[]>([]);
  const [ventosasItems, setVentosasItems] = useState<ValorAPI[]>([]);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // const [order, setOrder] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}opciones/all`);
        if (!response.ok) throw new Error('Error al cargar los valores');
        const data: ValorAPI[] = await response.json();

        // Agrupar por terapia
        const grouped = data.reduce((acc, item) => {
          const terapia = item.terapia.charAt(0).toUpperCase() + item.terapia.slice(1);
          if (!acc[terapia]) {
            acc[terapia] = { nombre: terapia, items: [] };
          }
          acc[terapia].items.push(item);
          return acc;
        }, {} as Record<string, CategoriaAgrupada>);

        // Ordenar categorías: acupuntura, masajes, ventosas, reiki
        if (slug === 'valoresacupuntura') {
          const order = ['Acupuntura', 'Perfil'];
          const sortedCategorias = order
            .filter(cat => grouped[cat])
            .map(cat => grouped[cat]);

          setCategorias(sortedCategorias);
        } else if (slug === 'valoresmasajes') {
          // Solo mostrar Masajes para valoresmasajes
          const order = ['Masajes'];
          const sortedCategorias = order
            .filter(cat => grouped[cat])
            .map(cat => grouped[cat]);

          setCategorias(sortedCategorias);
          // Para valoresmasajes, expandir todas las categorías por defecto
          setOpenCategory('Masajes');
          // Guardar items de Ventosas para usarlos en el renderizado especial
          if (grouped['Ventosas']) {
            setVentosasItems(grouped['Ventosas'].items);
          }
        } else {
          const order = ['Acupuntura', 'Masajes', 'Ventosas', 'Reiki', 'Perfil', 'Clase'];
          const sortedCategorias = order
            .filter(cat => grouped[cat])
            .map(cat => grouped[cat]);

          setCategorias(sortedCategorias);
        }

      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  const toggleCategory = (categoria: string) => {
    setOpenCategory(prev => prev === categoria ? null : categoria);
  };

  if (loading) {
    return (
      <div className="valores-view">
        <div className="valores-loading">
          <div className="loading-spinner"></div>
          <p>Cargando valores...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="valores-view">
        <div className="valores-error">
          <p>Error: {error}</p>
          <button onClick={() => window.location.reload()}>Reintentar</button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="valores-view">
        <header className="page-intro">
          <span className="pre-title">Lista de Valores</span>
          <h1>Inversión en tu Bienestar</h1>
          <div className="intro-line"></div>
          <p className="intro-subtitle">
            Conoce el valor de nuestras terapias y elige la opción que mejor se adapte a vos
          </p>
        </header>

        <main className="menu-container">
          {categorias.map((categoria) => (
            <section
              key={categoria.nombre}
              className={`menu-section ${openCategory === categoria.nombre ? 'open' : ''} ${slug === 'valoresmasajes' ? 'always-open' : ''}`}
            >
              <button
                className={`accordion-header ${slug === 'valoresmasajes' ? 'no-collapse' : ''}`}
                onClick={() => slug !== 'valoresmasajes' && toggleCategory(categoria.nombre)}
                aria-expanded={openCategory === categoria.nombre}
              >
                <div className="accordion-title-wrap">
                  <h2 className="title-serif">{categoria.nombre === 'Clase' ? 'Respiración y Movimiento' : categoria.nombre}</h2>
                  <span className="item-count">{slug === 'valoresmasajes' ? '5' : categoria.items.length} opciones</span>
                </div>
                <span className="accordion-icon">
                  {openCategory === categoria.nombre ? '−' : '+'}
                </span>
              </button>

              <div className={`accordion-content ${openCategory === categoria.nombre ? 'expanded' : ''}`}>
                <div className="menu-list">
                  {slug === 'valoresmasajes' && categoria.nombre === 'Masajes' ? (
                    // Renderizado especial para valoresmasajes con numeración personalizada
                    <>
                      {categoria.items.slice(0, 3).map((item, idx) => (
                        <div key={item.id} className="menu-item">
                          <span className="item-option-number">Opción {idx + 1}</span>
                          <div className="item-main">
                            <span className="item-name">{item.titulo}</span>
                            <span className="item-dots"></span>
                            <span className="item-price">{formatPrice(item.valor)}</span>
                          </div>
                          <p className="item-sub">{item.sinopsis}</p>
                          <p className="item-detail">{item.detalle}</p>
                          {(item.pack_3 > 0 || item.pack_5 > 0) && (
                            <div className="item-packs">
                              <span className="pack-label">Packs ahorro:</span>
                              {item.pack_3 > 0 && (
                                <span className="pack-tag">x3: {formatPrice(item.pack_3)}</span>
                              )}
                              {item.pack_5 > 0 && (
                                <span className="pack-tag">x5: {formatPrice(item.pack_5)}</span>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                      {/* Ventosas como opción 4.1, 4.2, 4.3, 4.4 */}
                      {ventosasItems.length > 0 && ventosasItems.map((item, idx) => (
                        <div key={item.id} className="menu-item">
                          <div className="item-main">
                            <span className="item-option-number">Opción 4.{idx + 1}</span>
                            <span className="item-name">{item.titulo}</span>
                            <span className="item-dots"></span>
                            <span className="item-price">{formatPrice(item.valor)}</span>
                          </div>
                          <p className="item-sub">{item.sinopsis}</p>
                          <p className="item-detail">{item.detalle}</p>
                          {(item.pack_3 > 0 || item.pack_5 > 0) && (
                            <div className="item-packs">
                              <span className="pack-label">Packs ahorro:</span>
                              {item.pack_3 > 0 && (
                                <span className="pack-tag">x3: {formatPrice(item.pack_3)}</span>
                              )}
                              {item.pack_5 > 0 && (
                                <span className="pack-tag">x5: {formatPrice(item.pack_5)}</span>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                      {/* Último item de Masajes como opción 5 */}
                      {categoria.items.slice(3).map((item) => (
                        <div key={item.id} className="menu-item">
                          <div className="item-main">
                            <span className="item-option-number">Opción 5</span>
                            <span className="item-name">{item.titulo}</span>
                            <span className="item-dots"></span>
                            <span className="item-price">{formatPrice(item.valor)}</span>
                          </div>
                          <p className="item-sub">{item.sinopsis}</p>
                          <p className="item-detail">{item.detalle}</p>
                          {(item.pack_3 > 0 || item.pack_5 > 0) && (
                            <div className="item-packs">
                              <span className="pack-label">Packs ahorro:</span>
                              {item.pack_3 > 0 && (
                                <span className="pack-tag">x3: {formatPrice(item.pack_3)}</span>
                              )}
                              {item.pack_5 > 0 && (
                                <span className="pack-tag">x5: {formatPrice(item.pack_5)}</span>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </>
                  ) : (
                    // Renderizado normal para otros slugs
                    categoria.items.map((item) => (
                      <div key={item.id} className="menu-item">
                        <div className="item-main">
                          <span className="item-name">{item.titulo}</span>
                          <span className="item-dots"></span>
                          <span className="item-price">{formatPrice(item.valor)}</span>
                        </div>
                        <p className="item-sub">{item.sinopsis}</p>
                        <p className="item-detail">{item.detalle}</p>

                        {(item.pack_3 > 0 || item.pack_5 > 0) && (
                          <div className="item-packs">
                            <span className="pack-label">Packs ahorro:</span>
                            {item.pack_3 > 0 && (
                              <span className="pack-tag">x3: {formatPrice(item.pack_3)}</span>
                            )}
                            {item.pack_5 > 0 && (
                              <span className="pack-tag">x5: {formatPrice(item.pack_5)}</span>
                            )}
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </section>
          ))}
        </main>

      </div>
      <footer className="valores-footer">
        <p>* Los valores pueden estar sujetos a cambios. Consultá por sesiones compartidas para familiares o amigos.</p>
        <a
          href={contacto.general.link}
          className="btn-wa-valores"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Agendar por WhatsApp
        </a>
      </footer>
    </>
  );
};