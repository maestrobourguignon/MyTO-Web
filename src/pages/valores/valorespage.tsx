import { ValorItem } from '../../components/data/valorItem';
import data from '../../components/data/valoresData.json';
import type { UrlProps } from '../../interface/interfaces';
import './valorespage.css';

export const ValoresPage = ({apiUrl}:UrlProps) => {
  return (
    <div className="valores-view">
      <header className="page-intro">
        <span className="pre-title">Lista de Valores</span>
        <h1>Inversión en tu Bienestar</h1>
        <div className="intro-line"></div>
      </header>

      <main className="menu-container">
        {data.categorias.map((cat, idx) => (
          <section key={idx} className="menu-section">
            <div className="section-header">
              <h2 className="title-serif">{cat.titulo}</h2>
              <p className="section-desc">{cat.descripcion}</p>
            </div>
            
            <div className="menu-list">
              {cat.items.map((item, i) => (
                <ValorItem 
                  key={i}
                  nombre={item.nombre}
                  precio={item.precio}
                  sub={item.sub}
                  
ahorro={item && 'ahorro' in item ? item.ahorro : undefined}
highlight={item && 'highlight' in item ? item.highlight : false}
                />
              ))}
            </div>
          </section>
        ))}

        <footer className="valores-footer">
          <p>* Consultar por sesiones compartidas en dupla para familiares o amigos.</p>
          <a href="https://wa.me/TU_NUMERO" className="btn-wa-valores">Agendar por WhatsApp</a>
        </footer>
      </main>
    </div>
  );
};