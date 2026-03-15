import './terapiaspage.css';
import { ServiceBlock } from '../../components/terapias/serviceBlock';
import { useParams } from 'react-router';
import { Footer } from '../../components/general/footer';
import taiChiImg from '../../assets/terapias/taichi.jpg';
import ventosasImg from '../../assets/terapias/ventosas.jpg'
import masajeImg from '../../assets/terapias/masaje.jpg'
import cursoMasajeImg from '../../assets/terapias/curso-masaje.jpg'
import reikiImg from '../../assets/terapias/reiki.jpg'
import { contacto } from '../../components/data/contacto';
import { WhatsappBtn } from '../../components/general/whatsappBtn';
import { Navbar } from '../../components/general/navbar';
import type { UrlProps } from '../../interface/interfaces';
import { useEffect, useState } from 'react';


export const TerapiasPage = ({apiUrl, imgLink}:UrlProps) => {
  const {slug} = useParams();
  if(!slug) return <div>Cargando...</div>;
  const [servicios, setServicios] = useState([])
  const [titulo, setTitulo] = useState('Nuestras Terapias')

  useEffect(()=>{
    if(slug === 'terapias'){
      fetch(`${apiUrl}/categoria/terapia`)
        .then(response=>response.json())
        .then(data=>setServicios(data))
        .catch(error=>console.error('Error fetching: ', error))
  } else if (slug === 'movimiento'){
    setTitulo("Terapias en Movimiento");

    fetch(`${apiUrl}/categoria/disciplina%20terapeutica`)
        .then(response=>response.json())
        .then(data=>setServicios(data))
        .catch(error=>console.error('Error fetching: ', error))
  } else if (slug === 'cursos'){
    setTitulo("Formación Profesional");
    
    fetch(`${apiUrl}/categoria/curso%20terapeutico`)
        .then(response=>response.json())
        .then(data=>setServicios(data))
        .catch(error=>console.error('Error fetching: ', error))
  }
  })


  const terapias = [
    {
      label: "Medicina China",
      title: "Acupuntura",
      description: "Abordaje profesional indoloro para el alivio del dolor y equilibrio sistémico. ",
      imageUrl: "https://images.unsplash.com/photo-1598555763574-dca77e10427e?q=80&w=1197",
      link: "acupuntura",
      linkText: "Descubrir técnicas"
    },
    {
      label: "Bienestar Físico",
      title: "Masajes Terapéuticos",
      description: "Liberación miofascial y descontracturación profunda. Sesiones de 50, 70 y 90 minutos adaptadas a tu necesidad.",
      imageUrl: masajeImg,
      link: "masajes",
      linkText: "Ver opciones y packs",
      isReverse: true // Se invierte automáticamente
    },
    {
      label: "Desintoxicación",
      title: "Terapia con Ventosas",
      description: "Técnica ancestral (Cupping) para mejorar la circulación, aliviar dolores musculares profundos y eliminar toxinas del organismo.",
      imageUrl: ventosasImg, // Asegúrate de tener este import arriba
      link: "ventosas",
      linkText: "Explorar beneficios",
    },
    {
      label: "Energía Vital",
      title: "Reiki",
      description: "Armonización profunda para reducir el estrés y revitalizar el espíritu en un ambiente de paz absoluta.",
      imageUrl: reikiImg,
      link: "reiki",
      isReverse: true, // O false, dependiendo de dónde lo ubiques en la lista
      linkText: "Saber más"
    }
  ];
  const movimientos = [
  {
    label: "Terapia en Movimiento",
    title: "Tai Chi",
    description: "Movimientos suaves, respiracion conciente, y meditacion dinamica.",
    imageUrl: taiChiImg,
    link: "taichi",
    linkText: "Ver horarios y clases"
  },
  {
    label: "Terapia en Movimiento",
    title: "Yoga",
    description: "Posturas, meditacion y respiracion para armonizar tu cuerpo y calmar tu mente.",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80",
    link: "yoga",
    linkText: "Explorar horarios",
    isReverse: true // Para mantener el zigzag visual
  }
];
const cursos = [
  {
    label: "Formación Profesional",
    title: "Masajes Orientales",
    description: "Aprende las técnicas milenarias de descontracturación y relajación con un enfoque terapéutico profesional y clínico.",
    imageUrl: cursoMasajeImg,
    link: "cursomasajes",
    linkText: "Ver programa de estudio"
  },
  {
    label: "Técnica Milenaria",
    title: "Terapia con Ventosas",
    description: "Capacitación intensiva en el uso de ventosas (Cupping) para la liberación miofascial, desintoxicación y alivio del dolor.",
    imageUrl: ventosasImg, // Imagen sugerida de ventosas
    link: "cursoventosas",
    linkText: "Consultar próximas fechas",
    isReverse: true
  },
  {
    label: "Especialización",
    title: "Auriculoterapia",
    description: "Formación en el mapeo de puntos reflejos auriculares para el tratamiento de afecciones físicas y emocionales.",
    imageUrl: "https://images.unsplash.com/photo-1632568851266-b8e23c1738f5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "cursoauriculoterapia",
    linkText: "Ver fechas de dictado"
  },
  {
    label: "Diagnóstico Avanzado",
    title: "Perfil Oriental",
    description: "Capacitación profunda en el sistema de diagnóstico por los cinco elementos y la evaluación integral del paciente.",
    imageUrl: "https://images.unsplash.com/photo-1517817748493-49ec54a32465?q=80",
    link: "cursoperfiloriental",
    linkText: "Saber más de la formación",
    isReverse: true
  }
];

  return (
    <div className="terapias-container">
      <Navbar mensaje={contacto.general.link} />
      {/* Header con el estilo de tu imagen anterior */}
      <header className="terapias-header">
        {/* <img src={loto} alt="Logo Myto" className="logo-icon" /> */}
        <h1>{titulo}</h1>
      </header>

      <div className="terapias-main-limit">

      {servicios.map((servicio, index) => (
        <ServiceBlock key={index} data={servicio} reverse={index % 2 == 1} imgLink={imgLink} />
      ))}
      </div>
      <WhatsappBtn mensaje={contacto.general.link}/>
      <Footer mensaje={contacto.general.link} />
    </div>
  );
};