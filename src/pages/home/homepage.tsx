import { useState, useEffect } from 'react';
import './homepage.css';
import logo from '../../../public/logo.png';
import { DisplayCategorias } from '../../components/home/displayCategorias';
import type { CategoriaItem } from '../../interface/interfaces';
import { Navbar } from '../../components/general/navbar';
import { Footer } from '../../components/general/footer';
import { contacto } from '../../components/data/contacto';
import { WhatsappBtn } from '../../components/general/whatsappBtn';
import formacion1 from '../../assets/varios/formacion1.jpg'

export const HomePage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobileOrTablet = screenWidth <= 1000;


  const categoriasHome: CategoriaItem[] = [
    {
      title: "Terapias Orientales",
      description: "Masajes, Acupuntura, Moxibustion, Ventosas y Emplastos.",
      link: "terapias",
      button: "Explorar terapias",
      imageUrl: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80" // Imagen de masajes/agujas
    },
    {
      title: "Respiración y Movimiento",
      description: "Clases de Tai Chi y Yoga para todas las edades.",
      link: "movimiento",
      button: "Explorar terapias",
      imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80" // Imagen de yoga/meditación
    },
    {
      title: "Formación",
      description: "Cursos y capacitaciones profesionales en técnicas orientales.",
      link: "cursos",
      button: "Ver cursos",
      imageUrl: formacion1 // Imagen de estudio/pergamino
    }
  ];

  return (
    <div className="home-container">
      <Navbar mensaje={contacto.general.link} />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <img className='home-logo' src={logo} alt="Logo MYTO" />
          <p className="hero-description">
            Terapias orientales, basadas en la Medicina Tradicional China.
          </p>
          <div className="hero-btns">
            <a
              href={isMobileOrTablet ? "/terapias" : "#terapias"}
              className="btn-primary"
            >
              Ver Terapias
            </a>
            <a href={contacto.general.link} className="btn-secondary">Pedir Turno</a>
            {isMobileOrTablet && (
              <a href="/movimiento" className="btn-primary">Ver Actividades</a>
            )}
            <a href="/cursos" className="btn-primary">Formación</a>
          </div>
        </div>
      </section>

      {/* CATEGORÍAS PRINCIPALES */}
      <DisplayCategorias title="Nuestros Servicios" data={categoriasHome} />
      <Footer mensaje={contacto.general.link} />
      <WhatsappBtn mensaje={contacto.general.link} />
    </div>
  );
};