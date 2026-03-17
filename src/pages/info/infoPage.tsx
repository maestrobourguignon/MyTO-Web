import { useParams } from 'react-router';
import './infopage.css';
import { Footer } from '../../components/general/footer';
import { Navbar } from '../../components/general/navbar';
import { WhatsappBtn } from '../../components/general/whatsappBtn';
import type { UrlProps } from '../../interface/interfaces';
import { useEffect, useState } from 'react';

interface InfoData {
  mensaje_whatsapp: string;
  alt_img_url: string | null;
  img_url: string;
  titulo: string;
  descripcion: string;
  temario?: string;
  boton_texto?: string;
  beneficio_label?: string;
  inscripcion?: string;
}


export const InfoPage = ({ apiUrl, imgLink }: UrlProps) => {
  const { slug } = useParams<{ slug: string }>();
  const key = slug || '';
  
  const [data, setData] = useState<InfoData | null>(null);
  const [beneficios, setBeneficios] = useState<any[]>([]);
  const [opciones, setOpciones] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${apiUrl}contenido/${slug}`)
      .then(response => response.json())
      .then(data => setData(data))
    fetch(`${apiUrl}beneficios/${slug}`)
      .then(response => response.json())
      .then(data => setBeneficios(data))
    if (slug === 'acupuntura' || slug === 'masajes' || slug === 'ventosas') {
      fetch(`${apiUrl}opciones/${slug}`)
        .then(response => response.json())
        .then(data => setOpciones(data))
    }
  }, [slug])

  let sobre = ''

  if (key === 'yoga' || key === 'taichi') {
    sobre = 'Sobre la práctica'
  } else if (key === 'masajes' || key === 'ventosas' || key === 'acupuntura' || key === 'reiki') {
    sobre = 'Acerca de esta terapia'
  } else {
    sobre = 'Acerca de la formación'
  }
  if (!data) return <div className="cargando">Contenido no encontrado...</div>;

  return (
    <div className="info-container">
      <Navbar mensaje={data?.mensaje_whatsapp || ''} />
      {/* HEADER CON IMAGEN DE FONDO */}
      <header className="info-hero" style={{ backgroundImage: `url(${imgLink}${data?.alt_img_url ? data.alt_img_url : data?.img_url})` }}>
        <div className="hero-overlay">
          <div className="hero-titles">
            {/* <span className="info-id">{data.id}</span> */}
            <h1>{data?.titulo}</h1>
            {/* <p className="sub-text">{data.subtitulo}</p> */}
          </div>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL LIMITADO A 1000PX */}
      <main className="info-main-limit">
        <div className="info-layout">

          {/* COLUMNA IZQUIERDA: DESCRIPCIÓN */}
          <section className="info-description">
            <div className="description-card">
              <h2>{sobre}</h2>
              <div className="accent-bar"></div>
              <p>{data?.descripcion}</p>

              {data?.temario ?
                <button className="btn-folleto" onClick={() => window.open(data?.temario)}>
                  <i className="bi bi-file-earmark-pdf icono-grande"></i> Ver Folleto informativo
                </button>
                :
                <button className="btn-whatsapp-cta" onClick={() => window.open(data?.mensaje_whatsapp)}>
                  {data?.boton_texto}
                </button>}
            </div>
          </section>

          {/* COLUMNA DERECHA: BENEFICIOS (FLOTANTE) */}
          <aside className="info-sidebar">
            <div className="benefits-card">
              <h3>{data?.beneficio_label || "Beneficios"}</h3>
              <div className="benefits-list">
                {beneficios.map((ben: any, index: number) => (
                  <div key={index} className="benefit-item">
                    <span className="benefit-icon">{ben.emoji}</span>
                    <div className="benefit-text">
                      <h4>{ben.titulo}</h4>
                      <p>{ben.descripcion}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>


        </div>
      </main>
      {opciones.length > 0 && (
        <>
          <section className="zen-options-section">
            <div className="zen-container">
              <div className="zen-header">
                <span className="zen-subtitle">Modalidades</span>
                <h2 className="zen-title">Sesiones Disponibles</h2>
                <div className="zen-divider"></div>
              </div>

              <div className="zen-list">
                {opciones.map((opt: any, index: number) => (
                  <div key={index} className="zen-item">
                    <div className="zen-item-header">
                      <span className="zen-index">{(index + 1).toString().padStart(2, '0')}</span>
                      <h4>{opt.titulo}</h4>
                    </div>
                    <p className="zen-item-detail">{opt.detalle}</p>
                  </div>
                ))}
              </div>


            </div>
          </section>
          <p className="zen-footer-note">
            * Todas las sesiones se realizan en un ambiente climatizado y armonizado.
            Consultar por atención a domicilio o sesiones en dúo.
          </p>
        </>
      )}
      {key === 'masajes' ?
        <section className="info-professional">
          <div className="info-box">
            <h3>Compromiso Profesional</h3>
            <p>
              Todas nuestras terapias son de carácter <strong>estrictamente profesional y terapéutico</strong>.
              Nos especializamos en salud integral basada en la Medicina Tradicional China.
            </p>
            <div className="emblema">⛩️</div>
          </div>
        </section>
        : <></>}
      {data?.temario ?
        <section className="zen-options-section margin-bot20">
          <div className="zen-container">
            <div className="zen-header">
              <h2 className="zen-title2">Llená el siguiente formulario para confirmar tu presencia al curso</h2>
              <div className="zen-divider"></div>
              <button className="btn-folleto" onClick={() => window.open(data?.inscripcion)}>
                <i className="bi bi-pencil-square icono-grande"></i>  Formulario de inscripcion
              </button>
            </div>


          </div>
        </section>
        :
        <></>}

      <WhatsappBtn mensaje={data?.mensaje_whatsapp || ''} />
      <Footer mensaje={data?.mensaje_whatsapp || ''} />
    </div>
  );
};